/* Preamble crossword — Dialogues on Democracy & Development */
(() => {
  "use strict";

  const LEVELS = window.DOD_CROSSWORD_LEVELS;
  const ORDER = ["easy", "medium", "hard"];
  const root = document.getElementById("game");
  const params = new URLSearchParams(location.search);
  const level = params.get("level");

  if (!LEVELS[level]) {
    // No level chosen yet: offer the three.
    root.innerHTML = `
      <section class="chooser">
        <h2>Choose your level</h2>
        <p class="chooser-sub">Every level uses words from the Preamble. Start easy and work up.</p>
        <div class="levels wide">
          ${ORDER.map(k => `
            <a class="level" href="crossword.html?level=${k}">
              <span class="lv">${LEVELS[k].label}</span>
              <span class="ln">${LEVELS[k].entries.length} words · ${LEVELS[k].rows}×${LEVELS[k].cols} grid</span>
              <span class="lb">${LEVELS[k].blurb}</span>
            </a>`).join("")}
        </div>
      </section>`;
    return;
  }

  const DATA = LEVELS[level];
  const ROWS = DATA.rows, COLS = DATA.cols;
  const STORE = "dod-crossword-" + level + "-v2";

  const PREAMBLE = [
    "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:",
    "JUSTICE, social, economic and political;",
    "LIBERTY of thought, expression, belief, faith and worship;",
    "EQUALITY of status and of opportunity;",
    "and to promote among them all",
    "FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;",
    "IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION."
  ];

  const ICONS = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74V16h8v-1.26A7 7 0 0 0 12 2z"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/></svg>',
    redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>'
  };

  /* ---------- Model ---------- */
  const cells = new Map();                 // "r,c" -> { r, c, letter, num, A: entry, D: entry }
  const ck = (r, c) => r + "," + c;
  DATA.entries.forEach(e => {
    for (let i = 0; i < e.answer.length; i++) {
      const r = e.row + (e.dir === "D" ? i : 0);
      const c = e.col + (e.dir === "A" ? i : 0);
      const cell = cells.get(ck(r, c)) || { r, c, letter: e.answer[i] };
      cell[e.dir] = e;
      if (i === 0) cell.num = e.num;
      cells.set(ck(r, c), cell);
    }
  });
  const across = DATA.entries.filter(e => e.dir === "A").sort((a, b) => a.num - b.num);
  const down = DATA.entries.filter(e => e.dir === "D").sort((a, b) => a.num - b.num);
  const TOTAL_CELLS = cells.size;

  let values = {};            // "r,c" -> letter typed
  let revealed = {};          // "r,c" -> true when the answer was given away
  let cur = { r: DATA.entries[0].row, c: DATA.entries[0].col };
  let dir = "A";
  let elapsed = 0, ticking = false, tickId = null, done = false;
  let showPreamble = false;

  function saveState() {
    try { localStorage.setItem(STORE, JSON.stringify({ values, revealed, elapsed, done })); } catch (e) { /* ignore */ }
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE);
      if (!raw) return;
      const s = JSON.parse(raw);
      values = s.values || {}; revealed = s.revealed || {}; elapsed = s.elapsed || 0; done = !!s.done;
    } catch (e) { /* ignore */ }
  }

  const entryCells = e => {
    const out = [];
    for (let i = 0; i < e.answer.length; i++) out.push(ck(e.row + (e.dir === "D" ? i : 0), e.col + (e.dir === "A" ? i : 0)));
    return out;
  };
  const curCell = () => cells.get(ck(cur.r, cur.c));
  const curEntry = () => { const cell = curCell(); return cell && (cell[dir] || cell[dir === "A" ? "D" : "A"]); };
  const filledCount = () => Object.keys(values).filter(k => values[k]).length;
  const correctCount = () => [...cells.keys()].filter(k => values[k] === cells.get(k).letter).length;
  const entryDone = e => entryCells(e).every(k => values[k] === cells.get(k).letter);

  /* ---------- View ---------- */

  function gridHTML() {
    let html = `<div class="grid" id="grid" style="--cols:${COLS};--rows:${ROWS}" role="grid" aria-label="Crossword grid">`;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = cells.get(ck(r, c));
        if (!cell) { html += '<div class="cell blank" aria-hidden="true"></div>'; continue; }
        html += `<div class="cell" role="gridcell" data-r="${r}" data-c="${c}" tabindex="-1" aria-label="Row ${r + 1} column ${c + 1}">
          ${cell.num ? `<span class="cnum">${cell.num}</span>` : ""}<span class="letter"></span></div>`;
      }
    }
    return html + "</div>";
  }

  function clueList(list, label, dirKey) {
    return `<div class="clue-col">
      <h3>${label}</h3>
      <ol class="clues" data-dir="${dirKey}">
        ${list.map(e => `<li><button class="clue" data-num="${e.num}" data-dir="${e.dir}"><span class="cn">${e.num}</span><span class="ct">${e.clue}</span><span class="clen">${e.answer.length}</span></button></li>`).join("")}
      </ol>
    </div>`;
  }

  root.innerHTML = `
    <div class="level-strip">
      <span class="level-now">${DATA.label} · ${DATA.entries.length} words</span>
      <span class="level-links">
        ${ORDER.filter(k => k !== level).map(k => `<a href="crossword.html?level=${k}">Switch to ${LEVELS[k].label.toLowerCase()}</a>`).join("")}
      </span>
    </div>

    <div class="game-bar">
      <div class="stat"><span class="stat-label">Progress</span><div class="pbar"><i id="pfill"></i></div><span class="stat-val" id="pval">0%</span></div>
      <div class="stat time">${ICONS.clock}<span class="stat-val" id="timer">00:00</span></div>
      <div class="tools">
        <button class="btn btn-outline btn-sm" data-act="check">${ICONS.check} Check</button>
        <button class="btn btn-outline btn-sm" data-act="reveal-letter">${ICONS.bulb} Letter</button>
        <button class="btn btn-outline btn-sm" data-act="reveal-word">${ICONS.eye} Word</button>
        <button class="btn btn-outline btn-sm" data-act="preamble">${ICONS.book} Preamble</button>
        <button class="btn btn-ghost btn-sm" data-act="clear" data-confirm>${ICONS.redo} Clear</button>
      </div>
    </div>

    <div id="preamble" class="preamble-panel" hidden>
      <h3>The Preamble of the Constitution of India</h3>
      ${PREAMBLE.map((l, i) => `<p${i === 0 ? ' class="open"' : ""}>${l}</p>`).join("")}
      <p class="note">Every answer in this grid is a word from these lines.</p>
    </div>

    <div class="board">
      <div class="grid-wrap">
        <div class="cur-clue" id="curClue">
          <button class="nav-arrow" data-act="prev" aria-label="Previous clue">${ICONS.left}</button>
          <div class="cc-text"><span class="cc-num" id="ccNum">1A</span><span id="ccText">Select a clue</span></div>
          <button class="nav-arrow" data-act="next" aria-label="Next clue">${ICONS.right}</button>
        </div>
        <div class="grid-scroll">${gridHTML()}</div>
        <input id="hidden-input" class="hidden-input" inputmode="text" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false" aria-label="Type a letter">
        <p class="grid-hint">Tap a square and type. Tap it again to switch between across and down.</p>
      </div>
      <div class="clue-panel">
        ${clueList(across, "Across", "A")}
        ${clueList(down, "Down", "D")}
      </div>
    </div>

    <div class="win" id="win" hidden data-act="close-win">
      <div class="win-card" data-act="noop">
        <button class="win-close" data-act="close-win" aria-label="Close">&times;</button>
        <span class="win-ic">${ICONS.trophy}</span>
        <h2>You wrote out the Preamble’s promise</h2>
        <p id="winText">All 27 words in place.</p>
        <div class="win-actions">
          ${level !== "hard" ? `<a class="btn btn-primary" href="crossword.html?level=${ORDER[ORDER.indexOf(level) + 1]}">Try ${LEVELS[ORDER[ORDER.indexOf(level) + 1]].label.toLowerCase()}</a>` : `<a class="btn btn-primary" href="quiz.html?level=hard">Try the hard quiz</a>`}
          <a class="btn btn-outline" href="constitution.html">Explore our Constitution</a>
          <button class="btn btn-ghost" data-act="clear">Play again</button>
        </div>
      </div>
    </div>`;

  const gridEl = root.querySelector("#grid");
  const input = root.querySelector("#hidden-input");
  const cellEls = new Map();
  gridEl.querySelectorAll(".cell[data-r]").forEach(el => cellEls.set(ck(+el.dataset.r, +el.dataset.c), el));

  /* ---------- Paint ---------- */
  // Keep the selected square in view when the grid is wider than the screen.
  function ensureVisible() {
    const el = cellEls.get(ck(cur.r, cur.c));
    const box = root.querySelector(".grid-scroll");
    if (!el || !box || box.scrollWidth <= box.clientWidth + 1) return;
    const er = el.getBoundingClientRect(), br = box.getBoundingClientRect();
    if (er.left < br.left + 6) box.scrollLeft -= (br.left + 6 - er.left);
    else if (er.right > br.right - 6) box.scrollLeft += (er.right - (br.right - 6));
  }

  function paint() {
    const entry = curEntry();
    const inEntry = entry ? new Set(entryCells(entry)) : new Set();
    cells.forEach((cell, k) => {
      const el = cellEls.get(k);
      const v = values[k] || "";
      el.querySelector(".letter").textContent = v;
      el.classList.toggle("active", cur.r === cell.r && cur.c === cell.c);
      el.classList.toggle("in-entry", inEntry.has(k));
      el.classList.toggle("revealed", !!revealed[k]);
      el.setAttribute("aria-selected", String(cur.r === cell.r && cur.c === cell.c));
    });
    root.querySelectorAll(".clue").forEach(b => {
      const isCur = entry && +b.dataset.num === entry.num && b.dataset.dir === entry.dir;
      b.classList.toggle("active", !!isCur);
      const e = DATA.entries.find(x => x.num === +b.dataset.num && x.dir === b.dataset.dir);
      b.classList.toggle("solved", entryDone(e));
      if (isCur) b.scrollIntoView({ block: "nearest" });
    });
    if (entry) {
      root.querySelector("#ccNum").textContent = entry.num + entry.dir;
      root.querySelector("#ccText").textContent = entry.clue;
    }
    ensureVisible();
    const pct = Math.round((filledCount() / TOTAL_CELLS) * 100);
    root.querySelector("#pfill").style.width = pct + "%";
    root.querySelector("#pval").textContent = pct + "%";
    maybeWin();
  }

  function fmt(s) { return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
  function startTimer() {
    if (ticking || done) return;
    ticking = true;
    tickId = setInterval(() => { elapsed++; root.querySelector("#timer").textContent = fmt(elapsed); if (elapsed % 10 === 0) saveState(); }, 1000);
  }
  function stopTimer() { ticking = false; clearInterval(tickId); }

  function maybeWin() {
    if (done) return;
    if (correctCount() !== TOTAL_CELLS) return;
    done = true; stopTimer(); saveState();
    showWin();
  }
  function showWin() {
    const revealedCount = Object.keys(revealed).length;
    root.querySelector("#winText").textContent =
      `All ${DATA.entries.length} words in place in ${fmt(elapsed)}` + (revealedCount ? `, with ${revealedCount} letter${revealedCount > 1 ? "s" : ""} revealed.` : ", with no help at all.");
    const win = root.querySelector("#win");
    win.hidden = false;
    win.classList.add("show");
    win.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- Movement ---------- */
  function select(r, c, wantDir) {
    const cell = cells.get(ck(r, c));
    if (!cell) return;
    cur = { r, c };
    if (wantDir && cell[wantDir]) dir = wantDir;
    else if (!cell[dir]) dir = dir === "A" ? "D" : "A";
    paint();
    focusInput();
  }
  function focusInput() {
    input.value = "";
    input.focus({ preventScroll: true });
  }
  function step(delta) {
    const e = curEntry();
    if (!e) return;
    const keys = entryCells(e);
    const i = keys.indexOf(ck(cur.r, cur.c)) + delta;
    if (i < 0 || i >= keys.length) return;
    const [r, c] = keys[i].split(",").map(Number);
    cur = { r, c };
  }
  // Advance one square within the current word, overwriting as a crossword normally does.
  function advance() { step(1); }
  function move(dr, dc) {
    let r = cur.r + dr, c = cur.c + dc;
    while (r >= 0 && c >= 0 && r < ROWS && c < COLS) {
      if (cells.get(ck(r, c))) { const want = dr ? "D" : "A"; select(r, c, cells.get(ck(r, c))[want] ? want : null); return; }
      r += dr; c += dc;
    }
  }
  function cycleClue(delta) {
    const e = curEntry();
    if (!e) return;
    const list = DATA.entries.slice().sort((a, b) => a.num - b.num || (a.dir === "A" ? -1 : 1));
    let i = list.findIndex(x => x.num === e.num && x.dir === e.dir);
    i = (i + delta + list.length) % list.length;
    const t = list[i];
    dir = t.dir;
    select(t.row, t.col, t.dir);
  }
  function typeLetter(ch) {
    const k = ck(cur.r, cur.c);
    startTimer();
    values[k] = ch;
    delete revealed[k];
    cellEls.get(k).classList.remove("wrong");
    advance();
    paint();
    saveState();
  }
  function erase() {
    const k = ck(cur.r, cur.c);
    startTimer();
    if (values[k]) { delete values[k]; delete revealed[k]; }
    else { step(-1); const pk = ck(cur.r, cur.c); delete values[pk]; delete revealed[pk]; }
    paint();
    saveState();
  }

  /* ---------- Tools ---------- */
  function checkGrid() {
    let wrong = 0;
    cells.forEach((cell, k) => {
      const el = cellEls.get(k);
      el.classList.remove("wrong");
      if (values[k] && values[k] !== cell.letter) { el.classList.add("wrong"); wrong++; }
    });
    flash(wrong === 0
      ? (filledCount() === TOTAL_CELLS ? "Every letter is right." : "No mistakes so far — keep going.")
      : `${wrong} letter${wrong > 1 ? "s" : ""} to look at again.`);
    setTimeout(() => cellEls.forEach(el => el.classList.remove("wrong")), 3200);
  }
  function revealLetter() {
    const k = ck(cur.r, cur.c);
    values[k] = cells.get(k).letter;
    revealed[k] = true;
    advance(); paint(); saveState();
  }
  function revealWord() {
    const e = curEntry();
    if (!e) return;
    entryCells(e).forEach(k => { if (values[k] !== cells.get(k).letter) { values[k] = cells.get(k).letter; revealed[k] = true; } });
    paint(); saveState();
  }
  function clearAll() {
    values = {}; revealed = {}; elapsed = 0; done = false;
    stopTimer();
    root.querySelector("#timer").textContent = "00:00";
    const win = root.querySelector("#win");
    win.hidden = true; win.classList.remove("show");
    paint(); saveState();
  }
  let flashId = null;
  function flash(msg) {
    let el = root.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; root.appendChild(el); }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(flashId);
    flashId = setTimeout(() => el.classList.remove("show"), 3000);
  }

  /* ---------- Events ---------- */
  gridEl.addEventListener("pointerdown", e => {
    const el = e.target.closest(".cell[data-r]");
    if (!el) return;
    e.preventDefault();
    const r = +el.dataset.r, c = +el.dataset.c;
    const cell = cells.get(ck(r, c));
    if (cur.r === r && cur.c === c && cell.A && cell.D) dir = dir === "A" ? "D" : "A";
    select(r, c);
  });

  root.addEventListener("click", e => {
    const clue = e.target.closest(".clue");
    if (clue) {
      const entry = DATA.entries.find(x => x.num === +clue.dataset.num && x.dir === clue.dataset.dir);
      dir = entry.dir;
      select(entry.row, entry.col, entry.dir);
      return;
    }
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === "check") checkGrid();
    else if (act === "reveal-letter") revealLetter();
    else if (act === "reveal-word") revealWord();
    else if (act === "close-win") { const w = root.querySelector("#win"); w.hidden = true; w.classList.remove("show"); }
    else if (act === "prev") cycleClue(-1);
    else if (act === "next") cycleClue(1);
    else if (act === "preamble") {
      showPreamble = !showPreamble;
      root.querySelector("#preamble").hidden = !showPreamble;
      btn.classList.toggle("on", showPreamble);
    } else if (act === "clear") {
      if (btn.hasAttribute("data-confirm") && !btn.dataset.armed) {
        btn.dataset.armed = "1";
        const html = btn.innerHTML;
        btn.innerHTML = "Tap again to clear";
        setTimeout(() => { if (btn.isConnected) { delete btn.dataset.armed; btn.innerHTML = html; } }, 3000);
        return;
      }
      clearAll();
    }
  });

  // Typing: the hidden input keeps mobile keyboards available.
  input.addEventListener("input", () => {
    const ch = (input.value.slice(-1) || "").toUpperCase();
    input.value = "";
    if (/^[A-Z]$/.test(ch)) typeLetter(ch);
  });
  input.addEventListener("keydown", e => {
    if (e.key === "Backspace") { e.preventDefault(); erase(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(-1, 0); }
    else if (e.key === "ArrowDown") { e.preventDefault(); move(1, 0); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); move(0, -1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); move(0, 1); }
    else if (e.key === " ") { e.preventDefault(); const cell = curCell(); if (cell.A && cell.D) { dir = dir === "A" ? "D" : "A"; paint(); } }
    else if (e.key === "Tab") { e.preventDefault(); cycleClue(e.shiftKey ? -1 : 1); }
    else if (e.key === "Enter") { e.preventDefault(); cycleClue(1); }
  });

  window.addEventListener("beforeunload", saveState);

  loadState();
  root.querySelector("#timer").textContent = fmt(elapsed);
  select(cur.r, cur.c, "A");
  if (done) showWin();
})();
