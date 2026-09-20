/* Constitution quiz — three levels, ten questions each.
   Each question: { q, options[], answer (index), explain } */
window.DOD_QUIZ = {
  easy: {
    label: "Easy",
    blurb: "The dates, names and ideas every citizen should know.",
    questions: [
      {
        q: "When did the Constitution of India come into force?",
        options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
        answer: 2,
        explain: "It was adopted on 26 November 1949 and came into force on 26 January 1950 — a date chosen because the Congress had declared Purna Swaraj on 26 January 1930."
      },
      {
        q: "Who chaired the Drafting Committee of the Constitution?",
        options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Sardar Vallabhbhai Patel"],
        answer: 1,
        explain: "Dr. B.R. Ambedkar chaired the seven-member Drafting Committee constituted on 29 August 1947, and is regarded as the principal architect of the Constitution."
      },
      {
        q: "Which day is observed as Constitution Day?",
        options: ["26 January", "15 August", "26 November", "14 April"],
        answer: 2,
        explain: "26 November marks the day in 1949 when the Constituent Assembly adopted the Constitution. It has been observed as Constitution Day since 2015."
      },
      {
        q: "With which words does the Preamble begin?",
        options: ["We, the People of India", "In the name of God", "We, the citizens of India", "India, that is Bharat"],
        answer: 0,
        explain: "“We, the People of India” places the source of all constitutional authority in the people themselves, not in a ruler or a legislature."
      },
      {
        q: "Who was the President of the Constituent Assembly?",
        options: ["Sachchidananda Sinha", "Dr. Rajendra Prasad", "Maulana Abul Kalam Azad", "C. Rajagopalachari"],
        answer: 1,
        explain: "Sachchidananda Sinha chaired the very first sitting as the oldest member. Dr. Rajendra Prasad was elected permanent President on 11 December 1946 and later became India's first President."
      },
      {
        q: "At what age can a citizen of India vote?",
        options: ["16", "18", "21", "25"],
        answer: 1,
        explain: "Article 326 guarantees universal adult franchise. The voting age was lowered from 21 to 18 by the 61st Amendment in 1988."
      },
      {
        q: "How many categories of Fundamental Rights does the Constitution guarantee today?",
        options: ["Four", "Five", "Six", "Seven"],
        answer: 2,
        explain: "Six: equality, freedom, against exploitation, freedom of religion, cultural and educational rights, and constitutional remedies. The right to property was removed from the list in 1978."
      },
      {
        q: "Which Article abolishes untouchability?",
        options: ["Article 14", "Article 17", "Article 21", "Article 32"],
        answer: 1,
        explain: "Article 17 abolishes untouchability and forbids its practice in any form; enforcing any disability arising out of it is a punishable offence."
      },
      {
        q: "The word “Republic” in the Preamble means that:",
        options: [
          "India has no government",
          "The head of State is elected, not hereditary",
          "India is ruled by the army",
          "Only landowners may vote"
        ],
        answer: 1,
        explain: "In a republic, the highest office is filled by election. India's President is elected by an electoral college of elected representatives, for a fixed term."
      },
      {
        q: "Free and compulsory education is a fundamental right for children of which ages?",
        options: ["3 to 10 years", "6 to 14 years", "5 to 16 years", "6 to 18 years"],
        answer: 1,
        explain: "Article 21A, inserted by the 86th Amendment in 2002, makes free and compulsory education a right for every child between six and fourteen."
      }
    ]
  },

  medium: {
    label: "Medium",
    blurb: "Amendments, articles and where the ideas came from.",
    questions: [
      {
        q: "Which amendment added the words “Socialist”, “Secular” and “Integrity” to the Preamble?",
        options: ["The 24th Amendment, 1971", "The 42nd Amendment, 1976", "The 44th Amendment, 1978", "The 52nd Amendment, 1985"],
        answer: 1,
        explain: "The 42nd Amendment, passed during the Emergency, is often called the mini-Constitution. It also added the Fundamental Duties in Part IVA."
      },
      {
        q: "Which Article did Dr. Ambedkar call “the heart and soul of the Constitution”?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        answer: 3,
        explain: "Article 32 gives every person the right to move the Supreme Court directly when a Fundamental Right is violated. Without it, the rights would be promises with no remedy."
      },
      {
        q: "The Directive Principles of State Policy were inspired by the constitution of which country?",
        options: ["Ireland", "The United States", "Canada", "France"],
        answer: 0,
        explain: "The Directive Principles came from the Irish constitution, which had in turn drawn on the Spanish one. The Fundamental Rights owe more to the United States."
      },
      {
        q: "How long did the Constituent Assembly take to frame the Constitution?",
        options: ["1 year, 6 months", "2 years, 11 months and 18 days", "4 years, 2 months", "5 years exactly"],
        answer: 1,
        explain: "Two years, eleven months and eighteen days, across 11 sessions and 165 days of sitting, between December 1946 and November 1949."
      },
      {
        q: "Who served as the Constitutional Adviser to the Constituent Assembly?",
        options: ["K.M. Munshi", "B.N. Rau", "Alladi Krishnaswami Ayyar", "T.T. Krishnamachari"],
        answer: 1,
        explain: "B.N. Rau, a civil servant and later a judge of the International Court of Justice, prepared the first draft of 243 articles that the Drafting Committee worked from."
      },
      {
        q: "The anti-defection law is contained in which Schedule?",
        options: ["The Seventh Schedule", "The Eighth Schedule", "The Ninth Schedule", "The Tenth Schedule"],
        answer: 3,
        explain: "The Tenth Schedule, added by the 52nd Amendment in 1985, disqualifies legislators who defect from the party on whose ticket they were elected."
      },
      {
        q: "Which Part of the Constitution contains the Fundamental Rights?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        answer: 1,
        explain: "Part III, Articles 12 to 35. Part IV holds the Directive Principles and Part IVA the Fundamental Duties."
      },
      {
        q: "Which Fundamental Right was removed from Part III and made a constitutional right instead?",
        options: ["The right to property", "The right to privacy", "The right to strike", "The right to work"],
        answer: 0,
        explain: "The 44th Amendment (1978) removed the right to property from the Fundamental Rights. It survives as a constitutional right under Article 300A."
      },
      {
        q: "Which amendments gave constitutional status to panchayats and municipalities?",
        options: ["The 52nd and 53rd", "The 61st and 62nd", "The 73rd and 74th", "The 86th and 87th"],
        answer: 2,
        explain: "The 73rd and 74th Amendments of 1992 created elected local government in villages and cities, with one-third of seats reserved for women."
      },
      {
        q: "Who is the constitutional head of the Indian State, and who exercises real executive power?",
        options: [
          "The Prime Minister is head; the President governs",
          "The President is head; the Council of Ministers exercises real power",
          "The Chief Justice is head; Parliament governs",
          "The President is head and exercises all power personally"
        ],
        answer: 1,
        explain: "Article 74 requires the President to act on the aid and advice of the Council of Ministers headed by the Prime Minister, which is answerable to the Lok Sabha."
      }
    ]
  },

  hard: {
    label: "Hard",
    blurb: "Landmark judgements, articles and the fine print.",
    questions: [
      {
        q: "In which case did the Supreme Court lay down the basic structure doctrine?",
        options: [
          "Golaknath v. State of Punjab (1967)",
          "Kesavananda Bharati v. State of Kerala (1973)",
          "Minerva Mills v. Union of India (1980)",
          "Maneka Gandhi v. Union of India (1978)"
        ],
        answer: 1,
        explain: "A thirteen-judge bench held that Parliament may amend any part of the Constitution but may not damage or destroy its basic structure."
      },
      {
        q: "Which judgement recognised privacy as a fundamental right under Article 21?",
        options: [
          "K.S. Puttaswamy v. Union of India (2017)",
          "Shreya Singhal v. Union of India (2015)",
          "Vishaka v. State of Rajasthan (1997)",
          "Indra Sawhney v. Union of India (1992)"
        ],
        answer: 0,
        explain: "A nine-judge bench held unanimously that privacy is intrinsic to life and personal liberty. The ruling underpinned later decisions on decriminalising same-sex relations."
      },
      {
        q: "Which case decriminalised consensual same-sex relations between adults?",
        options: [
          "Naz Foundation v. NCT of Delhi (2009)",
          "Suresh Kumar Koushal v. Naz Foundation (2013)",
          "Navtej Singh Johar v. Union of India (2018)",
          "Supriyo v. Union of India (2023)"
        ],
        answer: 2,
        explain: "In 2018 the Supreme Court read down Section 377, holding that criminalising consensual same-sex relations violated equality, dignity, privacy and expression."
      },
      {
        q: "Under Article 368, an amendment that affects the federal structure also needs:",
        options: [
          "A national referendum",
          "Ratification by the legislatures of at least half the states",
          "The consent of every state",
          "Approval by the Supreme Court"
        ],
        answer: 1,
        explain: "Such amendments need a special majority in Parliament and ratification by at least half the state legislatures — for instance, changes to the election of the President or to the Seventh Schedule."
      },
      {
        q: "Which Article provides for a proclamation of national emergency?",
        options: ["Article 352", "Article 356", "Article 360", "Article 365"],
        answer: 0,
        explain: "Article 352 covers national emergency; Article 356 is President's Rule in a state, and Article 360 is financial emergency. Since 1978 a national emergency requires “armed rebellion”, not mere “internal disturbance”."
      },
      {
        q: "Who calligraphed the original handwritten Constitution of India?",
        options: [
          "Nandalal Bose",
          "Prem Behari Narain Raizada",
          "Beohar Rammanohar Sinha",
          "Vasant Krishan Vaidya"
        ],
        answer: 1,
        explain: "Prem Behari Narain Raizada wrote out the English copy in flowing italic. Nandalal Bose and Beohar Rammanohar Sinha led the decoration, and Vasant Krishan Vaidya calligraphed the Hindi copy."
      },
      {
        q: "Article 44, a Directive Principle, asks the State to work towards:",
        options: [
          "A uniform civil code",
          "Prohibition of intoxicating drinks",
          "Free legal aid",
          "The organisation of village panchayats"
        ],
        answer: 0,
        explain: "Article 44 asks the State to endeavour to secure a uniform civil code. Prohibition is Article 47, free legal aid Article 39A and panchayats Article 40."
      },
      {
        q: "Which Article empowers the High Courts to issue writs?",
        options: ["Article 32", "Article 131", "Article 226", "Article 227"],
        answer: 2,
        explain: "Article 226 gives High Courts writ jurisdiction, which is wider than the Supreme Court's under Article 32 because it extends beyond Fundamental Rights to other legal rights."
      },
      {
        q: "The Ninth Schedule, which shields listed laws from challenge, was created by which amendment?",
        options: [
          "The First Amendment, 1951",
          "The Fourth Amendment, 1955",
          "The 25th Amendment, 1971",
          "The 39th Amendment, 1975"
        ],
        answer: 0,
        explain: "The First Amendment created the Ninth Schedule to protect land reform laws. In I.R. Coelho (2007) the Supreme Court held that laws placed there after 1973 can still be tested against the basic structure."
      },
      {
        q: "What did the 106th Amendment of 2023 provide for?",
        options: [
          "Ten per cent reservation for economically weaker sections",
          "One-third of seats for women in the Lok Sabha and state assemblies",
          "The Goods and Services Tax Council",
          "Constitutional status for the National Commission for Backward Classes"
        ],
        answer: 1,
        explain: "It reserves one-third of the seats in the Lok Sabha and the state legislative assemblies for women, to take effect after the next census and delimitation exercise."
      }
    ]
  }
};
