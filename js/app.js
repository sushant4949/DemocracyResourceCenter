/* Constitutional Literacy Assessment — Dialogues on Democracy & Development */
(() => {
  "use strict";

  const SECTIONS = window.DOD_SECTIONS;
  const THEMES = window.DOD_THEMES;
  const MAX = 3;
  const STORE = "dod-cla-v1";
  const LETTERS = "ABCDE";
  const SITE = "https://www.dialoguesondemocracy.org/";

  const FLAT = [];
  SECTIONS.forEach((s, si) => s.questions.forEach((q, qi) => FLAT.push({ s, si, q, qi })));
  const TOTAL = FLAT.length;

  const POINT_LABEL = { 3: "Best response", 2: "Mostly aligned", 1: "Partly aligned", 0: "Not aligned" };
  const POINT_COLOR = { 3: "var(--s3)", 2: "var(--s2)", 1: "var(--s1)", 0: "var(--s0)" };

  const LEVELS = [
    { min: 85, name: "Constitutional Champion", desc: "Your responses consistently reflect justice, liberty, equality and fraternity. You are well placed to carry these values into conversations with others in your community." },
    { min: 70, name: "Informed Citizen", desc: "You have a strong grasp of constitutional values, with a few areas worth exploring further. The review below shows where the Constitution points in a different direction." },
    { min: 50, name: "Emerging Understanding", desc: "You are building a solid foundation. Several of your responses already reflect constitutional values, and the review below explains the reasoning behind each question." },
    { min: 0, name: "Beginning the Journey", desc: "Every citizen starts somewhere. The review below walks through what the Constitution says on each question, so this is a good place to begin the dialogue." }
  ];

  const ICONS = {
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 21h14"/><path d="M3 7h18"/><path d="m6 7-3 7a3.5 3.5 0 0 0 6 0z"/><path d="m18 7-3 7a3.5 3.5 0 0 0 6 0z"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74V16h8v-1.26A7 7 0 0 0 12 2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 10 17l9-10"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>',
    report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 17v-3M12 17v-6M16 17v-2"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
    seed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 4 3 4c0 5 4 8 9 8z"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>'
  };

  const AMBEDKAR = "We must not only be staunch in our faith in democracy, but we must resolve to see that whatever we do does not help the enemies of democracy to uproot the principles of liberty, equality and fraternity.";

  /* ---------- State ---------- */
  const fresh = () => ({ name: "", org: "", answers: {}, view: "welcome", pos: 0, finishedAt: null });
  const load = () => { try { const raw = localStorage.getItem(STORE); return raw ? JSON.parse(raw) : null; } catch (e) { return null; } };
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* storage unavailable */ } };

  let state = Object.assign(fresh(), load() || {});
  let dir = 1;
  let reviewTab = 0;
  let revisitOnly = false;

  const key = (si, qi) => si + "-" + qi;
  const answerAt = pos => state.answers[key(FLAT[pos].si, FLAT[pos].qi)];
  const answeredCount = () => Object.keys(state.answers).length;
  const hasProgress = () => answeredCount() > 0 || state.view !== "welcome";

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const app = document.getElementById("app");

  /* ---------- Scoring ---------- */
  function sectionResult(si) {
    const s = SECTIONS[si];
    let pts = 0;
    const dist = [0, 0, 0, 0];
    s.questions.forEach((q, qi) => {
      const a = state.answers[key(si, qi)];
      const p = a == null ? 0 : q.scores[a];
      pts += p;
      dist[p]++;
    });
    const max = s.questions.length * MAX;
    return { pts, max, pct: Math.round((pts / max) * 100), dist };
  }
  function aggregate(parts) {
    const pts = parts.reduce((a, r) => a + r.pts, 0);
    const max = parts.reduce((a, r) => a + r.max, 0);
    return { pts, max, pct: max ? Math.round((pts / max) * 100) : 0 };
  }
  function overallResult() {
    const secs = SECTIONS.map((_, si) => sectionResult(si));
    const byId = id => secs[SECTIONS.findIndex(s => s.id === id)];
    const total = aggregate(secs);
    const dist = [0, 1, 2, 3].map(p => secs.reduce((a, r) => a + r.dist[p], 0));
    const level = LEVELS.find(l => total.pct >= l.min);
    const lens = {
      know: aggregate([byId("knowledge")]),
      understand: aggregate([byId("understanding")]),
      apply: aggregate([byId("values"), byId("judgement")])
    };
    const tally = {};
    FLAT.forEach(({ q, si, qi }) => {
      const a = state.answers[key(si, qi)];
      const p = a == null ? 0 : q.scores[a];
      (q.themes || []).forEach(t => {
        const x = tally[t] || (tally[t] = { id: t, label: THEMES[t], pts: 0, max: 0, n: 0 });
        x.pts += p; x.max += MAX; x.n++;
      });
    });
    const themes = Object.values(tally)
      .filter(t => t.n >= 3)
      .map(t => Object.assign(t, { pct: Math.round((t.pts / t.max) * 100) }))
      .sort((a, b) => b.pct - a.pct || b.n - a.n);
    return Object.assign(total, { secs, dist, level, lens, themes });
  }

  /* Personalised narrative: compares knowing the Constitution with applying it. */
  function narrative(r) {
    const n = state.name.trim().split(/\s+/)[0] || "You";
    const K = r.lens.know.pct, U = r.lens.understand.pct, A = r.lens.apply.pct;
    const gap = K - A, avg = (K + A) / 2;
    let head, body;
    if (K >= 75 && A >= 75) {
      head = `${n}, you know the Constitution well, and you live by it.`;
      body = "You are clear on what the Preamble and the Fundamental Rights say. When real dilemmas involve caste, gender, faith or dissent, you consistently choose equality, liberty, justice and fraternity.";
    } else if (gap >= 15) {
      head = K >= 75
        ? `${n}, you know the Constitution well, but when it comes to applying it, your choices don’t always follow what you know.`
        : `${n}, you have a fair grasp of what the Constitution says, but applying it to real situations is where you find it harder.`;
      body = "In the everyday dilemmas in this assessment, some of your responses put tradition, majority opinion or keeping the peace ahead of the rights of the person affected. Knowing the Constitution is the first step. Living it means choosing equality and dignity even when that is uncomfortable.";
    } else if (gap <= -15) {
      head = A >= 75
        ? `${n}, your instincts are deeply constitutional, even where the facts are less familiar.`
        : `${n}, you apply constitutional values more confidently than you recall the facts behind them.`;
      body = "When faced with real dilemmas, you tend to choose dignity, equality and fairness. Learning more about the Preamble, the Fundamental Rights and key laws will give those instincts a firmer footing and help you explain and defend them to others.";
    } else if (avg >= 65) {
      head = `${n}, you understand the Constitution well and apply it in most situations.`;
      body = "What you know and what you choose are closely matched. A few responses, in both the facts and the real-life dilemmas, point to places where you can go deeper.";
    } else if (avg >= 45) {
      head = `${n}, you have a working understanding of the Constitution and often apply it, with room to grow in both.`;
      body = "You recognise many of its core ideas and chose the constitutional response in a good number of situations. The review below shows where your knowledge and your choices can both be strengthened.";
    } else {
      head = `${n}, this is the beginning of your constitutional journey.`;
      body = "Both what the Constitution says and how it applies to everyday life are still new ground for you, and that is where every citizen starts. The review below explains each question in plain language, so it is a good place to begin.";
    }

    const views = U >= 75
      ? "Your everyday views on democracy, equality and rights are well grounded in constitutional thinking."
      : U >= 50
        ? "Your everyday views on democracy, equality and rights are largely constitutional, though some common assumptions are worth revisiting."
        : "Some of your everyday views on democracy, equality and rights differ from what the Constitution says, and those are a good place to start the conversation.";

    let themeLine = "";
    const t = r.themes;
    if (t.length >= 2) {
      const best = t[0], worst = t[t.length - 1];
      const lc = s => s.charAt(0).toLowerCase() + s.slice(1);
      const label = x => x.id === "preamble" ? "the Preamble" : lc(x.label);
      if (worst.pct >= 90) themeLine = "Your responses were strong across every theme, from caste and gender to religion and free expression.";
      else if (best.pct - worst.pct >= 10) themeLine = `You are strongest on questions about ${label(best)}, while ${label(worst)} is where you have the most room to grow.`;
    }
    return { head, body: [body, views, themeLine].filter(Boolean).join(" ") };
  }

  /* ---------- Navigation ---------- */
  function go(view, pos, direction) {
    dir = direction || 1;
    state.view = view;
    if (pos != null) state.pos = pos;
    save();
    render();
    window.scrollTo(0, 0);
  }
  function next() {
    const p = state.pos;
    if (answerAt(p) == null) return;
    if (p + 1 >= TOTAL) { state.finishedAt = state.finishedAt || new Date().toISOString(); return go("results", p, 1); }
    if (FLAT[p + 1].si !== FLAT[p].si) return go("intro", p + 1, 1);
    go("question", p + 1, 1);
  }
  function back() {
    const p = state.pos;
    if (state.view === "intro") {
      if (p === 0) return go("welcome", 0, -1);
      return go("question", p - 1, -1);
    }
    if (FLAT[p].qi === 0) return go("intro", p, -1);
    go("question", p - 1, -1);
  }
  function choose(idx) {
    const f = FLAT[state.pos];
    if (idx < 0 || idx >= f.q.options.length) return;
    state.answers[key(f.si, f.qi)] = idx;
    save();
    app.querySelectorAll(".opt").forEach((el, i) => el.setAttribute("aria-checked", String(i === idx)));
    app.querySelectorAll(".step").forEach((el, si) => updateStep(el, si));
    const btn = app.querySelector("[data-action=next]");
    if (btn && btn.disabled) { btn.disabled = false; btn.classList.add("ready"); }
  }

  /* ---------- Shared pieces ---------- */
  function stepFill(si) {
    const n = SECTIONS[si].questions.length;
    let a = 0;
    for (let qi = 0; qi < n; qi++) if (state.answers[key(si, qi)] != null) a++;
    return a / n;
  }
  function updateStep(el, si) {
    const cur = FLAT[state.pos].si;
    const fill = stepFill(si);
    el.classList.toggle("active", si === cur);
    el.classList.toggle("done", fill === 1 && si !== cur);
    el.querySelector("i").style.width = (fill * 100) + "%";
  }
  function topbar() {
    const steps = SECTIONS.map((s, si) => `
      <div class="step" data-si="${si}">
        <span class="step-label">${esc(s.title)}</span>
        <div class="step-bar"><i></i></div>
      </div>`).join("");
    return `
      <header class="topbar">
        <button class="brand" data-action="home" aria-label="Back to start">
          <img src="assets/logo-mark.png" alt="">
          <span>Dialogues on Democracy<br>&amp; Development</span>
        </button>
        <div class="stepper" aria-label="Progress by section">${steps}</div>
        ${state.view === "intro"
          ? `<div class="counter" aria-label="Section ${FLAT[state.pos].si + 1} of ${SECTIONS.length}">${FLAT[state.pos].si + 1}<span>/${SECTIONS.length}</span></div>`
          : `<div class="counter" aria-label="Question ${state.pos + 1} of ${TOTAL}">${state.pos + 1}<span>/${TOTAL}</span></div>`}
      </header>`;
  }
  function hydrateSteps() {
    app.querySelectorAll(".step").forEach((el, si) => updateStep(el, si));
  }

  /* ---------- Views ---------- */
  function viewWelcome() {
    const resume = hasProgress() && state.view !== "results";
    const done = !!state.finishedAt;
    const list = SECTIONS.map(s => `
      <li>
        <span class="sec-icon">${ICONS[s.icon]}</span>
        <div><h3>${esc(s.title)}</h3><p>${esc(s.blurb)}</p></div>
        <span class="n">${s.questions.length} Qs</span>
      </li>`).join("");
    return `
      <div class="welcome">
        <section class="hero">
          <div class="hero-media" aria-hidden="true"><img src="assets/photos/hands-up.jpg" alt=""></div>
          <a class="hero-back" href="./">&larr; All resources</a>
          <div class="hero-words" aria-hidden="true"><span>Justice</span><span>Liberty</span><span>Equality</span><span>Fraternity</span></div>
          <img class="hero-logo anim-rise" src="assets/logo-wordmark-white.png" alt="Dialogues on Democracy &amp; Development">
          <div class="hero-copy anim-rise" style="animation-delay:.08s">
            <p class="eyebrow">Democracy &amp; Constitutional Literacy</p>
            <h1>How well do you know the <em>Constitution</em> you live by?</h1>
            <p class="lede">Explore rights, values and everyday choices through ${TOTAL} questions. At the end you get a personal report that explains the constitutional reasoning behind every question.</p>
            <ul class="hero-stats">
              <li>${ICONS.clock} About 20 minutes</li>
              <li>${ICONS.list} ${TOTAL} questions</li>
              <li>${ICONS.report} Instant report</li>
            </ul>
          </div>
          <blockquote class="hero-quote anim-rise" style="animation-delay:.16s">“${esc(AMBEDKAR)}”<cite>Dr. B.R. Ambedkar</cite></blockquote>
        </section>
        <section class="start">
          <div class="start-inner">
            <div class="anim-rise">
              <h2>Four sections, one conversation</h2>
              <p class="sub">There is no pass or fail. Some questions test facts, and others ask how you would act. Answer honestly; you know your context best.</p>
            </div>
            <ul class="section-list">${list}</ul>
            <form class="anim-rise" style="animation-delay:.3s;display:flex;flex-direction:column;gap:18px" data-form="start" novalidate>
              <div class="form-grid">
                <div class="field">
                  <label for="f-name">Your name</label>
                  <input id="f-name" name="name" autocomplete="name" maxlength="80" required aria-describedby="name-err" value="${esc(state.name)}" placeholder="e.g. Asha Kumari">
                  <p class="field-error" id="name-err" hidden>Please enter your name so we can personalise your report.</p>
                </div>
                <div class="field">
                  <label for="f-org">School, college or group <span>(optional)</span></label>
                  <input id="f-org" name="org" autocomplete="organization" maxlength="100" value="${esc(state.org)}" placeholder="e.g. Govt. Girls School, Patna">
                </div>
              </div>
              <div class="start-actions">
                ${done
                  ? `<button type="button" class="btn btn-primary btn-lg" data-action="view-report">View my report ${ICONS.arrowR}</button>
                     <button type="button" class="btn btn-ghost" data-action="restart">Start over</button>`
                  : resume
                    ? `<button type="submit" class="btn btn-primary btn-lg">Continue (${answeredCount()}/${TOTAL}) ${ICONS.arrowR}</button>
                       <button type="button" class="btn btn-ghost" data-action="restart">Start over</button>`
                    : `<button type="submit" class="btn btn-primary btn-lg">Begin assessment ${ICONS.arrowR}</button>`}
              </div>
              <p class="privacy">${ICONS.lock}<span>Your answers stay on this device. Nothing is sent or stored online.</span></p>
            </form>
          </div>
        </section>
      </div>`;
  }

  function viewIntro() {
    const f = FLAT[state.pos];
    const s = f.s;
    return `
      ${topbar()}
      <main class="intro">
        <div style="width:100%;max-width:760px">
          <article class="intro-card anim-pop">
            <span class="intro-num" aria-hidden="true">${f.si + 1}</span>
            <div class="intro-icon">${ICONS[s.icon]}</div>
            <p class="eyebrow">${esc(s.kicker)} of ${SECTIONS.length}</p>
            <h2 tabindex="-1" data-focus>${esc(s.title)}</h2>
            <p>${esc(s.blurb)}</p>
            <div class="intro-foot">
              <button class="btn btn-white btn-lg" data-action="begin">${f.si === 0 ? "Let’s begin" : "Start section"} ${ICONS.arrowR}</button>
              <span class="note">${s.questions.length} questions</span>
            </div>
          </article>
          <div class="intro-back"><button class="btn btn-ghost" data-action="back">${ICONS.arrowL} Back</button></div>
        </div>
      </main>`;
  }

  function viewQuestion() {
    const f = FLAT[state.pos];
    const { s, q, qi, si } = f;
    const chosen = state.answers[key(si, qi)];
    const opts = q.options.map((o, i) => `
      <button class="opt" role="radio" aria-checked="${chosen === i}" data-opt="${i}">
        <span class="key" aria-hidden="true">${LETTERS[i]}</span>
        <span class="otext">${esc(o)}</span>
        <span class="tick" aria-hidden="true">${ICONS.check}</span>
      </button>`).join("");
    const isLast = state.pos === TOTAL - 1;
    const lastOfSection = qi === s.questions.length - 1;
    const nextLabel = isLast ? "See my report" : lastOfSection ? "Next section" : "Next";
    return `
      ${topbar()}
      <main class="stage">
        <article class="qcard ${dir > 0 ? "anim-r" : "anim-l"}">
          <div class="qmeta">
            <span class="chip">${ICONS[s.icon]} ${esc(s.title)}</span>
            <span class="of">Question ${qi + 1} of ${s.questions.length}</span>
          </div>
          ${q.scenario ? `<div class="scenario"><span class="scenario-tag">Scenario</span>${esc(q.scenario)}</div>` : ""}
          <h2 class="qtext" id="qtext" tabindex="-1" data-focus>${esc(q.text)}</h2>
          <div class="options" role="radiogroup" aria-labelledby="qtext">${opts}</div>
        </article>
      </main>
      <nav class="qnav" aria-label="Question navigation">
        <div class="qnav-inner">
          <button class="btn btn-ghost" data-action="back">${ICONS.arrowL} Back</button>
          <span class="kbd-hint">Press <kbd>${LETTERS[0]}</kbd>–<kbd>${LETTERS[q.options.length - 1]}</kbd> to choose, then <kbd>Enter</kbd></span>
          <button class="btn btn-primary" data-action="next" ${chosen == null ? "disabled" : ""}>${nextLabel} ${ICONS.arrowR}</button>
        </div>
      </nav>`;
  }

  function viewResults() {
    const r = overallResult();
    const story = narrative(r);
    const date = new Date(state.finishedAt || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    const who = [state.name, state.org].filter(Boolean).map(esc).join(" · ");
    const tone = p => p >= 85 ? 3 : p >= 65 ? 2 : p >= 45 ? 1 : 0;

    const LENSES = [
      { k: "know", name: "Knowing", icon: "book", from: "Knowledge section", text: "What the Constitution says: the Preamble, Fundamental Rights and key laws." },
      { k: "understand", name: "Understanding", icon: "compass", from: "Understanding section", text: "How you see democracy, equality and rights in everyday life." },
      { k: "apply", name: "Applying", icon: "scale", from: "Values + Judgement sections", text: "What you choose when constitutional values are tested in real situations." }
    ];
    const lenses = LENSES.map(l => {
      const x = r.lens[l.k];
      return `
        <div class="lens">
          <div class="lens-top"><span class="sec-icon">${ICONS[l.icon]}</span><h3>${l.name}</h3><div class="pct" data-count="${x.pct}">0<small>%</small></div></div>
          <div class="bar"><i style="background:${POINT_COLOR[tone(x.pct)]}" data-w="${x.pct}"></i></div>
          <p>${l.text}</p>
          <span class="src">${x.pts} of ${x.max} points · ${l.from}</span>
        </div>`;
    }).join("");

    const themeRows = r.themes.map(t => `
      <div class="theme">
        <span class="tname">${esc(t.label)}<small>${t.n} questions</small></span>
        <div class="bar"><i style="background:${POINT_COLOR[tone(t.pct)]}" data-w="${t.pct}"></i></div>
        <span class="tpct">${t.pct}%</span>
      </div>`).join("");

    const distBar = [3, 2, 1, 0].map(p => `<i style="background:${POINT_COLOR[p]}" data-w="${(r.dist[p] / TOTAL) * 100}" title="${POINT_LABEL[p]}: ${r.dist[p]}"></i>`).join("");
    const distLegend = [3, 2, 1, 0].map(p => `<span><i style="background:${POINT_COLOR[p]}"></i>${POINT_LABEL[p]} <b>${r.dist[p]}</b></span>`).join("");

    const tabs = SECTIONS.map((s, si) => `<button class="tab" role="tab" aria-selected="${si === reviewTab}" data-tab="${si}">${esc(s.title)} <span class="tab-pct">${r.secs[si].pct}%</span></button>`).join("");
    const panels = SECTIONS.map((s, si) => {
      const items = s.questions.map((q, qi) => {
        const a = state.answers[key(si, qi)];
        const p = a == null ? 0 : q.scores[a];
        const bestIdx = q.scores.indexOf(MAX);
        const isBest = p === MAX;
        return `
          <div class="ritem" data-best="${isBest ? 1 : 0}" ${revisitOnly && isBest ? "hidden" : ""}>
            <div class="ritem-top">
              <div>
                <div class="qn">Q${qi + 1}</div>
                ${q.scenario ? `<p class="rscen">${esc(q.scenario)}</p>` : ""}
                <div class="rq">${esc(q.text)}</div>
              </div>
              <span class="badge s${p}">${POINT_LABEL[p]} · ${p}/${MAX}</span>
            </div>
            ${a != null ? `<div class="ans you s${p}"><span class="k">${LETTERS[a]}</span><div><small>Your response</small>${esc(q.options[a])}</div></div>` : ""}
            ${!isBest ? `<div class="ans best"><span class="k">${LETTERS[bestIdx]}</span><div><small>${esc(s.keyLabel)}</small>${esc(q.options[bestIdx])}</div></div>` : ""}
            <div class="why">${ICONS.info}<p>${esc(q.explain)}</p></div>
          </div>`;
      }).join("");
      const allBest = s.questions.every((q, qi) => q.scores[state.answers[key(si, qi)]] === MAX);
      return `
        <div class="panel" role="tabpanel" data-panel="${si}" ${si === reviewTab ? "" : "hidden"}>
          <h3 class="panel-title">${esc(s.kicker)} · ${esc(s.title)} · ${r.secs[si].pct}%</h3>
          <div class="ritems">${items}</div>
          ${revisitOnly && allBest ? `<p class="empty">Every response in this section was the best response.</p>` : ""}
        </div>`;
    }).join("");

    return `
      <header class="report-hero">
        <div class="hero-words" aria-hidden="true"><span>Justice</span><span>Liberty</span><span>Equality</span><span>Fraternity</span></div>
        <div class="report-head">
          <button class="brand" data-action="home" aria-label="Back to start">
            <img src="assets/logo-mark.png" alt="">
            <span>Dialogues on Democracy<br>&amp; Development</span>
          </button>
          <div class="report-actions no-print">
            <button class="btn btn-white" data-action="print">${ICONS.download} Save as PDF</button>
            <button class="btn btn-ghost" style="color:#fff" data-action="restart" data-confirm>${ICONS.redo} Retake</button>
          </div>
        </div>
        <div class="report-title">
          <p class="eyebrow">Constitutional Literacy Report</p>
          <h1 tabindex="-1" data-focus>${esc(state.name || "Your report")}</h1>
          <p class="who">${state.org ? esc(state.org) + " · " : ""}${date}</p>
        </div>
      </header>

      <main class="report-body">
        <section class="card">
          <div class="overview">
            <div class="ring">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7aa8ff"/><stop offset="1" stop-color="#3366cc"/></linearGradient></defs>
                <circle class="track" cx="60" cy="60" r="52" fill="none" stroke-width="12"/>
                <circle class="value" cx="60" cy="60" r="52" fill="none" stroke-width="12" stroke-dasharray="326.73" stroke-dashoffset="326.73" data-pct="${r.pct}"/>
              </svg>
              <div class="ring-label"><strong data-count="${r.pct}">0<small>%</small></strong><span>overall alignment</span></div>
            </div>
            <div>
              <span class="level-tag">${ICONS.trophy} ${esc(r.level.name)}</span>
              <h2 class="story-head">${esc(story.head)}</h2>
              <p class="desc">${esc(story.body)}</p>
            </div>
          </div>
          <div class="lenses">${lenses}</div>
          <div class="dist">
            <p class="points-line"><b>${r.pts}</b> of ${r.max} points across ${TOTAL} questions</p>
            <div class="dist-bar" role="img" aria-label="${[3, 2, 1, 0].map(p => POINT_LABEL[p] + " " + r.dist[p]).join(", ")}">${distBar}</div>
            <div class="dist-legend">${distLegend}</div>
          </div>
        </section>

        <section class="card">
          <h2>Where you stand on key themes</h2>
          <p class="sub">Each question touches one or more themes. This shows how closely your responses reflected constitutional values on each one.</p>
          <div class="themes">${themeRows}</div>
        </section>

        <section class="card review">
          <div class="review-head">
            <div>
              <h2>Question-by-question review</h2>
              <p class="sub">For each question: your response, the response that best reflects constitutional values, and why.</p>
            </div>
            <label class="toggle no-print"><input type="checkbox" data-action="revisit" ${revisitOnly ? "checked" : ""}> Show only responses to revisit</label>
          </div>
          <div class="tabs no-print" role="tablist">${tabs}</div>
          <div style="margin-top:18px">${panels}</div>
        </section>

        <section class="card">
          <h2>How this assessment is scored</h2>
          <p class="sub">Many of these questions have no single right or wrong answer. Each option is scored by how closely it reflects the values of the Indian Constitution: justice, liberty, equality, fraternity and dignity. Your overall alignment is your total points as a share of the maximum.</p>
          <div class="method">
            <div style="background:var(--s3-bg)"><b style="color:var(--s3)">3 points</b>Best response</div>
            <div style="background:var(--s2-bg)"><b style="color:var(--s2)">2 points</b>Mostly aligned</div>
            <div style="background:var(--s1-bg)"><b style="color:var(--s1)">1 point</b>Partly aligned</div>
            <div style="background:var(--s0-bg)"><b style="color:var(--s0)">0 points</b>Not aligned</div>
          </div>
        </section>

        <section class="card closing">
          <blockquote>“${esc(AMBEDKAR)}”<cite>Dr. B.R. Ambedkar</cite></blockquote>
          <div class="links no-print">
            <a class="btn btn-white" href="${SITE}" target="_blank" rel="noopener">${ICONS.globe} Visit DoD</a>
            <button class="btn btn-primary" data-action="print">${ICONS.download} Save as PDF</button>
          </div>
        </section>
      </main>
      <p class="foot">Dialogues on Democracy &amp; Development · <a href="${SITE}" target="_blank" rel="noopener">dialoguesondemocracy.org</a> · democracydialogues4all@gmail.com</p>`;
  }

  /* ---------- Render ---------- */
  function render() {
    const v = state.view;
    if (v === "results") app.innerHTML = viewResults();
    else if (v === "intro") app.innerHTML = viewIntro();
    else if (v === "question") app.innerHTML = viewQuestion();
    else app.innerHTML = viewWelcome();

    if (v === "intro" || v === "question") hydrateSteps();
    if (v === "results") animateResults();
    document.title = v === "results"
      ? "Constitutional Literacy Report" + (state.name ? " · " + state.name : "") + " · DoD"
      : "Constitutional Literacy Assessment · Dialogues on Democracy & Development";

    const f = app.querySelector("[data-focus]");
    if (f && v !== "welcome") f.focus({ preventScroll: true });
  }

  function animateResults() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const ring = app.querySelector(".ring .value");
      if (ring) ring.style.strokeDashoffset = String(326.73 * (1 - ring.dataset.pct / 100));
      app.querySelectorAll("[data-w]").forEach(el => { el.style.width = el.dataset.w + "%"; });
    }));
    app.querySelectorAll("[data-count]").forEach(el => {
      const target = +el.dataset.count;
      const small = "<small>%</small>";
      if (reduce) { el.innerHTML = target + small; return; }
      const t0 = performance.now(), dur = 1400;
      const tick = t => {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 3);
        el.innerHTML = Math.round(target * e) + small;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function setReviewTab(i) {
    reviewTab = i;
    app.querySelectorAll(".tab").forEach((t, k) => t.setAttribute("aria-selected", String(k === i)));
    app.querySelectorAll(".panel").forEach((p, k) => { p.hidden = k !== i; });
  }

  /* ---------- Events ---------- */
  app.addEventListener("submit", e => {
    const form = e.target.closest("[data-form=start]");
    if (!form) return;
    e.preventDefault();
    const name = form.name.value.trim();
    if (!name) {
      form.name.setAttribute("aria-invalid", "true");
      form.querySelector("#name-err").hidden = false;
      form.name.focus();
      return;
    }
    state.name = name;
    state.org = form.org.value.trim();
    if (state.view === "welcome" && answeredCount() === 0) return go("intro", 0, 1);
    const firstUnanswered = FLAT.findIndex((_, p) => answerAt(p) == null);
    const p = firstUnanswered === -1 ? TOTAL - 1 : firstUnanswered;
    go(FLAT[p].qi === 0 && answerAt(p) == null ? "intro" : "question", p, 1);
  });

  app.addEventListener("click", e => {
    const opt = e.target.closest("[data-opt]");
    if (opt) return choose(+opt.dataset.opt);
    const tab = e.target.closest("[data-tab]");
    if (tab) return setReviewTab(+tab.dataset.tab);
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const a = btn.dataset.action;
    if (a === "next") next();
    else if (a === "back") back();
    else if (a === "begin") go("question", state.pos, 1);
    else if (a === "home") go("welcome", state.pos, -1);
    else if (a === "view-report") go("results", state.pos, 1);
    else if (a === "print") window.print();
    else if (a === "restart") {
      if (btn.hasAttribute("data-confirm") && !btn.dataset.armed) {
        btn.dataset.armed = "1";
        const html = btn.innerHTML;
        btn.innerHTML = "Tap again to retake";
        setTimeout(() => { if (btn.isConnected) { delete btn.dataset.armed; btn.innerHTML = html; } }, 3000);
        return;
      }
      const { name, org } = state;
      state = Object.assign(fresh(), { name, org });
      reviewTab = 0; revisitOnly = false;
      go("welcome", 0, -1);
    }
  });

  app.addEventListener("input", e => {
    if (e.target.id === "f-name" && e.target.value.trim()) {
      e.target.removeAttribute("aria-invalid");
      const err = app.querySelector("#name-err");
      if (err) err.hidden = true;
    }
  });

  app.addEventListener("change", e => {
    if (e.target.matches("[data-action=revisit]")) {
      revisitOnly = e.target.checked;
      app.querySelectorAll(".ritem").forEach(el => { el.hidden = revisitOnly && el.dataset.best === "1"; });
      app.querySelectorAll(".panel").forEach(panel => {
        const empty = panel.querySelector(".empty");
        const allBest = [...panel.querySelectorAll(".ritem")].every(el => el.dataset.best === "1");
        if (revisitOnly && allBest && !empty) panel.insertAdjacentHTML("beforeend", '<p class="empty">Every response in this section was the best response.</p>');
        if (!revisitOnly && empty) empty.remove();
      });
    }
  });

  document.addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.matches("input, textarea")) return;
    const v = state.view;
    if (v === "question") {
      const k = e.key.toUpperCase();
      const n = FLAT[state.pos].q.options.length;
      let idx = LETTERS.indexOf(k);
      if (idx === -1 && /^[1-5]$/.test(e.key)) idx = +e.key - 1;
      if (idx > -1 && idx < n && k.length === 1) { e.preventDefault(); choose(idx); return; }
      const optEl = e.target.closest(".opt");
      if (e.key === "Enter" && optEl) { e.preventDefault(); choose(+optEl.dataset.opt); next(); return; }
      if (e.key === "ArrowRight" || (e.key === "Enter" && !e.target.closest("button"))) { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); back(); }
    } else if (v === "intro") {
      if (e.key === "Enter" && !e.target.closest("button")) { e.preventDefault(); go("question", state.pos, 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); back(); }
    }
  });

  window.addEventListener("beforeprint", () => {
    app.querySelectorAll(".ritem").forEach(el => { el.dataset.wasHidden = el.hidden ? "1" : ""; el.hidden = false; });
  });
  window.addEventListener("afterprint", () => {
    app.querySelectorAll(".ritem").forEach(el => { el.hidden = el.dataset.wasHidden === "1"; });
  });

  // Resume where the participant left off, except mid-question views reopen on the welcome screen.
  if (state.view !== "results") state.view = "welcome";
  render();
})();
