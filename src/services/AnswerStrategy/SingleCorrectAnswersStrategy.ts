import type { Answer } from "src/types/Interfaces/Answer";

const isCorrect = (answer: Answer) => answer.correct

export class SingleCorrectAnswersStrategy {
    static createFrom({ answers, limit }: { answers: Answer[], limit: number }): Answer[] {
        let correctCounter = 0;
        return answers.filter(
            el => {
                if (isCorrect(el)) {
                    if (correctCounter < 1) {
                        correctCounter++;
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return true;
                }
            }).slice(0, limit)
    }

    static mockAnswers: Answer[] = [true, true, false, false, false, false, false, false, false]
        .map((el, key) => ({ id: String(key), value: el ? "good" : "bad", correct: el }));
}