# Democracy & Constitutional Literacy

Free, browser-based learning tools by **[Dialogues on Democracy & Development](https://www.dialoguesondemocracy.org/)**.

**Live site:** https://sushant4949.github.io/DemocracyResourceCenter/

| Page | What it is |
|---|---|
| `index.html` | Home hub with a tile for each resource |
| `assessment.html` | The constitutional literacy assessment (45 questions, personal report) |
| `games.html` | Games hub |
| `crossword.html` | The Preamble crossword — easy, medium and hard |
| `quiz.html` | The Constitution quiz — easy, medium and hard |
| `constitution.html` | The story of the Constitution: journey, people, amendments, architecture |
| `developer.html` | About Sushant Kumar, who built this |

Everything is static HTML, CSS and vanilla JavaScript — no build step, no framework, no backend.

## The assessment

Participants answer 45 multiple-choice questions in four sections and get a personalised report at the end.

| Section | Questions | What it explores |
|---|---|---|
| Understanding | 16 | How people think about democracy, equality and rights in everyday life |
| Knowledge | 13 | Facts about the Preamble, Fundamental Rights and key laws |
| Values | 11 | Real-life dilemmas that test how constitutional values guide action |
| Judgement | 5 | Choices and trade-offs between competing priorities |

## Scoring

Many questions have no single right or wrong answer, so every option is scored by how closely it reflects Indian constitutional values (justice, liberty, equality, fraternity and dignity):

- **3** Best response
- **2** Mostly aligned
- **1** Partly aligned
- **0** Not aligned

Factual Knowledge questions are right or wrong. The exception is "All of the above" questions, where picking one correct part earns partial credit.

## The report

- An overall alignment score and a level: Beginning the Journey, Emerging Understanding, Informed Citizen or Constitutional Champion
- A personalised summary that compares how well the participant **knows** the Constitution (Knowledge) with how they **apply** it (Values + Judgement), plus their everyday **understanding** of it
- Scores by theme: caste, gender, religion, disability, free expression, bodily autonomy and more
- A question-by-question review that shows the best response and the constitutional reasoning (Articles and landmark judgements)
- A "Save as PDF" button

Answers are saved only in the participant's own browser, so nothing is sent to a server.

## Games

**Preamble crossword** — three levels, every answer a word from the Preamble: easy (6 words, 10×10), medium (12 words, 16×11) and hard (24 words, 17×22). Timer, progress, check and reveal helpers, a peek at the Preamble, and progress saved per level in the browser. Layouts and clues live in [`js/crossword-data.js`](js/crossword-data.js).

**Constitution quiz** — three levels of ten questions each: the basics, amendments and articles, and landmark judgements. Every answer is followed by the reasoning. Questions live in [`js/quiz-data.js`](js/quiz-data.js).

## Our Constitution

- A journey map of nine dated moments between December 1946 and January 1950, each expanding on tap, most with a photograph from the time
- Eighteen members of the Constituent Assembly with portraits and links to their Wikipedia pages, filterable by Drafting Committee, women members, voices from the margins and guiding hands
- An amendments timeline of nineteen landmark amendments, from the First (1951) to the 106th (2023)
- A gallery of eleven historical photographs with a lightbox, including the Drafting Committee of 1947 and the Assembly in session
- All forty recordings from the Constituent Assembly Debates playlist (footage from the Prasar Bharati Archives), six at a time, playing in place
- The architecture of the text: Directive Principles, Fundamental Duties and the division of powers
- A Trivia band that slides through facts from the Press Information Bureau factsheet

Content lives in [`js/constitution.js`](js/constitution.js); image captions and credits in [`js/constitution-media.js`](js/constitution-media.js).

## Images and credits

Historical images come from Wikimedia Commons and are public domain or freely licensed. The session photographs on the home page, the assessment and the closing band of Our Constitution are DoD's own, drawn from its social media posts, and follow the house style: desaturated photography under a brand-blue wash. Each page carries its own credits list with the licence and author of every image, and the portrait of Dr. B.R. Ambedkar used in the page headers is by [Suthir](https://commons.wikimedia.org/wiki/File:B._R._Ambedkar.svg), CC BY-SA 4.0.

## Editing content

| To change | Edit |
|---|---|
| Assessment questions, scores, themes, explanations | [`js/questions.js`](js/questions.js) |
| Crossword layouts and clues | [`js/crossword-data.js`](js/crossword-data.js) |
| Quiz questions | [`js/quiz-data.js`](js/quiz-data.js) |
| Constitution journey, members, amendments | [`js/constitution.js`](js/constitution.js) |
| Video list (ids, titles, durations) | [`js/videos-data.js`](js/videos-data.js) |
| Colours, type, shared furniture | [`css/base.css`](css/base.css) |

## Design

The brand colour (`#6699ff`), the Barlow Semi Condensed type and the logos come from the DoD website. The outlined JUSTICE / LIBERTY / EQUALITY / FRATERNITY lettermark and the stencil portrait of Dr. B.R. Ambedkar run across the page headers.

## Running locally

It is a static site with no build step:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
