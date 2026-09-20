/* Our Constitution — Dialogues on Democracy & Development
   Journey map, Constituent Assembly members, and the amendments timeline. */
(() => {
  "use strict";

  /* ---------- Data ---------- */
  const FACTS = [
    { n: 299, suffix: "", label: "members in the Assembly", note: "It began with 389 members. After Partition, 299 remained, among them 15 women. 284 of them signed on 24 January 1950." },
    { n: 165, suffix: "", label: "days of debate", note: "Across 11 sessions between December 1946 and November 1949." },
    { n: 448, suffix: "", label: "articles today", note: "It began with 395 articles in 22 parts and 8 schedules. Today: about 448 articles, 25 parts and 12 schedules." },
    { n: 106, suffix: "", label: "amendments so far", note: "From the First Amendment in 1951 to the 106th in 2023." }
  ];

  const JOURNEY = [
    {
      date: "9 December 1946", img: "assembly-chamber", day: "9", mon: "Dec", year: "1946", title: "The Assembly meets for the first time",
      short: "207 members gather in the Constitution Hall in New Delhi. Sachchidananda Sinha, the oldest member, takes the chair.",
      detail: "The Constituent Assembly had been elected indirectly by the provincial assemblies under the Cabinet Mission Plan. The Muslim League stayed away from this first sitting. Two days later, on 11 December 1946, Dr. Rajendra Prasad was elected its permanent President, a role he held through every session."
    },
    {
      date: "13 December 1946", img: "objectives-resolution", day: "13", mon: "Dec", year: "1946", title: "The Objectives Resolution",
      short: "Jawaharlal Nehru moves the resolution that sets out what the new republic will stand for.",
      detail: "The resolution promised an independent sovereign republic that would secure justice, equality of status and opportunity, and freedom of thought, expression, belief, faith and worship, with safeguards for minorities, backward classes and tribal areas. Adopted on 22 January 1947, it became the seed of the Preamble."
    },
    {
      date: "15 August 1947", img: "independence-session", day: "15", mon: "Aug", year: "1947", title: "Independence changes the task",
      short: "The Assembly becomes a sovereign body, and also the country's first Parliament.",
      detail: "With Partition, the Assembly lost the members from areas that became Pakistan and its strength settled at 299. It now wrote the Constitution and ran the country at the same time, sitting as a legislature on some days and as a constitution-making body on others."
    },
    {
      date: "29 August 1947", img: "drafting-committee", day: "29", mon: "Aug", year: "1947", title: "The Drafting Committee is formed",
      short: "Seven members are appointed, with Dr. B.R. Ambedkar as Chairman.",
      detail: "The committee was Ambedkar, Alladi Krishnaswami Ayyar, N. Gopalaswami Ayyangar, K.M. Munshi, Syed Mohammad Saadulla, B.L. Mitter (later replaced by N. Madhava Rau) and D.P. Khaitan (later replaced by T.T. Krishnamachari). They worked from a draft prepared by the Constitutional Adviser, B.N. Rau."
    },
    {
      date: "February 1948", img: "committee-meeting", day: "", mon: "Feb", year: "1948", title: "The draft goes public",
      short: "The Draft Constitution is published so that citizens can send in their comments.",
      detail: "Copies went to the public, the press, provincial governments and lawyers' associations. Thousands of suggestions came back, and the Drafting Committee reworked the text in light of them — an early act of public consultation in a country that had never voted on universal franchise."
    },
    {
      date: "4 November 1948", img: "ambedkar-listening", day: "4", mon: "Nov", year: "1948", title: "Clause by clause, line by line",
      short: "Ambedkar introduces the Draft. The Assembly debates it for over a year.",
      detail: "Members argued over the strength of the centre, the place of Hindi and other languages, reservations, the right to property, and whether Directive Principles should be enforceable. Thousands of amendments were moved, and many were accepted. The debates, published in full, remain one of the richest records of Indian public reasoning."
    },
    {
      date: "26 November 1949", img: "draft-presented", day: "26", mon: "Nov", year: "1949", title: "Adopted",
      short: "The Assembly adopts the Constitution. India observes the day as Constitution Day.",
      detail: "Some articles came into force at once — those on citizenship, elections and the provisional Parliament — so that the machinery for the first general election could be set up. Ambedkar warned that the Constitution would work only as well as those who worked it: however good a constitution may be, he said, it will prove bad if those called to work it are a bad lot."
    },
    {
      date: "24 January 1950", img: "nehru-signing", day: "24", mon: "Jan", year: "1950", title: "The signing",
      short: "Members sign three copies: one in English, one in Hindi, one handwritten. The anthem is adopted the same day.",
      detail: "The handwritten English copy was calligraphed by Prem Behari Narain Raizada in flowing italic, and decorated by Nandalal Bose and artists from Santiniketan; Beohar Rammanohar Sinha illuminated the Preamble page. Jana Gana Mana was adopted as the national anthem and Vande Mataram given equal honour as the national song."
    },
    {
      date: "26 January 1950", img: "republic-day-1950", day: "26", mon: "Jan", year: "1950", title: "It becomes ours",
      short: "The Constitution comes into force. India becomes a republic.",
      detail: "The date was chosen deliberately: on 26 January 1930, the Congress had declared Purna Swaraj, complete independence. Dr. Rajendra Prasad was sworn in as the first President. The Constituent Assembly became the provisional Parliament until the first general election of 1951–52, in which every adult could vote."
    }
  ];

  const MEMBER_GROUPS = [
    { id: "all", label: "All profiles" },
    { id: "drafting", label: "Drafting Committee" },
    { id: "women", label: "Women members" },
    { id: "margins", label: "Voices from the margins" },
    { id: "guiding", label: "Guiding hands" }
  ];

  const MEMBERS = [
    {
      name: "Dr. B.R. Ambedkar", wiki: "https://en.wikipedia.org/wiki/B._R._Ambedkar", img: "ambedkar.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:Dr._Bhimrao_Ambedkar.jpg", artist: "Unknown author",
      role: "Chairman, Drafting Committee", groups: ["drafting", "margins"],
      short: "Born into a Mahar family and made to sit apart in school, he became the principal architect of the text that outlawed untouchability.",
      detail: "Ambedkar studied at Columbia University and the London School of Economics, led the movement for Dalit rights, and served as independent India's first Law Minister. He called Article 32, the right to move the Supreme Court when rights are violated, the heart and soul of the Constitution. He also pressed for a strong centre, constitutional morality, and for social democracy — one person, one vote, one value — warning that political equality without social and economic equality would not last."
    },
    {
      name: "Dr. Rajendra Prasad", wiki: "https://en.wikipedia.org/wiki/Rajendra_Prasad", img: "prasad.jpg", credit: "CC BY-SA 2.0", filePage: "https://commons.wikimedia.org/wiki/File:Rajendra_Prasad_(Indian_President),_signed_image_for_Walter_Nash_(NZ_Prime_Minister),_1958_(16017609534).jpg", artist: "Archives New Zealand from New Zealand",
      role: "President of the Constituent Assembly", groups: ["guiding"],
      short: "Presided over every session, holding together an Assembly that argued fiercely and rarely voted along party lines.",
      detail: "A lawyer from Bihar and a leader of the Champaran movement, Prasad was elected President of the Assembly on 11 December 1946. He steered three years of debate and signed the Constitution into being. In 1950 he became the first President of India, serving two full terms."
    },
    {
      name: "Jawaharlal Nehru", wiki: "https://en.wikipedia.org/wiki/Jawaharlal_Nehru", img: "nehru.jpg", credit: "CC0", filePage: "https://commons.wikimedia.org/wiki/File:Nehru_in_the_Netherlands,_1957.jpg", artist: "Harry Pot",
      role: "Moved the Objectives Resolution", groups: ["guiding"],
      short: "His Objectives Resolution of December 1946 became the promise the Preamble now carries.",
      detail: "Nehru framed the new republic's purpose in terms of justice, equality of status and opportunity, and freedom of thought and belief, with safeguards for minorities and tribal people. As Prime Minister he defended the Assembly's work in public, while inside it he was often challenged and outvoted on detail."
    },
    {
      name: "Sardar Vallabhbhai Patel", wiki: "https://en.wikipedia.org/wiki/Vallabhbhai_Patel", img: "patel.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:Sardar_patel_(cropped).jpg", artist: "Government of India work",
      role: "Chair, Advisory Committee on Fundamental Rights and Minorities", groups: ["guiding"],
      short: "Handled the Assembly's hardest political questions, including the end of separate electorates.",
      detail: "Patel chaired the committees on fundamental rights, minorities, and tribal and excluded areas. Under his chairmanship the Assembly dropped separate electorates and reserved seats for religious minorities, while retaining reservation for Scheduled Castes and Scheduled Tribes. Outside the Assembly he led the integration of the princely states."
    },
    {
      name: "B.N. Rau", wiki: "https://en.wikipedia.org/wiki/B._N._Rau", img: "rau.jpg", credit: "GODL-India", filePage: "https://commons.wikimedia.org/wiki/File:BN_Rau_1988_stamp_of_India.jpg", artist: "India Post, Government of India",
      role: "Constitutional Adviser", groups: ["guiding"],
      short: "The civil servant who wrote the first draft, after studying constitutions across the world.",
      detail: "Rau prepared the initial draft of 243 articles and 13 schedules that the Drafting Committee worked from. He travelled to the United States, Canada, Ireland and England to study how their constitutions worked, and later became a judge of the International Court of Justice."
    },
    {
      name: "Alladi Krishnaswami Ayyar", wiki: "https://en.wikipedia.org/wiki/Alladi_Krishnaswamy_Iyer", img: "alladi.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:Alladi_Krishnaswamy_Iyer.jpg", artist: "Unknown author",
      role: "Drafting Committee", groups: ["drafting"],
      short: "One of the finest lawyers of his generation, and a steady voice for a strong, enforceable set of rights.",
      detail: "Advocate-General of Madras for many years, Ayyar served on the Drafting Committee and several key sub-committees. He argued for due process safeguards balanced with the State's ability to govern, and helped shape the articles on citizenship and the judiciary."
    },
    {
      name: "K.M. Munshi", wiki: "https://en.wikipedia.org/wiki/Kanaiyalal_Maneklal_Munshi", img: "munshi.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:K_M_Munshi.jpg", artist: "Photo Division, Govt. of India",
      role: "Drafting Committee", groups: ["drafting"],
      short: "Lawyer, novelist and one of the keenest defenders of fundamental rights in the Assembly.",
      detail: "Munshi drafted early proposals on rights and pressed for freedom of expression and for a uniform civil code. He founded the Bharatiya Vidya Bhavan and later served as Governor of Uttar Pradesh."
    },
    {
      name: "Syed Mohammad Saadulla", wiki: "https://en.wikipedia.org/wiki/Muhammed_Saadulah", img: "saadulla.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:Syed_Saadulla.jpg", artist: "Unknown author",
      role: "Drafting Committee", groups: ["drafting"],
      short: "Former Premier of Assam, and one of the Muslim members who chose to build the new republic from within.",
      detail: "Saadulla brought the concerns of Assam and of the north-east into the drafting room, and worked on the provisions dealing with tribal areas that became the Sixth Schedule."
    },
    {
      name: "N. Gopalaswami Ayyangar", wiki: "https://en.wikipedia.org/wiki/N._Gopalaswami_Ayyangar", img: "ayyangar.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:Gopalaswamy_Ayyangar.jpg", artist: "Photo Division, Ministry of Information &amp; Broadcasting, Government",
      role: "Drafting Committee", groups: ["drafting"],
      short: "Former Prime Minister of Jammu and Kashmir state, who drafted the article on its special status.",
      detail: "Ayyangar piloted what became Article 370 through the Assembly, and worked on the provisions dealing with the Union executive, Parliament and the services."
    },
    {
      name: "T.T. Krishnamachari", wiki: "https://en.wikipedia.org/wiki/T._T._Krishnamachari", img: "ttk.jpg", credit: "GODL-India", filePage: "https://commons.wikimedia.org/wiki/File:TT_Krishnamachari_2002_stamp_of_India.jpg", artist: "India Post, Government of India",
      role: "Drafting Committee", groups: ["drafting"],
      short: "Told the Assembly plainly how much of the work had fallen on Ambedkar's shoulders alone.",
      detail: "Krishnamachari joined the Drafting Committee in 1948 after D.P. Khaitan's death. In a well-known intervention he noted that with members resigning, ill or away, the burden of drafting had come to rest on Ambedkar, and that the House owed him a debt of gratitude. He later served as Finance Minister."
    },
    {
      name: "Hansa Mehta", wiki: "https://en.wikipedia.org/wiki/Hansa_Mehta", img: "mehta.jpg", credit: "CC BY-SA 4.0", filePage: "https://commons.wikimedia.org/wiki/File:Hansa_Jivraj_Mehta.jpg", artist: "Part of Source Image",
      role: "Member, Fundamental Rights sub-committee", groups: ["women"],
      short: "Asked not for favours for women but for equality, dignity and social justice as a matter of right.",
      detail: "An educationist and reformer from Bombay, Mehta presented a charter of women's rights and opposed reserved seats for women, arguing that equality before the law and a uniform civil code mattered more. At the United Nations she is credited with changing the line in the Universal Declaration of Human Rights from 'all men are born free and equal' to 'all human beings'."
    },
    {
      name: "Dakshayani Velayudhan", wiki: "https://en.wikipedia.org/wiki/Dakshayani_Velayudhan",
      role: "The only Dalit woman in the Assembly", groups: ["women", "margins"],
      short: "At 34, the only Dalit woman in the room, speaking for dignity rather than protection.",
      detail: "From Cochin, and among the first women of her community to earn a science degree, Velayudhan argued that what Dalits needed was not safeguards alone but the end of a social order that treated them as lesser. She supported the abolition of untouchability under Article 17 and spoke for the rights of labour."
    },
    {
      name: "Rajkumari Amrit Kaur", wiki: "https://en.wikipedia.org/wiki/Amrit_Kaur", img: "amritkaur.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:RajkumariAmritKaur1936.png", artist: "No photographer credited",
      role: "Member, Fundamental Rights sub-committee", groups: ["women"],
      short: "Campaigned against child marriage and purdah, and for women's right to health and education.",
      detail: "Born into the royal family of Kapurthala, Amrit Kaur joined Gandhi's movement and served sixteen years as his secretary. In the Assembly she worked on fundamental rights and minority questions. As independent India's first Health Minister she founded the All India Institute of Medical Sciences."
    },
    {
      name: "Begum Aizaz Rasul", wiki: "https://en.wikipedia.org/wiki/Aizaz_Rasul", img: "rasul.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:BegumAizazRasul1938.png", artist: "No photographer credited",
      role: "The only Muslim woman member", groups: ["women", "margins"],
      short: "Argued that separate electorates were a self-defeating weapon for minorities.",
      detail: "From an aristocratic family in Uttar Pradesh, Rasul was among the members of the Muslim League who stayed and worked within the Assembly. She supported ending separate electorates and reserved seats for religious minorities, holding that minorities would be safer as citizens with equal rights than as groups set apart."
    },
    {
      name: "Durgabai Deshmukh", wiki: "https://en.wikipedia.org/wiki/Durgabai_Deshmukh", img: "deshmukh.jpg", credit: "GODL-India", filePage: "https://commons.wikimedia.org/wiki/File:Durgabai_Deshmukh_1982_stamp_of_India.jpg", artist: "India Post, Government of India",
      role: "Member, Steering Committee", groups: ["women"],
      short: "Went to prison at twelve for the salt satyagraha, and later shaped the Assembly's rules of business.",
      detail: "A lawyer and social worker from Andhra, Deshmukh founded the Andhra Mahila Sabha, spoke for women's education and for legal aid, and sat on several of the Assembly's committees. She later chaired the National Council for Women's Education."
    },
    {
      name: "Jaipal Singh Munda", wiki: "https://en.wikipedia.org/wiki/Jaipal_Singh_Munda", img: "munda.jpg", credit: "PD-India", filePage: "https://en.wikipedia.org/wiki/File:Jaipal_Singh_Munda-_File_Picture.jpg", artist: "Unknown author",
      role: "Adivasi leader from Chhotanagpur", groups: ["margins"],
      short: "Captained India's gold-medal hockey team in 1928, then captained the case for Adivasi rights.",
      detail: "Munda told the Assembly that Adivasis had been in India longest and been given least, and that what they asked for was not charity but the restoration of what had been taken. He pressed for the protections that became the Fifth and Sixth Schedules and for reservation for Scheduled Tribes."
    },
    {
      name: "Sucheta Kripalani", wiki: "https://en.wikipedia.org/wiki/Sucheta_Kripalani", img: "kripalani.jpg", credit: "Public domain", filePage: "https://commons.wikimedia.org/wiki/File:Sucheta_Kriplani_official_portrait.gif", artist: "Government of India",
      role: "Freedom fighter and member", groups: ["women"],
      short: "Sang Vande Mataram in the Assembly at the midnight hour when India became independent.",
      detail: "Kripalani worked in the relief camps during the violence of Partition and served on the sub-committee on fundamental rights. In 1963 she became India's first woman Chief Minister, in Uttar Pradesh."
    },
    {
      name: "Frank Anthony", wiki: "https://en.wikipedia.org/wiki/Frank_Anthony", img: "anthony.jpg", credit: "GODL-India", filePage: "https://commons.wikimedia.org/wiki/File:Frank_Anthony_2003_stamp_of_India.jpg", artist: "India Post, Government of India",
      role: "Representative of the Anglo-Indian community", groups: ["margins"],
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

  /* The Parts of the Constitution. It began with 22; four were added later and one repealed. */
  const PARTS = [
    { no: "I", name: "The Union and its territory", arts: "Articles 1 to 4",
      about: "Names the country, lists the states and union territories, and lets Parliament create new states or redraw old ones." },
    { no: "II", name: "Citizenship", arts: "Articles 5 to 11",
      about: "Who counted as a citizen when the Constitution began, and Parliament's power to make citizenship law since." },
    { no: "III", name: "Fundamental Rights", arts: "Articles 12 to 35", tag: "The six rights",
      about: "The rights every person can enforce in court: equality, freedom, against exploitation, freedom of religion, cultural and educational rights, and constitutional remedies." },
    { no: "IV", name: "Directive Principles", arts: "Articles 36 to 51",
      about: "Instructions to the State. Courts cannot enforce them, but they are meant to guide every law and policy.",
      list: ["A social order in which justice informs all institutions (38)",
             "Adequate livelihood, no concentration of wealth, equal pay for equal work (39)",
             "Free legal aid so poverty does not deny anyone justice (39A)",
             "Village panchayats as units of self-government (40)",
             "Work, education and public assistance in old age, sickness and disability (41)",
             "Early childhood care and education for children under six (45)",
             "Promotion of the interests of Scheduled Castes, Scheduled Tribes and other weaker sections (46)"] },
    { no: "IVA", name: "Fundamental Duties", arts: "Article 51A", tag: "Added 1976",
      about: "Eleven duties that bind citizens rather than the State. Ten were added in 1976 and one more in 2002.",
      list: ["Abide by the Constitution and respect the flag and the anthem",
             "Cherish the ideals of the freedom struggle",
             "Uphold the sovereignty, unity and integrity of India",
             "Promote harmony, and renounce practices derogatory to the dignity of women",
             "Preserve the composite culture of the country",
             "Protect the environment and have compassion for living creatures",
             "Develop a scientific temper and the spirit of inquiry",
             "Provide education to one's child between six and fourteen"] },
    { no: "V", name: "The Union", arts: "Articles 52 to 151",
      about: "The President and Vice President, the Council of Ministers, Parliament, the Supreme Court and the Comptroller and Auditor General." },
    { no: "VI", name: "The States", arts: "Articles 152 to 237",
      about: "Governors, state legislatures, state governments and the High Courts. The state mirror of Part V." },
    { no: "VII", name: "Former Part B states", arts: "Article 238", tag: "Repealed 1956",
      about: "Covered the princely states grouped as Part B. It was repealed when the states were reorganised on linguistic lines." },
    { no: "VIII", name: "The Union Territories", arts: "Articles 239 to 242",
      about: "How territories that are not states are administered, and how some of them get their own legislatures." },
    { no: "IX", name: "The Panchayats", arts: "Articles 243 to 243-O", tag: "Added 1992",
      about: "Elected village government with a fixed five year term, and a third of all seats reserved for women." },
    { no: "IXA", name: "The Municipalities", arts: "Articles 243-P to 243-ZG", tag: "Added 1992",
      about: "The same constitutional footing for towns and cities, with ward committees and regular elections." },
    { no: "IXB", name: "Co-operative societies", arts: "Articles 243-ZH to 243-ZT", tag: "Added 2011",
      about: "How co-operatives are formed and run, after the right to form them became a fundamental right." },
    { no: "X", name: "Scheduled and tribal areas", arts: "Articles 244 to 244A",
      about: "Special administration for the areas listed in the Fifth and Sixth Schedules, with councils of their own." },
    { no: "XI", name: "The Union and the States", arts: "Articles 245 to 263",
      about: "Who may make law on what, and how the Union and the states share administration.",
      list: ["Union list: defence, foreign affairs, currency, railways, citizenship",
             "State list: police, public health, agriculture, land, local government",
             "Concurrent list: education, criminal law, marriage, forests, where Union law usually prevails",
             "Inter-state councils and river water disputes (262, 263)"] },
    { no: "XII", name: "Finance, property and contracts", arts: "Articles 264 to 300A",
      about: "Taxes, borrowing, the Finance Commission and the sharing of revenue. Article 300A holds the right to property." },
    { no: "XIII", name: "Trade and commerce within India", arts: "Articles 301 to 307",
      about: "Trade, commerce and movement across state borders stay free, so India works as a single market." },
    { no: "XIV", name: "Services under the Union and States", arts: "Articles 308 to 323",
      about: "The civil services, their recruitment and protections, and the Public Service Commissions." },
    { no: "XIVA", name: "Tribunals", arts: "Articles 323A to 323B", tag: "Added 1976",
      about: "Tribunals for service matters, tax, land reform and other disputes, outside the ordinary courts." },
    { no: "XV", name: "Elections", arts: "Articles 324 to 329",
      about: "An independent Election Commission, one electoral roll for all, and no discrimination in who may vote." },
    { no: "XVI", name: "Special provisions for certain classes", arts: "Articles 330 to 342",
      about: "Reserved seats and safeguards for Scheduled Castes, Scheduled Tribes and other specified groups." },
    { no: "XVII", name: "Official language", arts: "Articles 343 to 351",
      about: "Hindi and English in official use at the Union, the languages of the states, and language in the courts." },
    { no: "XVIII", name: "Emergency provisions", arts: "Articles 352 to 360",
      about: "National emergency, President's rule in a state and financial emergency, with the safeguards added in 1978." },
    { no: "XIX", name: "Miscellaneous", arts: "Articles 361 to 367",
      about: "Protections for the President and Governors, and the rules for reading the Constitution itself." },
    { no: "XX", name: "Amendment of the Constitution", arts: "Article 368",
      about: "How the text can be changed, and the majorities needed. The courts have held that its basic structure cannot be destroyed." },
    { no: "XXI", name: "Temporary and transitional provisions", arts: "Articles 369 to 392",
      about: "Special arrangements for particular states as the new system settled in, including Article 370." },
    { no: "XXII", name: "Short title and commencement", arts: "Articles 393 to 395",
      about: "The closing formalities: the name of the Constitution, the date it came into force, the Hindi text and the laws it repealed." }
  ];

  let pIndex = 2;

  function renderParts() {
    const el = document.getElementById("parts");
    if (!el) return;
    el.innerHTML = `
      <article class="pt-panel" id="pt-panel" aria-live="polite"></article>
      <div class="pt-grid" role="tablist" aria-label="Parts of the Constitution">
        ${PARTS.map((p, i) => `
          <button class="pt" role="tab" data-part="${i}" aria-selected="${i === pIndex}">
            <span class="pt-no">${esc(p.no)}</span>
            <span class="pt-name">${esc(p.name)}</span>
          </button>`).join("")}
      </div>`;
    paintPart(pIndex);
  }

  function paintPart(i) {
    pIndex = Math.max(0, Math.min(PARTS.length - 1, i));
    const p = PARTS[pIndex];
    const panel = document.getElementById("pt-panel");
    panel.innerHTML = `
      <span class="ptp-no">Part ${esc(p.no)}</span>
      <div class="ptp-body">
        <div class="ptp-head">
          <h3>${esc(p.name)}</h3>
          <span class="ptp-arts">${esc(p.arts)}</span>
          ${p.tag ? `<span class="ptp-tag">${esc(p.tag)}</span>` : ""}
        </div>
        <p>${esc(p.about)}</p>
        ${p.list ? `<ul class="ptp-list">${p.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
      </div>`;
    panel.classList.remove("in");
    void panel.offsetWidth;
    panel.classList.add("in");
    document.querySelectorAll(".pt").forEach((b, k) => {
      b.classList.toggle("on", k === pIndex);
      b.setAttribute("aria-selected", String(k === pIndex));
    });
  }

  const ord = n => { const r = n % 100; if (r >= 11 && r <= 13) return "th"; return ["th", "st", "nd", "rd"][n % 10] || "th"; };
  const HISTORY = window.DOD_HISTORY || [];
  const byId = id => HISTORY.find(h => h.id === id);

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



  /* ---------- Trivia ---------- */
  const TRIVIA = [
    { big: "53,000", unit: "visitors", text: "More than fifty three thousand citizens sat in the visitors’ gallery over the three years of debate. The making of the Constitution was watched by the public from the start." },
    { big: "90,000", unit: "words", text: "The Constitution was never typeset or printed to begin with. All ninety thousand words were written by hand, in English and in Hindi." },
    { big: "22", unit: "illustrations", text: "Each part opens with a scene from Indian history, painted in miniature style: Mohenjo-daro and the Indus Valley, the Vedic age, the Maurya and Gupta empires, the Mughal era and the freedom movement." },
    { big: "284", unit: "signatures", text: "Two hundred and eighty four members signed the Constitution at the Constitution Hall in New Delhi on 24 January 1950, at the Assembly's last sitting." },
    { big: "N₂", unit: "nitrogen", text: "The original copies are kept in cases filled with nitrogen in the Library of Parliament, so the ink and the handmade paper do not age." },
    { big: "22 July", unit: "1947", text: "The national flag was adopted in its present form at a sitting of the Constituent Assembly, three weeks before independence." },
    { big: "1", unit: "first Speaker", text: "G.V. Mavlankar became the first Speaker of the Lok Sabha after India became a republic." },
    { big: "We", unit: "the people", text: "Sovereignty rests with the people of India. The Constitution was adopted in their name, which makes them its ultimate custodians." }
  ];

  let tIndex = 0, tTimer = null;

  function renderTrivia() {
    const el = document.getElementById("trivia");
    if (!el) return;
    el.innerHTML = `
      <div class="tv-deck" id="tv-deck">
        ${TRIVIA.map((t, i) => `
          <article class="tv-card" data-t="${i}" ${i === 0 ? 'data-on="1"' : ""}>
            <span class="tv-big">${t.big}<small>${esc(t.unit)}</small></span>
            <p>${esc(t.text)}</p>
          </article>`).join("")}
      </div>
      <div class="tv-controls">
        <button class="tv-arrow" data-tstep="-1" aria-label="Previous fact">‹</button>
        <div class="tv-dots" role="tablist" aria-label="Facts">
          ${TRIVIA.map((_, i) => `<button class="tv-dot" data-tgo="${i}" role="tab" aria-selected="${i === 0}" aria-label="Fact ${i + 1}"></button>`).join("")}
        </div>
        <button class="tv-arrow" data-tstep="1" aria-label="Next fact">›</button>
      </div>`;
    paintTrivia(0);
    el.addEventListener("pointerenter", stopTrivia);
    el.addEventListener("pointerleave", startTrivia);
    el.addEventListener("focusin", stopTrivia);
  }

  function paintTrivia(i) {
    tIndex = (i + TRIVIA.length) % TRIVIA.length;
    document.querySelectorAll(".tv-card").forEach((c, k) => {
      c.toggleAttribute("data-on", k === tIndex);
      c.setAttribute("aria-hidden", String(k !== tIndex));
    });
    document.querySelectorAll(".tv-dot").forEach((d, k) => {
      d.classList.toggle("on", k === tIndex);
      d.setAttribute("aria-selected", String(k === tIndex));
    });
  }

  function startTrivia() {
    if (tTimer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    tTimer = setInterval(() => paintTrivia(tIndex + 1), 7000);
  }
  function stopTrivia() { clearInterval(tTimer); tTimer = null; }

  /* ---------- The six Fundamental Rights ---------- */
  const R_ICONS = {
    equality: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 21h14"/><path d="M3 7h18"/><path d="m6 7-3 7a3.5 3.5 0 0 0 6 0z"/><path d="m18 7-3 7a3.5 3.5 0 0 0 6 0z"/></svg>',
    freedom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7a3 3 0 1 0-3-3"/><path d="M13 4c0 5-4 7-8 7 1 4 4 6 8 6"/><path d="M13 17c4 0 7-3 7-7"/><path d="M8 21c2-2 5-3 8-3"/></svg>',
    exploitation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 8.5 7 6a3.5 3.5 0 0 0-5 5l2.5 2.5"/><path d="M14.5 15.5 17 18a3.5 3.5 0 0 0 5-5l-2.5-2.5"/><path d="m4 20 3-3"/><path d="m17 7 3-3"/></svg>',
    religion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1.5 2.5 3 4 3 6a3 3 0 0 1-6 0c0-2 1.5-3.5 3-6z"/><path d="M4 16h16"/><path d="M6 16c0 3 2.7 5 6 5s6-2 6-5"/></svg>',
    culture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z"/><path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z"/></svg>',
    remedies: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/></svg>'
  };

  const RIGHTS = [
    { icon: "equality", name: "Right to Equality", art: "Articles 14 to 18", line: "Same rules. Same respect.",
      body: "No matter who you are, the law must treat you equally. Your caste, religion, gender or place of birth cannot be used to unfairly discriminate against you. The Constitution also abolishes untouchability and prohibits the State from granting certain titles.",
      life: "Everyone deserves the same respect, whether they are sitting in the front row or the last row." },
    { icon: "freedom", name: "Right to Freedom", art: "Articles 19 to 22", line: "Speak your mind. Move freely. Choose your path.",
      body: "You have the freedom to express your views, gather peacefully, form associations, travel across India, live where you choose and choose your work. These Articles also protect life and personal liberty, guard against unfair punishment and give safeguards against arbitrary arrest. Article 21A guarantees free and compulsory education for children between six and fourteen.",
      life: "You can share an idea, travel to another state, choose your work and expect your life and liberty to be protected." },
    { icon: "exploitation", name: "Right against Exploitation", art: "Articles 23 to 24", line: "Nobody gets to use you unfairly.",
      body: "No one can force you into bonded or forced labour. Human trafficking is prohibited, and children below fourteen cannot be employed in factories, mines or other hazardous work.",
      life: "Your time, work and safety matter. Nobody has the right to make you work through force or exploitation." },
    { icon: "religion", name: "Right to Freedom of Religion", art: "Articles 25 to 28", line: "Believe. Question. Choose.",
      body: "You have the freedom of conscience and the right to profess, practise and propagate your religion, subject to constitutional limits such as public order, morality and health. The Constitution also protects freedoms around managing religious affairs and religious instruction.",
      life: "What you believe, how you practise your faith and whether you choose to have a faith are personal matters protected by the Constitution." },
    { icon: "culture", name: "Cultural and Educational Rights", art: "Articles 29 to 30", line: "Your language. Your culture. Your story.",
      body: "India is home to many languages, cultures and traditions. These rights protect the ability of communities to conserve their distinct language, script and culture, and the right of religious and linguistic minorities to establish and run educational institutions of their choice.",
      life: "The language you speak at home, the culture you grow up with and the stories your community carries are part of what makes India diverse." },
    { icon: "remedies", name: "Right to Constitutional Remedies", art: "Article 32", line: "When your rights are in trouble, you have a way to fight back.",
      body: "Fundamental Rights are not just promises on paper. If your Fundamental Rights are violated, Article 32 allows you to approach the Supreme Court for their enforcement. High Courts have the same power under Article 226.",
      life: "If your Fundamental Rights are violated, the Constitution gives you a way to ask the courts to step in and protect them." }
  ];

  let rIndex = 0;

  function renderRights() {
    const el = document.getElementById("rights");
    if (!el) return;
    el.innerHTML = `
      <div class="rlist" role="tablist" aria-label="The six Fundamental Rights">
        ${RIGHTS.map((r, i) => `
          <button class="ritem" role="tab" data-right="${i}" aria-selected="${i === 0}">
            <span class="ri-ic">${R_ICONS[r.icon]}</span>
            <span class="ri-txt">
              <span class="ri-num">0${i + 1}</span>
              <span class="ri-name">${esc(r.name)}</span>
            </span>
          </button>`).join("")}
      </div>
      <article class="rpanel" id="rpanel" aria-live="polite"></article>`;
    paintRight(0);
  }

  function paintRight(i) {
    rIndex = Math.max(0, Math.min(RIGHTS.length - 1, i));
    const r = RIGHTS[rIndex];
    const panel = document.getElementById("rpanel");
    panel.innerHTML = `
      <span class="rp-art">${esc(r.art)}</span>
      <h3>${esc(r.name)}</h3>
      <p class="rp-line">${esc(r.line)}</p>
      <p class="rp-body">${esc(r.body)}</p>
      <p class="rp-life"><strong>In everyday life</strong>${esc(r.life)}</p>
      <div class="rp-nav">
        <button class="rp-step" data-rstep="-1" ${rIndex === 0 ? "disabled" : ""} aria-label="Previous right">‹</button>
        <span class="rp-count">${rIndex + 1} of ${RIGHTS.length}</span>
        <button class="rp-step" data-rstep="1" ${rIndex === RIGHTS.length - 1 ? "disabled" : ""} aria-label="Next right">›</button>
      </div>`;
    panel.classList.remove("in");
    void panel.offsetWidth;
    panel.classList.add("in");
    document.querySelectorAll(".ritem").forEach((b, k) => {
      b.classList.toggle("on", k === rIndex);
      b.setAttribute("aria-selected", String(k === rIndex));
    });
    const active = document.querySelectorAll(".ritem")[rIndex];
    if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  /* ---------- Journey: a horizontal timeline ---------- */
  let jIndex = 0;

  function renderJourney() {
    const el = document.getElementById("journey");
    if (!el) return;
    el.innerHTML = `
      <div class="jour">
        <div class="jour-stage">
          <button class="jnav" data-jour="prev" aria-label="Previous stop">‹</button>
          <article class="jcard" id="jcard" aria-live="polite"></article>
          <button class="jnav" data-jour="next" aria-label="Next stop">›</button>
        </div>
        <div class="jrail-wrap">
          <div class="jline"><i id="jfill"></i></div>
          <div class="jrail" id="jrail" role="tablist" aria-label="Moments in the making of the Constitution" tabindex="0">
            ${JOURNEY.map((s, i) => `
              <button class="jstop" role="tab" data-jstop="${i}" aria-selected="${i === 0}">
                <span class="js-year">${esc(s.year)}</span>
                <span class="js-day">${s.day ? esc(s.day) : esc(s.mon)}</span>
                <span class="js-mon">${s.day ? esc(s.mon) : "&nbsp;"}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`;
    paintJourney(0, true);
  }

  function paintJourney(i, first) {
    jIndex = Math.max(0, Math.min(JOURNEY.length - 1, i));
    const s = JOURNEY[jIndex];
    const h = byId(s.img);
    const card = document.getElementById("jcard");
    card.innerHTML = `
      ${h ? `<button class="jphoto photo" data-img="${esc(h.id)}" aria-label="Open photograph: ${esc(h.title)}">
              <img src="assets/history/${esc(h.file)}" alt="${esc(h.caption)}" loading="${first ? "eager" : "lazy"}">
              <span class="photo-cap"><span>${esc(h.title)}</span><span class="zoom" aria-hidden="true">⤢</span></span>
            </button>` : ""}
      <div class="jtext">
        <span class="jmeta">Stop ${jIndex + 1} of ${JOURNEY.length} <b>${esc(s.date)}</b></span>
        <h3>${esc(s.title)}</h3>
        <p class="jshort">${esc(s.short)}</p>
        <p class="jdetail">${esc(s.detail)}</p>
      </div>`;
    card.classList.remove("in");
    void card.offsetWidth;
    card.classList.add("in");

    document.querySelectorAll(".jstop").forEach((b, k) => {
      b.classList.toggle("on", k === jIndex);
      b.classList.toggle("done", k < jIndex);
      b.setAttribute("aria-selected", String(k === jIndex));
    });
    const fill = document.getElementById("jfill");
    if (fill) fill.style.width = ((jIndex / (JOURNEY.length - 1)) * 100) + "%";
    document.querySelectorAll(".jnav").forEach(b => {
      b.disabled = (b.dataset.jour === "prev" && jIndex === 0) || (b.dataset.jour === "next" && jIndex === JOURNEY.length - 1);
    });
    const active = document.querySelectorAll(".jstop")[jIndex];
    if (active && !first) active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  function photoHTML(h, cls) {
    if (!h) return "";
    return `<button class="${cls} photo" data-img="${esc(h.id)}" aria-label="Open photograph: ${esc(h.title)}">
        <img src="assets/history/${esc(h.file)}" alt="${esc(h.caption)}" loading="lazy">
        <span class="photo-cap"><span>${esc(h.title)}</span><span class="zoom" aria-hidden="true">⤢</span></span>
      </button>`;
  }

  function renderGallery() {
    const el = document.getElementById("gallery");
    if (!el) return;
    el.innerHTML = HISTORY.map(h => photoHTML(h, "gal-item")).join("");
  }

  /* Lightbox */
  let lightIndex = 0;
  function openLight(id) {
    lightIndex = Math.max(0, HISTORY.findIndex(h => h.id === id));
    const box = document.getElementById("lightbox");
    box.hidden = false;
    document.body.style.overflow = "hidden";
    paintLight();
    box.querySelector(".lb-close").focus({ preventScroll: true });
  }
  function closeLight() {
    document.getElementById("lightbox").hidden = true;
    document.body.style.overflow = "";
  }
  function stepLight(d) {
    lightIndex = (lightIndex + d + HISTORY.length) % HISTORY.length;
    paintLight();
  }
  function paintLight() {
    const h = HISTORY[lightIndex];
    const box = document.getElementById("lightbox");
    box.querySelector(".lb-img").innerHTML = `<img src="assets/history/${esc(h.file)}" alt="${esc(h.caption)}">`;
    box.querySelector(".lb-title").textContent = h.title;
    box.querySelector(".lb-cap").textContent = h.caption;
    box.querySelector(".lb-credit").innerHTML =
      `${esc(h.license)} · ${esc(h.artist)} · <a href="${esc(h.page)}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
    box.querySelector(".lb-count").textContent = (lightIndex + 1) + " / " + HISTORY.length;
  }

  /* ---------- Videos ---------- */
  const VIDEOS = window.DOD_VIDEOS || [];
  const PLAYLIST = window.DOD_PLAYLIST || "";
  const STEP = 6;
  let shown = STEP;

  function videoCard(v, i) {
    return `
      <article class="vid" data-i="${i}" ${i < shown ? "" : "hidden"}>
        <button class="vid-play" data-video="${esc(v.id)}" aria-label="Play: ${esc(v.title)}">
          <span class="vid-thumb">
            <img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
            <span class="vid-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
            </span>
            <span class="vid-dur">${esc(v.dur)}</span>
          </span>
        </button>
        <div class="vid-meta">
          ${v.year ? `<span class="vid-year">${esc(v.year)}</span>` : ""}
          <h3>${esc(v.title)}</h3>
        </div>
      </article>`;
  }

  function renderVideos() {
    const el = document.getElementById("videos");
    if (!el || !VIDEOS.length) return;
    el.innerHTML = VIDEOS.map(videoCard).join("");
    paintVideoToggle();
  }

  function paintVideoToggle() {
    const btn = document.getElementById("vid-more");
    if (!btn) return;
    const left = VIDEOS.length - shown;
    btn.innerHTML = left > 0
      ? `<span class="plus" aria-hidden="true">+</span> Show ${Math.min(STEP, left)} more <small>${left} left of ${VIDEOS.length}</small>`
      : `<span class="plus minus" aria-hidden="true">+</span> Show fewer`;
    btn.dataset.mode = left > 0 ? "more" : "less";
  }

  function toggleVideos() {
    const btn = document.getElementById("vid-more");
    if (btn.dataset.mode === "less") {
      shown = STEP;
      document.getElementById("videos").scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      shown = Math.min(VIDEOS.length, shown + STEP);
    }
    document.querySelectorAll(".vid").forEach((el, i) => {
      el.hidden = i >= shown;
      if (i >= shown) { const f = el.querySelector("iframe"); if (f) resetVideo(el); }
    });
    paintVideoToggle();
  }

  function resetVideo(card) {
    const v = VIDEOS[+card.dataset.i];
    card.querySelector(".vid-frame")?.replaceWith(Object.assign(document.createElement("div"), { innerHTML: videoCard(v, +card.dataset.i) }).firstElementChild.querySelector(".vid-play"));
  }

  function playVideo(btn) {
    const id = btn.dataset.video;
    const frame = document.createElement("div");
    frame.className = "vid-frame";
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0"
      title="Constituent Assembly Debates video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`;
    btn.replaceWith(frame);
  }

  function renderPhotoCredits() {
    const el = document.getElementById("photo-credits");
    if (!el) return;
    el.innerHTML = `
      <details class="credits">
        <summary>Photographs: sources and licences (${HISTORY.length} images)</summary>
        <ul>${HISTORY.map(h => `<li><strong>${esc(h.title)}</strong> — ${esc(h.license)}, ${esc(h.artist)}. <a href="${esc(h.page)}" target="_blank" rel="noopener">File page</a></li>`).join("")}</ul>
        <p>All photographs come from Wikimedia Commons. Most are public domain images from the Photo Division, Government of India; the illuminated manuscript pages are reproduced under CC BY-SA 4.0.</p>
      </details>`;
  }

  const initials = name => name.replace(/^(Dr\.|Sardar|Begum|Rajkumari)\s+/, "").split(/\s+/).map(w => w[0]).join("").slice(0, 2);

  function renderMembers(group = "all") {
    const list = MEMBERS.filter(m => group === "all" || m.groups.includes(group));
    document.getElementById("members").innerHTML = list.map((m, i) => `
      <article class="member" style="animation-delay:${Math.min(i * 40, 400)}ms">
        <button class="member-btn" aria-expanded="false">
          <span class="m-top">
            ${m.img
              ? `<span class="m-photo${["rau.jpg","ttk.jpg","deshmukh.jpg","anthony.jpg"].includes(m.img) ? " is-stamp" : ""}"><img src="assets/members/${esc(m.img)}" alt="Portrait of ${esc(m.name)}" loading="lazy" width="120" height="120"></span>`
              : `<span class="m-photo m-initials" aria-hidden="true">${esc(initials(m.name))}</span>`}
            <span class="m-id"><h3>${esc(m.name)}</h3><span class="m-role">${esc(m.role)}</span></span>
            <span class="m-chev" aria-hidden="true">+</span>
          </span>
          <span class="m-short">${esc(m.short)}</span>
          <span class="m-detail"><span>${esc(m.detail)}</span></span>
        </button>
        <a class="m-wiki" href="${esc(m.wiki)}" target="_blank" rel="noopener">Read on Wikipedia <span aria-hidden="true">↗</span></a>
      </article>`).join("");
    document.getElementById("member-count").textContent = group === "all"
      ? list.length + " profiles from an Assembly of 299"
      : list.length + " of " + MEMBERS.length + " profiles";
  }

  function renderCredits() {
    const withImg = MEMBERS.filter(m => m.img);
    document.getElementById("credits").innerHTML = `
      <details class="credits">
        <summary>Portraits: sources and licences (${withImg.length} images)</summary>
        <ul>
          ${withImg.map(m => `<li><strong>${esc(m.name)}</strong> — ${esc(m.credit)}${m.artist ? ", " + esc(m.artist) : ""}. <a href="${esc(m.filePage)}" target="_blank" rel="noopener">File page</a></li>`).join("")}
        </ul>
        <p>Images come from Wikimedia Commons and are reproduced here under the licence shown against each one. Dakshayani Velayudhan is shown by her initials because no freely licensed photograph of her was available.</p>
      </details>`;
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
        if (e.target.id === "trivia-section") startTrivia();
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: .15 });
    document.querySelectorAll(".fact strong[data-count], .reveal, #trivia-section").forEach(el => io.observe(el));
  }

  /* ---------- Wire up ---------- */
  renderFacts();
  renderRights();
  renderTrivia();
  renderJourney();
  renderMembers();
  renderCredits();
  renderAmendments();
  renderParts();
  renderGallery();
  renderVideos();
  renderPhotoCredits();

  document.getElementById("filters").innerHTML = MEMBER_GROUPS.map((g, i) =>
    `<button class="filter${i === 0 ? " on" : ""}" data-group="${g.id}">${esc(g.label)}</button>`).join("");

  document.addEventListener("click", e => {
    const play = e.target.closest("[data-video]");
    if (play) return playVideo(play);

    if (e.target.closest("#vid-more")) return toggleVideos();

    const photo = e.target.closest("[data-img]");
    if (photo) return openLight(photo.dataset.img);

    const lb = e.target.closest("[data-lb]");
    if (lb) {
      const act = lb.dataset.lb;
      if (act === "close") closeLight();
      else if (act === "prev") stepLight(-1);
      else if (act === "next") stepLight(1);
      return;
    }

    const tstep = e.target.closest("[data-tstep]");
    if (tstep) { stopTrivia(); return paintTrivia(tIndex + +tstep.dataset.tstep); }

    const tgo = e.target.closest("[data-tgo]");
    if (tgo) { stopTrivia(); return paintTrivia(+tgo.dataset.tgo); }

    const rbtn = e.target.closest("[data-right]");
    if (rbtn) return paintRight(+rbtn.dataset.right);

    const rstep = e.target.closest("[data-rstep]");
    if (rstep) return paintRight(rIndex + +rstep.dataset.rstep);

    const jstop = e.target.closest("[data-jstop]");
    if (jstop) return paintJourney(+jstop.dataset.jstop);

    const jnav = e.target.closest("[data-jour]");
    if (jnav) return paintJourney(jIndex + (jnav.dataset.jour === "next" ? 1 : -1));

    const member = e.target.closest(".member-btn");
    if (member) return expandToggle(member, member.closest(".member"));

    const part = e.target.closest("[data-part]");
    if (part) return paintPart(+part.dataset.part);

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

  document.getElementById("jrail").addEventListener("keydown", e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    paintJourney(jIndex + (e.key === "ArrowRight" ? 1 : -1));
  });

  document.getElementById("rail").addEventListener("keydown", e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const cur = AMENDMENTS.findIndex((_, i) => document.querySelectorAll(".amend")[i].classList.contains("on"));
    const next = Math.min(AMENDMENTS.length - 1, Math.max(0, cur + (e.key === "ArrowRight" ? 1 : -1)));
    e.preventDefault();
    showAmendment(next);
    document.querySelectorAll(".amend")[next].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  });

  document.addEventListener("keydown", e => {
    const box = document.getElementById("lightbox");
    if (!box || box.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeLight(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); stepLight(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepLight(-1); }
  });

  observe();
})();
