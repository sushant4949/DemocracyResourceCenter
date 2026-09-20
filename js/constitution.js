/* Our Constitution — Dialogues on Democracy & Development
   Journey map, Constituent Assembly members, and the amendments timeline. */
(() => {
  "use strict";

  /* ---------- Data ---------- */
  const FACTS = [
    { n: 299, suffix: "", label: "members signed it", note: "The Assembly began with 389 members. After Partition, 299 remained — among them 15 women." },
    { n: 165, suffix: "", label: "days of debate", note: "Across 11 sessions between December 1946 and November 1949." },
    { n: 448, suffix: "", label: "articles today", note: "It began with 395 articles in 22 parts and 8 schedules. Today: about 448 articles, 25 parts and 12 schedules." },
    { n: 106, suffix: "", label: "amendments so far", note: "From the First Amendment in 1951 to the 106th in 2023." }
  ];

  const JOURNEY = [
    {
      date: "9 December 1946", title: "The Assembly meets for the first time",
      short: "207 members gather in the Constitution Hall in New Delhi. Sachchidananda Sinha, the oldest member, takes the chair.",
      detail: "The Constituent Assembly had been elected indirectly by the provincial assemblies under the Cabinet Mission Plan. The Muslim League stayed away from this first sitting. Two days later, on 11 December 1946, Dr. Rajendra Prasad was elected its permanent President, a role he held through every session."
    },
    {
      date: "13 December 1946", title: "The Objectives Resolution",
      short: "Jawaharlal Nehru moves the resolution that sets out what the new republic will stand for.",
      detail: "The resolution promised an independent sovereign republic that would secure justice, equality of status and opportunity, and freedom of thought, expression, belief, faith and worship, with safeguards for minorities, backward classes and tribal areas. Adopted on 22 January 1947, it became the seed of the Preamble."
    },
    {
      date: "15 August 1947", title: "Independence changes the task",
      short: "The Assembly becomes a sovereign body, and also the country's first Parliament.",
      detail: "With Partition, the Assembly lost the members from areas that became Pakistan and its strength settled at 299. It now wrote the Constitution and ran the country at the same time, sitting as a legislature on some days and as a constitution-making body on others."
    },
    {
      date: "29 August 1947", title: "The Drafting Committee is formed",
      short: "Seven members are appointed, with Dr. B.R. Ambedkar as Chairman.",
      detail: "The committee was Ambedkar, Alladi Krishnaswami Ayyar, N. Gopalaswami Ayyangar, K.M. Munshi, Syed Mohammad Saadulla, B.L. Mitter (later replaced by N. Madhava Rau) and D.P. Khaitan (later replaced by T.T. Krishnamachari). They worked from a draft prepared by the Constitutional Adviser, B.N. Rau."
    },
    {
      date: "February 1948", title: "The draft goes public",
      short: "The Draft Constitution is published so that citizens can send in their comments.",
      detail: "Copies went to the public, the press, provincial governments and lawyers' associations. Thousands of suggestions came back, and the Drafting Committee reworked the text in light of them — an early act of public consultation in a country that had never voted on universal franchise."
    },
    {
      date: "4 November 1948", title: "Clause by clause, line by line",
      short: "Ambedkar introduces the Draft. The Assembly debates it for over a year.",
      detail: "Members argued over the strength of the centre, the place of Hindi and other languages, reservations, the right to property, and whether Directive Principles should be enforceable. Thousands of amendments were moved, and many were accepted. The debates, published in full, remain one of the richest records of Indian public reasoning."
    },
    {
      date: "26 November 1949", title: "Adopted",
      short: "The Assembly adopts the Constitution. India observes the day as Constitution Day.",
      detail: "Some articles came into force at once — those on citizenship, elections and the provisional Parliament — so that the machinery for the first general election could be set up. Ambedkar warned that the Constitution would work only as well as those who worked it: however good a constitution may be, he said, it will prove bad if those called to work it are a bad lot."
    },
    {
      date: "24 January 1950", title: "The signing",
      short: "Members sign three copies: one in English, one in Hindi, one handwritten. The anthem is adopted the same day.",
      detail: "The handwritten English copy was calligraphed by Prem Behari Narain Raizada in flowing italic, and decorated by Nandalal Bose and artists from Santiniketan; Beohar Rammanohar Sinha illuminated the Preamble page. Jana Gana Mana was adopted as the national anthem and Vande Mataram given equal honour as the national song."
    },
    {
      date: "26 January 1950", title: "It becomes ours",
      short: "The Constitution comes into force. India becomes a republic.",
      detail: "The date was chosen deliberately: on 26 January 1930, the Congress had declared Purna Swaraj, complete independence. Dr. Rajendra Prasad was sworn in as the first President. The Constituent Assembly became the provisional Parliament until the first general election of 1951–52, in which every adult could vote."
    }
  ];

  const MEMBER_GROUPS = [
    { id: "all", label: "Everyone" },
    { id: "drafting", label: "Drafting Committee" },
    { id: "women", label: "Women members" },
    { id: "margins", label: "Voices from the margins" },
    { id: "guiding", label: "Guiding hands" }
  ];

  const MEMBERS = [
    {
      name: "Dr. B.R. Ambedkar", role: "Chairman, Drafting Committee", groups: ["drafting", "margins"],
      short: "Born into a Mahar family and made to sit apart in school, he became the principal architect of the text that outlawed untouchability.",
      detail: "Ambedkar studied at Columbia University and the London School of Economics, led the movement for Dalit rights, and served as independent India's first Law Minister. He called Article 32, the right to move the Supreme Court when rights are violated, the heart and soul of the Constitution. He also pressed for a strong centre, constitutional morality, and for social democracy — one person, one vote, one value — warning that political equality without social and economic equality would not last."
    },
    {
      name: "Dr. Rajendra Prasad", role: "President of the Constituent Assembly", groups: ["guiding"],
      short: "Presided over every session, holding together an Assembly that argued fiercely and rarely voted along party lines.",
      detail: "A lawyer from Bihar and a leader of the Champaran movement, Prasad was elected President of the Assembly on 11 December 1946. He steered three years of debate and signed the Constitution into being. In 1950 he became the first President of India, serving two full terms."
    },
    {
      name: "Jawaharlal Nehru", role: "Moved the Objectives Resolution", groups: ["guiding"],
      short: "His Objectives Resolution of December 1946 became the promise the Preamble now carries.",
      detail: "Nehru framed the new republic's purpose in terms of justice, equality of status and opportunity, and freedom of thought and belief, with safeguards for minorities and tribal people. As Prime Minister he defended the Assembly's work in public, while inside it he was often challenged and outvoted on detail."
    },
    {
      name: "Sardar Vallabhbhai Patel", role: "Chair, Advisory Committee on Fundamental Rights and Minorities", groups: ["guiding"],
      short: "Handled the Assembly's hardest political questions, including the end of separate electorates.",
      detail: "Patel chaired the committees on fundamental rights, minorities, and tribal and excluded areas. Under his chairmanship the Assembly dropped separate electorates and reserved seats for religious minorities, while retaining reservation for Scheduled Castes and Scheduled Tribes. Outside the Assembly he led the integration of the princely states."
    },
    {
      name: "B.N. Rau", role: "Constitutional Adviser", groups: ["guiding"],
      short: "The civil servant who wrote the first draft, after studying constitutions across the world.",
      detail: "Rau prepared the initial draft of 243 articles and 13 schedules that the Drafting Committee worked from. He travelled to the United States, Canada, Ireland and England to study how their constitutions worked, and later became a judge of the International Court of Justice."
    },
    {
      name: "Alladi Krishnaswami Ayyar", role: "Drafting Committee", groups: ["drafting"],
      short: "One of the finest lawyers of his generation, and a steady voice for a strong, enforceable set of rights.",
      detail: "Advocate-General of Madras for many years, Ayyar served on the Drafting Committee and several key sub-committees. He argued for due process safeguards balanced with the State's ability to govern, and helped shape the articles on citizenship and the judiciary."
    },
    {
      name: "K.M. Munshi", role: "Drafting Committee", groups: ["drafting"],
      short: "Lawyer, novelist and one of the keenest defenders of fundamental rights in the Assembly.",
      detail: "Munshi drafted early proposals on rights and pressed for freedom of expression and for a uniform civil code. He founded the Bharatiya Vidya Bhavan and later served as Governor of Uttar Pradesh."
    },
    {
      name: "Syed Mohammad Saadulla", role: "Drafting Committee", groups: ["drafting"],
      short: "Former Premier of Assam, and one of the Muslim members who chose to build the new republic from within.",
      detail: "Saadulla brought the concerns of Assam and of the north-east into the drafting room, and worked on the provisions dealing with tribal areas that became the Sixth Schedule."
    },
    {
      name: "N. Gopalaswami Ayyangar", role: "Drafting Committee", groups: ["drafting"],
      short: "Former Prime Minister of Jammu and Kashmir state, who drafted the article on its special status.",
      detail: "Ayyangar piloted what became Article 370 through the Assembly, and worked on the provisions dealing with the Union executive, Parliament and the services."
    },
    {
      name: "T.T. Krishnamachari", role: "Drafting Committee", groups: ["drafting"],
      short: "Told the Assembly plainly how much of the work had fallen on Ambedkar's shoulders alone.",
      detail: "Krishnamachari joined the Drafting Committee in 1948 after D.P. Khaitan's death. In a well-known intervention he noted that with members resigning, ill or away, the burden of drafting had come to rest on Ambedkar, and that the House owed him a debt of gratitude. He later served as Finance Minister."
    },
    {
      name: "Hansa Mehta", role: "Member, Fundamental Rights sub-committee", groups: ["women"],
      short: "Asked not for favours for women but for equality, dignity and social justice as a matter of right.",
      detail: "An educationist and reformer from Bombay, Mehta presented a charter of women's rights and opposed reserved seats for women, arguing that equality before the law and a uniform civil code mattered more. At the United Nations she is credited with changing the line in the Universal Declaration of Human Rights from 'all men are born free and equal' to 'all human beings'."
    },
    {
      name: "Dakshayani Velayudhan", role: "The only Dalit woman in the Assembly", groups: ["women", "margins"],
      short: "At 34, the only Dalit woman in the room, speaking for dignity rather than protection.",
      detail: "From Cochin, and among the first women of her community to earn a science degree, Velayudhan argued that what Dalits needed was not safeguards alone but the end of a social order that treated them as lesser. She supported the abolition of untouchability under Article 17 and spoke for the rights of labour."
    },
    {
      name: "Rajkumari Amrit Kaur", role: "Member, Fundamental Rights sub-committee", groups: ["women"],
      short: "Campaigned against child marriage and purdah, and for women's right to health and education.",
      detail: "Born into the royal family of Kapurthala, Amrit Kaur joined Gandhi's movement and served sixteen years as his secretary. In the Assembly she worked on fundamental rights and minority questions. As independent India's first Health Minister she founded the All India Institute of Medical Sciences."
    },
    {
      name: "Begum Aizaz Rasul", role: "The only Muslim woman member", groups: ["women", "margins"],
      short: "Argued that separate electorates were a self-defeating weapon for minorities.",
      detail: "From an aristocratic family in Uttar Pradesh, Rasul was among the members of the Muslim League who stayed and worked within the Assembly. She supported ending separate electorates and reserved seats for religious minorities, holding that minorities would be safer as citizens with equal rights than as groups set apart."
    },
    {
      name: "Durgabai Deshmukh", role: "Member, Steering Committee", groups: ["women"],
      short: "Went to prison at twelve for the salt satyagraha, and later shaped the Assembly's rules of business.",
      detail: "A lawyer and social worker from Andhra, Deshmukh founded the Andhra Mahila Sabha, spoke for women's education and for legal aid, and sat on several of the Assembly's committees. She later chaired the National Council for Women's Education."
    },
    {
      name: "Jaipal Singh Munda", role: "Adivasi leader from Chhotanagpur", groups: ["margins"],
      short: "Captained India's gold-medal hockey team in 1928, then captained the case for Adivasi rights.",
      detail: "Munda told the Assembly that Adivasis had been in India longest and been given least, and that what they asked for was not charity but the restoration of what had been taken. He pressed for the protections that became the Fifth and Sixth Schedules and for reservation for Scheduled Tribes."
    },
    {
      name: "Sucheta Kripalani", role: "Freedom fighter and member", groups: ["women"],
      short: "Sang Vande Mataram in the Assembly at the midnight hour when India became independent.",
      detail: "Kripalani worked in the relief camps during the violence of Partition and served on the sub-committee on fundamental rights. In 1963 she became India's first woman Chief Minister, in Uttar Pradesh."
    },
    {
      name: "Frank Anthony", role: "Representative of the Anglo-Indian community", groups: ["margins"],
      short: "Won constitutional recognition and safeguards for one of India's smallest minorities.",
      detail: "Anthony argued the case for the Anglo-Indian community's language, schools and representation, which became Articles 331, 333 and 336 to 337. He led the community's association for decades after independence."
    }
  ];

  const AMENDMENT_TAGS = {
    rights: "Rights", equality: "Equality", federal: "Federalism", representation: "Representation", power: "Power and its limits"
  };

  const AMENDMENTS = [
    { n: 1, year: 1951, tag: "rights", title: "The first correction", text: "Added reasonable restrictions to free speech, allowed special provisions for socially and educationally backward classes under Article 15(4), and created the Ninth Schedule to protect land reform laws from court challenge." },
    { n: 7, year: 1956, tag: "federal", title: "States redrawn on language", text: "Reorganised the states and territories after the States Reorganisation Commission, replacing the old Part A, B, C classification with a single list of states and union territories." },
    { n: 24, year: 1971, tag: "power", title: "Parliament asserts itself", text: "Declared that Parliament could amend any part of the Constitution, including the Fundamental Rights. Two years later, in Kesavananda Bharati, the Supreme Court accepted the power but held that it could not be used to destroy the Constitution's basic structure." },
    { n: 26, year: 1971, tag: "equality", title: "The end of privy purses", text: "Abolished the privy purses and the special privileges of the former rulers of the princely states, on the reasoning that a republic cannot pay hereditary allowances." },
    { n: 42, year: 1976, tag: "power", title: "The mini-Constitution", text: "Passed during the Emergency, it added the words Socialist, Secular and Integrity to the Preamble and Fundamental Duties to Part IVA, but also curtailed judicial review, extended the life of legislatures to six years and weakened checks on the executive." },
    { n: 44, year: 1978, tag: "rights", title: "Putting the brakes back", text: "Undid much of the 42nd: restored the five-year term, required 'armed rebellion' rather than 'internal disturbance' for a national Emergency, and moved the right to property out of the Fundamental Rights into Article 300A as a constitutional right." },
    { n: 52, year: 1985, tag: "representation", title: "Anti-defection", text: "Added the Tenth Schedule, disqualifying legislators who defect from the party on whose ticket they were elected." },
    { n: 61, year: 1988, tag: "representation", title: "The vote at eighteen", text: "Lowered the voting age from 21 to 18, bringing millions of young citizens into the electorate in a single stroke." },
    { n: 65, year: 1990, tag: "equality", title: "A commission with teeth", text: "Turned the office of the Commissioner for Scheduled Castes and Scheduled Tribes into a multi-member National Commission with constitutional status." },
    { n: 73, year: 1992, tag: "representation", title: "Power to the panchayats", text: "Gave village panchayats constitutional status, with elections every five years and one-third of seats and chairperson posts reserved for women, along with reservation for Scheduled Castes and Scheduled Tribes." },
    { n: 74, year: 1992, tag: "representation", title: "Power to the cities", text: "Did the same for municipalities in urban India, creating ward committees and a constitutional basis for city government." },
    { n: 86, year: 2002, tag: "rights", title: "Education as a right", text: "Inserted Article 21A, making free and compulsory education a fundamental right for every child between six and fourteen, with a matching duty on parents in Article 51A(k)." },
    { n: 93, year: 2005, tag: "equality", title: "Reservation in private colleges", text: "Added Article 15(5), allowing reservation for backward classes and Scheduled Castes and Tribes in private unaided educational institutions, other than minority institutions." },
    { n: 97, year: 2011, tag: "rights", title: "The right to co-operate", text: "Made forming co-operative societies a fundamental right under Article 19(1)(c) and added a part on their working." },
    { n: 101, year: 2016, tag: "federal", title: "One tax, shared power", text: "Created the Goods and Services Tax and the GST Council, in which the Union and the states decide indirect tax rates together." },
    { n: 102, year: 2018, tag: "equality", title: "Backward classes commission", text: "Gave constitutional status to the National Commission for Backward Classes under Article 338B." },
    { n: 103, year: 2019, tag: "equality", title: "Reservation on economic grounds", text: "Allowed up to ten per cent reservation in education and public employment for economically weaker sections among those not already covered by existing reservations." },
    { n: 104, year: 2020, tag: "representation", title: "Two clocks reset", text: "Extended reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha and state assemblies to 2030, and ended the nomination of Anglo-Indian members." },
    { n: 106, year: 2023, tag: "representation", title: "One-third for women", text: "Reserved one-third of the seats in the Lok Sabha and the state legislative assemblies for women. It takes effect after the next census and delimitation exercise." }
  ];

  const ARCHITECTURE = [
    {
      title: "Fundamental Rights", range: "Articles 12–35",
      text: "Rights every person can enforce in court, and the reason Article 32 exists.",
      items: [
        "Equality before the law and equal protection (14), no discrimination on grounds of religion, race, caste, sex or place of birth (15), equal opportunity in public employment (16)",
        "Untouchability abolished (17); titles abolished (18)",
        "Freedom of speech, assembly, association, movement, residence and occupation (19), subject to reasonable restrictions",
        "Protection in conviction (20), life and personal liberty (21), education for 6–14 year olds (21A), safeguards on arrest and detention (22)",
        "No trafficking or forced labour (23); no child labour in hazardous work (24)",
        "Freedom of conscience and religion (25–28); minorities' culture and schools (29–30)",
        "The right to move the Supreme Court when a right is violated (32)"
      ]
    },
    {
      title: "Directive Principles", range: "Articles 36–51",
      text: "Instructions to the State. Courts cannot enforce them, but they are meant to guide every law and policy.",
      items: [
        "Secure a social order in which justice — social, economic and political — informs all institutions (38)",
        "Adequate means of livelihood, no concentration of wealth, equal pay for equal work (39)",
        "Free legal aid so poverty does not deny anyone justice (39A)",
        "Village panchayats as units of self-government (40)",
        "Right to work, education and public assistance in old age, sickness and disability (41)",
        "Just and humane conditions of work and maternity relief (42); living wage (43)",
        "Early childhood care and education for children under six (45); promotion of the interests of Scheduled Castes, Scheduled Tribes and other weaker sections (46)"
      ]
    },
    {
      title: "Fundamental Duties", range: "Article 51A",
      text: "Added in 1976, with one more added in 2002. They bind citizens rather than the State.",
      items: [
        "Abide by the Constitution and respect the flag and the anthem",
        "Cherish the ideals of the freedom struggle",
        "Uphold the sovereignty, unity and integrity of India, and defend the country when called upon",
        "Promote harmony and the spirit of common brotherhood, and renounce practices derogatory to the dignity of women",
        "Value and preserve the composite culture of the country",
        "Protect the environment and have compassion for living creatures",
        "Develop a scientific temper, humanism, and the spirit of inquiry and reform",
        "Safeguard public property and abjure violence; strive towards excellence",
        "Provide opportunities for education to one's child between six and fourteen"
      ]
    },
    {
      title: "How power is divided", range: "Parts V, VI, XI and the Seventh Schedule",
      text: "A union of states: strong at the centre, but with real authority held by the states.",
      items: [
        "Union list: defence, foreign affairs, currency, railways, citizenship",
        "State list: police, public health, agriculture, land, local government",
        "Concurrent list: education, criminal law, marriage, forests — both may legislate, and Union law usually prevails",
        "Elections run by an independent Election Commission (324); accounts audited by the Comptroller and Auditor General (148)",
        "A judiciary that can strike down any law, including a constitutional amendment that damages the basic structure"
      ]
    }
  ];

  const ord = n => { const r = n % 100; if (r >= 11 && r <= 13) return "th"; return ["th", "st", "nd", "rd"][n % 10] || "th"; };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Render ---------- */
  function renderFacts() {
    document.getElementById("facts").innerHTML = FACTS.map(f => `
      <div class="fact">
        <strong data-count="${f.n}">0</strong>
        <span class="fl">${esc(f.label)}</span>
        <span class="fn">${esc(f.note)}</span>
      </div>`).join("");
  }

  function renderJourney() {
    document.getElementById("journey").innerHTML = JOURNEY.map((s, i) => `
      <article class="stop" data-i="${i}">
        <div class="stop-dot" aria-hidden="true"><span>${i + 1}</span></div>
        <button class="stop-card" aria-expanded="false">
          <span class="stop-date">${esc(s.date)}</span>
          <h3>${esc(s.title)}</h3>
          <p class="stop-short">${esc(s.short)}</p>
          <p class="stop-detail"><span>${esc(s.detail)}</span></p>
          <span class="more">Read more <span aria-hidden="true">↓</span></span>
        </button>
      </article>`).join("");
  }

  function renderMembers(group = "all") {
    const list = MEMBERS.filter(m => group === "all" || m.groups.includes(group));
    document.getElementById("members").innerHTML = list.map((m, i) => `
      <article class="member" style="animation-delay:${Math.min(i * 40, 400)}ms">
        <button class="member-btn" aria-expanded="false">
          <span class="m-top">
            <span class="m-initials" aria-hidden="true">${esc(m.name.replace(/^(Dr\.|Sardar|Begum|Rajkumari|Sucheta|Frank)\s+/, "").split(/\s+/).map(w => w[0]).join("").slice(0, 2))}</span>
            <span class="m-id"><h3>${esc(m.name)}</h3><span class="m-role">${esc(m.role)}</span></span>
            <span class="m-chev" aria-hidden="true">+</span>
          </span>
          <span class="m-short">${esc(m.short)}</span>
          <span class="m-detail"><span>${esc(m.detail)}</span></span>
        </button>
      </article>`).join("");
    document.getElementById("member-count").textContent = list.length + (list.length === 1 ? " member" : " members");
  }

  function renderAmendments() {
    document.getElementById("rail").innerHTML = AMENDMENTS.map((a, i) => `
      <button class="amend" data-i="${i}" data-tag="${a.tag}" aria-pressed="false">
        <span class="a-year">${a.year}</span>
        <span class="a-dot" aria-hidden="true"></span>
        <span class="a-num">${a.n}<sup>${ord(a.n)}</sup></span>
        <span class="a-title">${esc(a.title)}</span>
      </button>`).join("");
    showAmendment(0);
  }

  function showAmendment(i) {
    const a = AMENDMENTS[i];
    document.querySelectorAll(".amend").forEach((el, k) => {
      el.classList.toggle("on", k === i);
      el.setAttribute("aria-pressed", String(k === i));
    });
    const box = document.getElementById("amend-detail");
    box.innerHTML = `
      <span class="chip">${esc(AMENDMENT_TAGS[a.tag])}</span>
      <h3>${a.n}<sup>${ord(a.n)}</sup> Amendment, ${a.year} — ${esc(a.title)}</h3>
      <p>${esc(a.text)}</p>`;
    box.classList.remove("flash");
    void box.offsetWidth;
    box.classList.add("flash");
  }

  function renderArchitecture() {
    document.getElementById("architecture").innerHTML = ARCHITECTURE.map(a => `
      <article class="arch">
        <button class="arch-btn" aria-expanded="false">
          <span class="arch-head">
            <h3>${esc(a.title)}</h3>
            <span class="arch-range">${esc(a.range)}</span>
            <span class="m-chev" aria-hidden="true">+</span>
          </span>
          <span class="arch-text">${esc(a.text)}</span>
        </button>
        <div class="arch-body"><ul class="arch-list">${a.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      </article>`).join("");
  }

  /* ---------- Behaviour ---------- */
  function expandToggle(btn, wrapper) {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    (wrapper || btn.parentElement).classList.toggle("open", !open);
  }

  function countUp(el) {
    const target = +el.dataset.count;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = target; return; }
    const t0 = performance.now(), dur = 1200;
    const tick = t => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function observe() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: .15 });
    document.querySelectorAll(".stop, .fact strong[data-count], .reveal").forEach(el => io.observe(el));
  }

  /* ---------- Wire up ---------- */
  renderFacts();
  renderJourney();
  renderMembers();
  renderAmendments();
  renderArchitecture();

  document.getElementById("filters").innerHTML = MEMBER_GROUPS.map((g, i) =>
    `<button class="filter${i === 0 ? " on" : ""}" data-group="${g.id}">${esc(g.label)}</button>`).join("");

  document.addEventListener("click", e => {
    const stop = e.target.closest(".stop-card");
    if (stop) return expandToggle(stop, stop.closest(".stop"));

    const member = e.target.closest(".member-btn");
    if (member) return expandToggle(member, member.closest(".member"));

    const arch = e.target.closest(".arch-btn");
    if (arch) return expandToggle(arch, arch.closest(".arch"));

    const filter = e.target.closest(".filter");
    if (filter) {
      document.querySelectorAll(".filter").forEach(f => f.classList.toggle("on", f === filter));
      renderMembers(filter.dataset.group);
      return;
    }

    const amend = e.target.closest(".amend");
    if (amend) return showAmendment(+amend.dataset.i);

    const scroll = e.target.closest("[data-rail]");
    if (scroll) {
      const rail = document.getElementById("rail");
      rail.scrollBy({ left: (scroll.dataset.rail === "next" ? 1 : -1) * Math.max(260, rail.clientWidth * .7), behavior: "smooth" });
    }
  });

  document.getElementById("rail").addEventListener("keydown", e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const cur = AMENDMENTS.findIndex((_, i) => document.querySelectorAll(".amend")[i].classList.contains("on"));
    const next = Math.min(AMENDMENTS.length - 1, Math.max(0, cur + (e.key === "ArrowRight" ? 1 : -1)));
    e.preventDefault();
    showAmendment(next);
    document.querySelectorAll(".amend")[next].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  });

  observe();
})();
