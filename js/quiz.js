/* Constitution quiz — Dialogues on Democracy & Development */
(() => {
  "use strict";

  const QUIZ = window.DOD_QUIZ;
  const ORDER = ["easy", "medium", "hard"];
  const LETTERS = "ABCD";
  const root = document.getElementById("quiz");
  const params = new URLSearchParams(location.search);
  const level = params.get("level");

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const bestKey = k => "dod-quiz-best-" + k;
  const readBest = k => { try { return +localStorage.getItem(bestKey(k)) || 0; } catch (e) { return 0; } };
  const writeBest = (k, v) => { try { if (v > readBest(k)) localStorage.setItem(bestKey(k), String(v)); } catch (e) { /* ignore */ } };

  if (!QUIZ[level]) {
    root.innerHTML = `
      <section class="chooser">
        <h2>Choose your level</h2>
        <p class="chooser-sub">Ten questions each, with the reasoning after every answer.</p>
        <div class="levels wide">
          ${ORDER.map(k => {
            const best = readBest(k);
            return `<a class="level" href="quiz.html?level=${k}">
              <span class="lv">${QUIZ[k].label}</span>
              <span class="ln">${QUIZ[k].questions.length} questions${best ? ` · best ${best}/${QUIZ[k].questions.length}` : ""}</span>
              <span class="lb">${esc(QUIZ[k].blurb)}</span>
            </a>`;
          }).join("")}
        </div>
      </section>`;
    return;
  }

  const SET = QUIZ[level];
  const QS = SET.questions;
  let i = 0, picked = null, locked = false, score = 0;
  const answers = [];

  const ICONS = {
    tick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 10 17l9-10"/></svg>',
    cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M7 7l10 10M17 7 7 17"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>'
  };

  function levelStrip() {
    return `<div class="level-strip">
      <span class="level-now">${SET.label} · ${QS.length} questions</span>
      <span class="level-links">
        ${ORDER.filter(k => k !== level).map(k => `<a href="quiz.html?level=${k}">Switch to ${QUIZ[k].label.toLowerCase()}</a>`).join("")}
      </span>
    </div>`;
  }

  function renderQuestion() {
    const q = QS[i];
    root.innerHTML = `
      ${levelStrip()}
      <div class="q-progress">
        <div class="qp-bar"><i style="width:${(i / QS.length) * 100}%"></i></div>
        <span class="qp-text">Question ${i + 1} of ${QS.length}</span>
        <span class="qp-score">Score ${score}</span>
      </div>
      <article class="q-card anim-rise">
        <h2 class="q-text" tabindex="-1" data-focus>${esc(q.q)}</h2>
        <div class="q-options" role="radiogroup" aria-label="Answers">
          ${q.options.map((o, k) => `
            <button class="q-opt" role="radio" aria-checked="false" data-opt="${k}">
              <span class="key">${LETTERS[k]}</span>
              <span class="otext">${esc(o)}</span>
              <span class="mark" aria-hidden="true"></span>
            </button>`).join("")}
        </div>
        <div class="q-explain" hidden>
          <p class="q-verdict"></p>
          <p class="q-why">${ICONS.info}<span>${esc(q.explain)}</span></p>
        </div>
        <div class="q-actions">
          <span class="kbd-hint">Press <kbd>A</kbd>–<kbd>D</kbd> to answer, <kbd>Enter</kbd> to continue</span>
          <button class="btn btn-primary" data-act="next" disabled>${i === QS.length - 1 ? "See results" : "Next question"} ${ICONS.arrow}</button>
        </div>
      </article>`;
    const h = root.querySelector("[data-focus]");
    if (h) h.focus({ preventScroll: true });
  }

  function choose(k) {
    if (locked) return;
    const q = QS[i];
    picked = k;
    locked = true;
    const right = k === q.answer;
    if (right) score++;
    answers.push({ q: q.q, picked: k, right });

    root.querySelectorAll(".q-opt").forEach((el, n) => {
      el.setAttribute("aria-checked", String(n === k));
      el.disabled = true;
      if (n === q.answer) { el.classList.add("correct"); el.querySelector(".mark").innerHTML = ICONS.tick; }
      else if (n === k) { el.classList.add("wrong"); el.querySelector(".mark").innerHTML = ICONS.cross; }
    });
    const box = root.querySelector(".q-explain");
    box.hidden = false;
    box.classList.add("show");
    root.querySelector(".q-verdict").textContent = right ? "Correct." : "Not quite.";
    root.querySelector(".q-verdict").className = "q-verdict " + (right ? "ok" : "no");
    root.querySelector(".qp-score").textContent = "Score " + score;
    const next = root.querySelector("[data-act=next]");
    next.disabled = false;
    next.focus({ preventScroll: true });
  }

  function advance() {
    if (!locked) return;
    i++; picked = null; locked = false;
    if (i >= QS.length) return renderResult();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderResult() {
    writeBest(level, score);
    const pct = Math.round((score / QS.length) * 100);
    const verdict = pct >= 90 ? "Outstanding. You know this text well."
      : pct >= 70 ? "Strong. A few details to go back over."
      : pct >= 40 ? "A good start. The explanations above are worth a second read."
      : "Early days — and every citizen starts somewhere.";
    const nextLevel = ORDER[ORDER.indexOf(level) + 1];
    root.innerHTML = `
      ${levelStrip()}
      <section class="q-result anim-pop">
        <span class="qr-ic">${ICONS.trophy}</span>
        <p class="eyebrow">${SET.label} quiz</p>
        <h2>${score} out of ${QS.length}</h2>
        <p class="qr-verdict">${verdict}</p>
        <div class="qr-dots">${answers.map((a, n) => `<span class="dot ${a.right ? "ok" : "no"}" title="Question ${n + 1}">${n + 1}</span>`).join("")}</div>
        <div class="qr-actions">
          <button class="btn btn-primary" data-act="again">Play again</button>
          ${nextLevel ? `<a class="btn btn-outline" href="quiz.html?level=${nextLevel}">Try ${QUIZ[nextLevel].label.toLowerCase()}</a>`
                      : `<a class="btn btn-outline" href="crossword.html?level=hard">Try the hard crossword</a>`}
          <a class="btn btn-ghost" href="constitution.html">Read our Constitution</a>
        </div>
      </section>`;
  }

  root.addEventListener("click", e => {
    const opt = e.target.closest("[data-opt]");
    if (opt) return choose(+opt.dataset.opt);
    const act = e.target.closest("[data-act]");
    if (!act) return;
    if (act.dataset.act === "next") advance();
    else if (act.dataset.act === "again") { i = 0; score = 0; locked = false; answers.length = 0; renderQuestion(); }
  });

  document.addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.target.matches("input, textarea")) return;
    const k = LETTERS.indexOf(e.key.toUpperCase());
    if (k > -1 && !locked && root.querySelector(".q-opt")) { e.preventDefault(); return choose(k); }
    if (/^[1-4]$/.test(e.key) && !locked && root.querySelector(".q-opt")) { e.preventDefault(); return choose(+e.key - 1); }
    if (e.key === "Enter" && locked) { e.preventDefault(); advance(); }
  });

  renderQuestion();
})();
