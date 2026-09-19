# Constitutional Literacy Assessment

A web-based constitutional literacy assessment by **[Dialogues on Democracy & Development](https://www.dialoguesondemocracy.org/)**.

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

## Editing questions

All questions, per-option scores, themes and explanations live in [`js/questions.js`](js/questions.js).

## Running locally

It is a static site with no build step:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
