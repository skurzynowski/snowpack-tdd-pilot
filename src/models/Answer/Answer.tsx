
export class AnswerStore {
  id: string;
  correct: boolean;
  value: string;

  constructor({id, correct, value}:{id: string, correct: boolean, value: string}) {
    this.id = id;
    this.correct = correct;
    this.value = value;
  }
}