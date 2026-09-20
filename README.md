# Democracy & Constitutional Literacy

Free, browser-based learning tools by **[Dialogues on Democracy & Development](https://www.dialoguesondemocracy.org/)**.

**Live site:** https://sushant4949.github.io/DoDAssessment/

| Page | What it is |
|---|---|
| `index.html` | Home hub with a tile for each resource |
| `assessment.html` | The constitutional literacy assessment (45 questions, personal report) |
| `games.html` | The Preamble crossword |
| `constitution.html` | The story of the Constitution: journey, people, amendments, architecture |

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

## The Preamble crossword

A 20×20 grid built from 27 words that appear in the Preamble, from SOVEREIGN to FRATERNITY. It has a timer, progress tracking, check and reveal helpers, a peek at the Preamble itself, and saves progress in the browser. The layout was generated once and lives in [`js/crossword-data.js`](js/crossword-data.js); the clues sit alongside each answer there.

## Our Constitution

- A journey map of nine moments between December 1946 and January 1950, each expanding on tap
- Eighteen members of the Constituent Assembly, filterable by Drafting Committee, women members, voices from the margins and guiding hands
- An amendments timeline of nineteen landmark amendments, from the First (1951) to the 106th (2023)
- The architecture of the text: Fundamental Rights, Directive Principles, Fundamental Duties and the division of powers

All of the content lives in [`js/constitution.js`](js/constitution.js).

## Editing content

| To change | Edit |
|---|---|
| Assessment questions, scores, themes, explanations | [`js/questions.js`](js/questions.js) |
| Crossword answers and clues | [`js/crossword-data.js`](js/crossword-data.js) |
| Constitution journey, members, amendments | [`js/constitution.js`](js/constitution.js) |
| Colours, type, shared furniture | [`css/base.css`](css/base.css) |

## Design

The brand colour (`#6699ff`), the Barlow Semi Condensed type and the logos come from the DoD website. The outlined JUSTICE / LIBERTY / EQUALITY / FRATERNITY lettermark and the line-art portrait of Dr. B.R. Ambedkar (`assets/ambedkar-outline.svg`, drawn in SVG for this site) run across the page headers.

## Running locally

It is a static site with no build step:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
