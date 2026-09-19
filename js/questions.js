/*
 * Constitutional Literacy Assessment — question bank
 * Dialogues on Democracy & Development
 *
 * Each question: { text, scenario?, options[], scores[], themes[], explain }
 * `scores` gives the points (0–3) each option earns, judged against Indian constitutional values:
 *   3 = best response, 2 = mostly aligned, 1 = partly aligned, 0 = not aligned.
 * Where there is no single right answer, partially aligned options earn partial credit.
 */
window.DOD_THEMES = {
  democracy: "Democracy and governance",
  preamble: "The Preamble",
  rights: "Fundamental Rights",
  equality: "Equality and social justice",
  caste: "Caste",
  gender: "Gender",
  religion: "Religion and secularism",
  disability: "Disability",
  expression: "Free expression and dissent",
  autonomy: "Personal choice and bodily autonomy"
};

window.DOD_SECTIONS = [
  {
    id: "understanding",
    title: "Understanding",
    kicker: "Section 1",
    icon: "compass",
    blurb: "How you think about democracy, equality and rights in everyday life.",
    keyLabel: "Constitutional perspective",
    questions: [
      {
        text: "Why do you think a Constitution is important for a country?",
        options: [
          "To maintain order and justice in society",
          "To let people do whatever they want",
          "To make the government more powerful than the citizens",
          "To replace cultural traditions"
        ],
        scores: [3, 0, 0, 0],
        themes: ["democracy"],
        explain: "A Constitution sets out how a country is governed, limits the power of those in government, and protects the rights of every citizen. It creates order grounded in justice."
      },
      {
        text: "What does democracy mean to you?",
        options: [
          "A system where only the powerful make decisions",
          "A system where people elect their leaders and have a say in governance",
          "A form of government where only educated people vote",
          "A rule by one person"
        ],
        scores: [0, 3, 0, 0],
        themes: ["democracy"],
        explain: "In a democracy, power flows from the people. Every adult citizen elects representatives and can take part in governance, and those in power remain accountable to them."
      },
      {
        text: "Do you think everyone is treated equally in India? Why?",
        options: [
          "Yes, because the law treats everyone the same",
          "No, because of caste, religion, or gender discrimination",
          "Yes, because India is a democracy",
          "No, because only rich people get justice"
        ],
        scores: [1, 3, 0, 1],
        themes: ["equality", "caste"],
        explain: "Article 14 guarantees equality before the law, but equality on paper is not always equality in practice. Discrimination based on caste, religion and gender continues, which is why the Constitution also prohibits discrimination (Article 15) and abolishes untouchability (Article 17)."
      },
      {
        text: "Can everyone in India vote? Why or why not?",
        options: [
          "Yes, every adult citizen can vote regardless of gender or status",
          "No, only educated people are allowed to vote",
          "Yes, but only people above 25 years of age can vote",
          "No, voting is limited to government employees"
        ],
        scores: [3, 0, 0, 0],
        themes: ["democracy"],
        explain: "Article 326 guarantees universal adult franchise: every citizen aged 18 or above can vote, regardless of gender, caste, religion, education or wealth."
      },
      {
        text: "Do you think everyone has the right to marry whoever they choose?",
        options: [
          "Yes, the Constitution allows individuals to marry freely",
          "No, family and society have the final say",
          "Yes, but only if both belong to the same religion or caste",
          "No, marriage decisions are based on tradition, not laws"
        ],
        scores: [3, 0, 0, 0],
        themes: ["autonomy"],
        explain: "Choosing a life partner is part of the right to life and personal liberty (Article 21). The Supreme Court affirmed this in Shafin Jahan v. Asokan (2018), and the Special Marriage Act, 1954 allows adults to marry across religion and caste."
      },
      {
        text: "Do you think everyone has the right to make decisions about their own body, including when to have children?",
        options: [
          "Yes, because personal bodily autonomy is a constitutional right",
          "No, decisions about reproduction should follow societal norms",
          "Yes, but only if the husband or family approves",
          "No, individuals must prioritise community over personal choices"
        ],
        scores: [3, 0, 0, 0],
        themes: ["autonomy", "gender"],
        explain: "Bodily autonomy, including reproductive choice, is protected under Article 21. In Suchita Srivastava (2009) and X v. Principal Secretary (2022), the Supreme Court recognised a woman's right to make her own reproductive decisions."
      },
      {
        text: "Do you think a Dalit woman with a disability faces different challenges than a woman from a privileged caste background? Why?",
        options: [
          "No, because all women face the same challenges",
          "Yes, because caste and disability create additional barriers",
          "No, because society treats everyone with disabilities equally",
          "Yes, but only in urban areas, not in rural spaces"
        ],
        scores: [0, 3, 0, 1],
        themes: ["disability", "caste"],
        explain: "Caste, gender and disability overlap and compound one another. Constitutional equality asks us to see these layered barriers (often called intersectionality) rather than treat every experience as the same."
      },
      {
        text: "Who do you think has the final say over a woman’s body in making decisions about her health and well-being?",
        options: [
          "Her husband, her family and the community",
          "She herself, as per her constitutional rights",
          "The government through laws and policies",
          "Religious or traditional leaders"
        ],
        scores: [0, 3, 1, 0],
        themes: ["autonomy", "gender"],
        explain: "Under Article 21, a woman's rights to privacy, dignity and bodily integrity belong to her. Laws, families and services should support her choices, not replace them."
      },
      {
        text: "What does the Constitution say about same-sex relationships?",
        options: [
          "They are illegal and punishable",
          "They are protected under the right to equality and personal freedom",
          "They are ignored in the Constitution",
          "They are only accepted in urban areas"
        ],
        scores: [0, 3, 0, 0],
        themes: ["autonomy"],
        explain: "In Navtej Singh Johar v. Union of India (2018), the Supreme Court decriminalised consensual same-sex relationships, holding that they are protected by the rights to equality, dignity, privacy and expression (Articles 14, 15, 19 and 21)."
      },
      {
        text: "What would you do if you feel unfairly treated in school or community?",
        options: [
          "Speak to a teacher or community leader about it",
          "Stay silent because nothing will change",
          "Complain to your family and stop attending school/community events",
          "Ignore it and focus on your studies"
        ],
        scores: [3, 0, 1, 0],
        themes: ["equality"],
        explain: "The constitutional way to address injustice is to speak up through trusted, accountable channels. Silence or withdrawal leaves both the problem and the harm in place."
      },
      {
        text: "Do you think boys and girls are given equal opportunities in India? Why?",
        options: [
          "Yes, because boys and girls have the same rights under the law",
          "No, because society often prioritises boys over girls",
          "Yes, but only in urban areas, not villages",
          "No, girls are expected to do household work more than boys"
        ],
        scores: [1, 3, 1, 2],
        themes: ["gender"],
        explain: "The law guarantees equal rights, but in practice society often prioritises boys in education, nutrition, mobility and household work. Recognising this gap is the first step to closing it."
      },
      {
        text: "Why do you think girls with disabilities face additional challenges in accessing education?",
        options: [
          "Because schools are not accessible or inclusive",
          "Because families often prioritise boys over girls",
          "Because communities believe disabled girls don’t need education",
          "All of the above"
        ],
        scores: [1, 1, 1, 3],
        themes: ["disability", "gender"],
        explain: "Inaccessible schools, gender bias within families and low community expectations all add up. The Right to Education (Article 21A) and the Rights of Persons with Disabilities Act, 2016 require inclusive education for every child."
      },
      {
        text: "What does freedom of speech mean to you?",
        options: [
          "Saying anything you want without consequences",
          "Expressing your ideas and opinions without fear, as long as it does not harm anyone's life, liberty or property, particularly if they are already vulnerable",
          "Saying anything that does not harm the government",
          "Being allowed to insult others freely"
        ],
        scores: [0, 3, 0, 0],
        themes: ["expression"],
        explain: "Article 19(1)(a) protects free speech, subject to reasonable restrictions under Article 19(2). Criticising the government is protected. Speech that harms other people's life, liberty or dignity, especially people who are already vulnerable, is not."
      },
      {
        text: "Girls with disabilities often face challenges in accessing sexual and reproductive health services or information. What is the most significant systemic issue contributing to these challenges?",
        options: [
          "Families often restrict their movement, preventing access",
          "They lack access to appropriate information or services",
          "Healthcare providers are often unsensitised and infantilise girls and women with disabilities",
          "Hospitals are inaccessible, making it hard for women with disabilities to reach services",
          "They have all necessary services and information easily accessible to them"
        ],
        scores: [1, 2, 3, 2, 0],
        themes: ["disability", "autonomy"],
        explain: "Family restrictions, missing information and inaccessible buildings all matter. The deepest systemic barrier, though, is attitudinal: providers who are not sensitised and treat women with disabilities as children, which denies them agency over their own bodies."
      },
      {
        text: "Do you think the government is responsible for ensuring fairness for everyone?",
        options: [
          "Yes, the government must ensure equal rights and opportunities for all citizens",
          "No, people should look after themselves",
          "Yes, but only for those who are educated",
          "No, the government works only for the rich"
        ],
        scores: [3, 0, 0, 0],
        themes: ["equality"],
        explain: "The Directive Principles (Articles 38 and 39) direct the State to secure a social order based on justice and to reduce inequalities in income, status and opportunity."
      },
      {
        text: "What do you understand by social justice?",
        options: [
          "Punishing those who break the law",
          "Punishment by society for violating social norms",
          "Compensating social groups who have suffered historically",
          "Strictly following traditional practices"
        ],
        scores: [1, 0, 3, 0],
        themes: ["equality"],
        explain: "Social justice means correcting historical and structural injustice so that every group can take part as equals. Examples include reservations (Articles 15(4) and 16(4)) and protections for Scheduled Castes and Tribes (Article 46)."
      }
    ]
  },
  {
    id: "knowledge",
    title: "Knowledge",
    kicker: "Section 2",
    icon: "book",
    blurb: "Facts about the Preamble, Fundamental Rights and key laws.",
    keyLabel: "Correct answer",
    questions: [
      {
        text: "What does the term “sovereign” in the Preamble of the Indian Constitution mean?",
        options: [
          "India is ruled by a monarch",
          "India is free to make its own decisions without external interference",
          "India is ruled by foreign powers",
          "None of the above"
        ],
        scores: [0, 3, 0, 0],
        themes: ["preamble"],
        explain: "Sovereign means India is fully independent and makes its own internal and external decisions without control by any other country."
      },
      {
        text: "Which word in the Preamble represents the idea that every individual has the freedom to follow any religion and the State shall not favour or discriminate on the basis of religion?",
        options: ["Socialist", "Secular", "Democratic", "Republic"],
        scores: [0, 3, 0, 0],
        themes: ["preamble", "religion"],
        explain: "“Secular” was added to the Preamble by the 42nd Amendment (1976). It means the State has no religion of its own, treats all faiths equally, and protects every person's freedom of religion (Articles 25–28)."
      },
      {
        text: "The Preamble mentions India as a “Republic.” What does “Republic” mean?",
        options: [
          "India has a king as its head",
          "The head of the state is elected by the people",
          "The country is governed by the military",
          "The people are removed from decision-making"
        ],
        scores: [0, 3, 0, 0],
        themes: ["preamble", "democracy"],
        explain: "In a republic, the head of state is elected, not hereditary. India's President is elected by an electoral college made up of the people's elected representatives."
      },
      {
        text: "In which year was the Preamble of the Constitution adopted?",
        options: ["1947", "1950", "1949", "1975"],
        scores: [0, 0, 3, 0],
        themes: ["preamble"],
        explain: "The Constituent Assembly adopted the Constitution, including the Preamble, on 26 November 1949, now observed as Constitution Day. It came into force on 26 January 1950."
      },
      {
        text: "Which of the following is NOT mentioned in the Preamble of the Constitution?",
        options: ["Justice", "Liberty", "Authority", "Fraternity"],
        scores: [0, 0, 3, 0],
        themes: ["preamble"],
        explain: "The Preamble promises Justice, Liberty, Equality and Fraternity. “Authority” is not one of its ideals; in the Preamble, power comes from “We, the People”."
      },
      {
        text: "The Right to Equality ensures that:",
        options: [
          "Every individual is equal before the law",
          "Only men and women are treated equally",
          "People of the same religion are equal",
          "None of the above"
        ],
        scores: [3, 0, 0, 0],
        themes: ["rights", "equality"],
        explain: "Article 14 guarantees every person equality before the law and equal protection of the laws. It applies to everyone, not only citizens, and is not limited by gender or religion."
      },
      {
        text: "Under the Right to Freedom, which of the following is NOT included?",
        options: [
          "Freedom of speech and expression",
          "Freedom to own property",
          "Freedom to move freely throughout the country",
          "Freedom to form associations"
        ],
        scores: [0, 3, 0, 0],
        themes: ["rights", "expression"],
        explain: "The 44th Amendment (1978) removed the right to property from the Fundamental Rights. It is now a constitutional right under Article 300A, not part of the Right to Freedom (Article 19)."
      },
      {
        text: "The Right to Constitutional Remedies allows citizens to:",
        options: [
          "Appeal for government benefits",
          "Approach the court if their Fundamental Rights are violated",
          "Get free education from the government",
          "Demand equality from other countries"
        ],
        scores: [0, 3, 0, 0],
        themes: ["rights"],
        explain: "When Fundamental Rights are violated, Article 32 lets any person go directly to the Supreme Court (and Article 226 to a High Court). Dr. B.R. Ambedkar called it “the very soul of the Constitution”."
      },
      {
        text: "Which constitutional provision supports sex workers’ rights to dignified work?",
        options: [
          "Right to Equality",
          "Right against Exploitation",
          "Right to Life and Personal Liberty",
          "All of the above"
        ],
        scores: [1, 1, 1, 3],
        themes: ["rights", "gender"],
        explain: "Sex workers are entitled to equality (Article 14), protection from exploitation and trafficking (Article 23) and a life with dignity (Article 21). The Supreme Court affirmed their right to dignity in Budhadev Karmaskar v. State of West Bengal (2022)."
      },
      {
        text: "What does the Right to Equality say about discrimination?",
        options: [
          "The government can discriminate based on religion or caste",
          "No person can be discriminated against except for purposes of affirmative action",
          "Discrimination is allowed everywhere",
          "Discrimination is not mentioned in the Constitution"
        ],
        scores: [0, 3, 0, 0],
        themes: ["rights", "equality"],
        explain: "Article 15 prohibits discrimination on grounds of religion, race, caste, sex or place of birth. Articles 15(4) and 16(4) allow special provisions for historically disadvantaged groups."
      },
      {
        text: "The term “Secular” in the Indian Constitution means:",
        options: [
          "The government favours one religion",
          "The government is against all religions",
          "The government treats all religions equally",
          "Religion has got no role to play in India"
        ],
        scores: [0, 0, 3, 0],
        themes: ["religion"],
        explain: "Indian secularism is not anti-religion. The State shows equal respect to all religions and keeps an equal distance from them, without favouring any one."
      },
      {
        text: "Which of these is part of the Rights of Persons with Disabilities Act in India?",
        options: [
          "Accessibility in public spaces and equal opportunity in education and employment",
          "Exclusive rights for men with disabilities only",
          "Special benefits only for those living in urban areas",
          "No provisions for disabled individuals"
        ],
        scores: [3, 0, 0, 0],
        themes: ["disability"],
        explain: "The Rights of Persons with Disabilities Act, 2016 requires accessible public spaces and transport, inclusive education, and reservation in education and government jobs for all persons with disabilities."
      },
      {
        scenario: "In a village in Bihar, most girls drop out of school after grade 8, and early marriages are prevalent. The community justifies this practice by citing poverty and the perceived advantage of a lower dowry for younger brides.",
        text: "Considering that early marriage violates constitutional values, such as the right to education and equality, which constitutional value is being violated in this scenario?",
        options: [
          "Right to Equality (Article 14)",
          "Right to Education (Article 21A)",
          "Right to Life and Personal Liberty (Article 21)",
          "Right to Non-Discrimination (Article 15)",
          "All of the above"
        ],
        scores: [1, 1, 1, 1, 3],
        themes: ["rights", "gender"],
        explain: "Early marriage and dropping out of school violate several rights at once: equality (Article 14), non-discrimination against girls (Article 15), a life with dignity (Article 21) and free and compulsory education (Article 21A). Child marriage is also illegal under the Prohibition of Child Marriage Act, 2006."
      }
    ]
  },
  {
    id: "values",
    title: "Values",
    kicker: "Section 3",
    icon: "scale",
    blurb: "Real-life dilemmas that test how constitutional values guide action.",
    keyLabel: "Constitutional perspective",
    questions: [
      {
        scenario: "The government needs to take a decision. Almost everyone in the government and 99% of the public support the decision and want it to be implemented quickly. But there is one tiny group of 6 people (in a country of 100 crore people) which is protesting against the decision.",
        text: "What should the government do?",
        options: [
          "Go with the majority opinion and take the decision that everyone wants",
          "Ignore the small group; it is too small to worry about",
          "Hear the arguments of the small group of 6 people to see if their arguments have any merit",
          "Put the protesting group in jail for trying to hamper the development and well-being of the majority of India"
        ],
        scores: [1, 0, 3, 0],
        themes: ["democracy", "expression"],
        explain: "Democracy is not only majority rule. A constitutional democracy protects the right of even the smallest minority to be heard, and their arguments may show something the majority missed."
      },
      {
        scenario: "The government has announced a new scheme for women and you need to hold a training for all village women on how to avail of the scheme. There are three different communities in the village. There is a hierarchy among the 3 communities, so women in the 3 communities cannot sit together.",
        text: "What do you do?",
        options: [
          "I will work with the women on understanding the importance of equality and breaking down hierarchies, encouraging them to attend the training together and sit with one another.",
          "To respect community sensitivities, I will organise separate training sessions for each group to ensure all women can access the information without conflict.",
          "I will hold a single training session and leave it to the women to decide whether they want to attend or not, without trying to address their divisions.",
          "I will prioritise the group that needs the scheme the most and focus on training them, while others can join if they wish."
        ],
        scores: [3, 1, 1, 0],
        themes: ["caste", "equality"],
        explain: "Separate sessions may seem practical, but they reinforce hierarchy. The constitutional value of fraternity, together with Article 17's abolition of untouchability, asks us to actively break down divisions, not accommodate them."
      },
      {
        scenario: "The government decided to restrict access to certain information-related websites. Several students claimed it infringed on their right to information and organised a peaceful protest.",
        text: "What should the government do as per the principles of the Constitution?",
        options: [
          "Put the students in jail for protesting against its decision, since the government does everything for the citizens' welfare",
          "Stay quiet and do its business",
          "Have a dialogue with the students to understand their perspective and do what is right as per the Constitution",
          "Launch a media campaign telling everyone how the students are anti-nationals"
        ],
        scores: [0, 0, 3, 0],
        themes: ["expression"],
        explain: "Peaceful assembly (Article 19(1)(b)) and expression, including access to information (Article 19(1)(a)), are Fundamental Rights. A constitutional government responds with dialogue, not punishment or stigma."
      },
      {
        scenario: "A social media platform decides to ban users who criticise government policies.",
        text: "What should you do as a citizen?",
        options: [
          "Do nothing. The social media platform has the right to do what it likes.",
          "Support the platform, as it is correct to ban users who unnecessarily criticise the government.",
          "Petition the platform to reverse the ban, as the ban is against the spirit of freedom of speech and expression.",
          "File a case against the users who criticise government policies."
        ],
        scores: [1, 0, 3, 0],
        themes: ["expression"],
        explain: "Criticising government policy is protected speech. Citizens can use peaceful, lawful means such as petitions to defend freedom of expression for everyone."
      },
      {
        scenario: "In a government school, a group of students from upper-caste families refuse to let Mohit, a Dalit student, sit with them in the classroom. They also object to him using the shared drinking water facility, claiming that his caste makes him “impure.” The teacher notices the situation but does not intervene, thinking it’s best not to challenge the traditions followed by the students.",
        text: "Which response best reflects constitutional values?",
        options: [
          "The upper-caste students are right in maintaining their traditions, as caste has been part of society for centuries.",
          "Mohit should find alternative ways to participate in school activities without disrupting the beliefs of the upper-caste students.",
          "Excluding Mohit based on his caste goes against the constitutional values of equality and fraternity and perpetuates systemic discrimination.",
          "Such discriminatory practices are unfortunate but are deeply rooted in tradition and cannot be addressed easily in schools."
        ],
        scores: [0, 0, 3, 1],
        themes: ["caste"],
        explain: "Article 17 abolishes untouchability and makes its practice a punishable offence. Article 15(2) guarantees equal access to public facilities such as drinking water. The teacher has a duty to step in."
      },
      {
        scenario: "In a village election for the Panchayat head, a woman named Malti wins an unreserved seat by a clear majority. However, some villagers argue that leadership is a man’s role and refuse to acknowledge her authority. They claim that having a woman leader will bring shame to their village and disrupt traditional norms.",
        text: "What should be done?",
        options: [
          "The villagers are right; leadership roles are not suitable for women, and tradition should be respected to maintain harmony.",
          "Malti should step down to prevent further conflict, even if she won the election fairly, as peace in the village is more important than her leadership.",
          "The villagers should be educated about gender equality, and efforts should be made to ensure Malti is able to perform her duties as the elected leader.",
          "The Panchayat should appoint a male “advisor” to help Malti with decision-making, ensuring that the villagers feel comfortable while Malti retains her position."
        ],
        scores: [0, 0, 3, 1],
        themes: ["gender", "democracy"],
        explain: "Malti won by a clear majority. Articles 14 and 15 guarantee gender equality, and Article 243D strengthens women's leadership in Panchayats. Appointing a male “advisor” would undermine her mandate."
      },
      {
        scenario: "In a village, two different religious communities have festivals falling on the same day. Both festivals are of great importance to their respective communities. The majority group insists on using the public space exclusively, refusing to share it with the minority group. The village sarpanch, belonging to the majority group, decides to grant them sole access to the space, arguing that it’s important to prioritise the larger group to avoid unrest and ensure his re-election.",
        text: "What should be done?",
        options: [
          "The sarpanch is right to prioritise the majority group, as keeping the larger population satisfied ensures peace and stability in the village.",
          "The public space should be made available to both groups so they can celebrate their festivals simultaneously, ensuring that the minorities and their religious sentiments are equally respected.",
          "Democracy means the rule of the majority, so the minority group should compromise and celebrate elsewhere to maintain harmony.",
          "The public space should be given to the majority group since they represent the cultural identity and collective voice of the village."
        ],
        scores: [0, 3, 0, 0],
        themes: ["religion"],
        explain: "Articles 25–28 guarantee every community's freedom of religion. Public spaces belong equally to everyone, and a sarpanch holds office for the whole village, not only for those who voted for them."
      },
      {
        scenario: "Two women, Priya and Anjali, have been living together as a couple in their village. Some villagers argue that their relationship is unnatural and demand they separate.",
        text: "What should be done?",
        options: [
          "The villagers are correct; Priya and Anjali should end their relationship for societal harmony.",
          "Priya and Anjali should be supported, as their relationship aligns with their constitutional right to freedom of choice and privacy.",
          "They should be asked to leave the village to avoid creating conflict.",
          "The government should pass a law criminalising same-sex relationships."
        ],
        scores: [0, 3, 0, 0],
        themes: ["autonomy"],
        explain: "Since Navtej Singh Johar (2018), consensual same-sex relationships have been protected by the rights to equality, dignity and privacy (Articles 14, 15 and 21). The State and the community must protect them, not punish them."
      },
      {
        scenario: "Priya, a young woman from a higher caste, marries a man from a lower caste. Her father, who disapproves of the marriage, disowns her and refuses to have any contact with her. The villagers, who strongly believe in caste-based traditions, are happy with the actions of Priya’s father. They argue that Priya’s actions will influence other young girls and threaten the social fabric of the village, and so they have taken the right action.",
        text: "What should be done?",
        options: [
          "Priya’s marriage should be nullified and the couple should be punished because this goes against the traditions of the village, and the villagers should isolate those who break caste boundaries to maintain order.",
          "Priya’s father should be supported in his decision, as caste-based norms are deeply rooted in tradition and should not be challenged.",
          "The villagers should be educated on the importance of caste equality, and support should be provided to Priya and her partner, as it is their right to marry each other regardless of caste.",
          "Priya should be asked to apologise and divorce her husband to avoid influencing other young girls in the village and preserve the village’s values."
        ],
        scores: [0, 0, 3, 0],
        themes: ["caste", "autonomy"],
        explain: "Adults have the right to marry a partner of their choice (Article 21). In Lata Singh v. State of U.P. (2006), the Supreme Court held that inter-caste couples must be protected from harassment and violence."
      },
      {
        scenario: "Sahil and Nikhil have been best friends for years and both worked hard to prepare for government exams. Sahil, who comes from a lower caste, qualifies for the exam using the reservation quota, while Nikhil, despite his hard work, does not qualify as his caste group does not get reservation. Nikhil’s father says that people from reserved categories get through the exams with lower scores and without merit. Nikhil, influenced by his father’s views, begins to hate Sahil and their friendship starts to weaken.",
        text: "What should be done?",
        options: [
          "Nikhil’s anger is justified because people from reserved categories are taking opportunities that others deserve based on merit.",
          "Sahil should feel guilty about his success, as Nikhil’s hard work deserves to be recognised over reservation-based achievements.",
          "Nikhil’s father should help Nikhil understand the importance of reservations in addressing historical inequalities and encourage him not to let hatred toward Sahil ruin their friendship.",
          "Nikhil’s father is right to say that reservations compromise merit, and Nikhil should try to convince Sahil to abandon the reservation system for fairness."
        ],
        scores: [0, 0, 3, 0],
        themes: ["caste", "equality"],
        explain: "Reservations (Articles 15(4) and 16(4)) exist to correct centuries of exclusion. Understanding this and valuing fraternity protects both fairness and friendship."
      },
      {
        scenario: "In a government hospital, a Dalit woman arrives for treatment, but despite having arrived earlier, she is told that there are no available beds in the ward. Meanwhile, an upper-caste woman arrives later and is immediately admitted to a bed, with the doctor paying her more attention and offering her better care. The Dalit woman protests, pointing out the unfair treatment.",
        text: "Which response best reflects constitutional values?",
        options: [
          "The hospital staff is right to prioritise the upper-caste woman, as it is important to maintain a certain standard of care for patients based on their socio-economic background.",
          "The Dalit woman should accept the situation, as this is a common practice in the hospital, and she should not make a fuss about it.",
          "The hospital should immediately investigate the issue and ensure that all patients, regardless of their caste, are treated equally and fairly.",
          "The hospital should have a separate ward for Dalit women to avoid such situations and maintain smooth functioning."
        ],
        scores: [0, 0, 3, 0],
        themes: ["caste"],
        explain: "Article 15 prohibits discrimination in access to public services, and Article 21 includes the right to health. A separate ward would be untouchability in another form (Article 17)."
      }
    ]
  },
  {
    id: "judgement",
    title: "Judgement",
    kicker: "Section 4",
    icon: "spark",
    blurb: "Choices and trade-offs between competing priorities.",
    keyLabel: "Constitutional perspective",
    questions: [
      {
        text: "If you had to choose a government, which one would you choose?",
        options: [
          "A government that prioritises my religion and cultural identity.",
          "A government that works for the welfare of all communities equally.",
          "A government that focuses only on creating jobs and economic growth.",
          "A government that upholds traditional values and national pride above all."
        ],
        scores: [0, 3, 1, 0],
        themes: ["democracy", "equality"],
        explain: "The Constitution promises justice, liberty, equality and fraternity to all. A government that serves every community equally keeps that promise."
      },
      {
        text: "Which is better?",
        options: [
          "Freedom of expression, even if it includes criticism of the government.",
          "Freedom of expression, but criticism of the government should not be allowed.",
          "Freedom of expression only when it aligns with national interest.",
          "Freedom of expression should depend on the person’s role in society."
        ],
        scores: [3, 0, 1, 0],
        themes: ["expression"],
        explain: "Criticising the government is a legitimate part of free expression under Article 19(1)(a). A healthy democracy depends on it."
      },
      {
        text: "What is more important for the country?",
        options: [
          "Equality for all citizens, even if some traditions are challenged.",
          "Protecting traditions, even if it creates inequalities.",
          "Balancing equality and traditions equally without conflict.",
          "Focusing on economic development while ignoring these issues."
        ],
        scores: [3, 0, 1, 0],
        themes: ["equality"],
        explain: "Where a tradition creates inequality, the Constitution puts equality and dignity first. Article 13 makes any law, including a custom with the force of law, void if it violates Fundamental Rights."
      },
      {
        text: "Who should the law protect more?",
        options: [
          "The weaker sections of society who face discrimination.",
          "Everyone equally, without giving any special preference.",
          "Those who contribute the most to the economy.",
          "The majority population, as they represent the nation’s identity."
        ],
        scores: [3, 2, 0, 0],
        themes: ["equality"],
        explain: "Formal equality alone can lock existing disadvantage in place. The Constitution's idea of substantive equality asks the law to pay special attention to those who face discrimination (Articles 15(4), 16(4) and 46)."
      },
      {
        scenario: "Manoj's father, a government employee, engaged in corruption so that he could spend a lot of money on his child's education.",
        text: "How would you evaluate his actions?",
        options: [
          "His actions, though corrupt, were motivated by a desire to give his child a better future, which is understandable in a system that may seem unfair.",
          "Corruption is never acceptable, and regardless of his intentions, his actions undermine the integrity of the system and harm society as a whole.",
          "While his actions were wrong, the systemic corruption and lack of access to quality education may have led him to make these choices out of desperation.",
          "His actions reflect the larger issue of inequality and corruption in society, but it’s important to consider how societal pressures and limited opportunities may have influenced his decision."
        ],
        scores: [0, 3, 2, 1],
        themes: ["democracy"],
        explain: "Good intentions do not make corruption acceptable. It diverts public resources, deepens inequality and weakens trust in institutions, harming the very system that should serve all children."
      }
    ]
  }
];
