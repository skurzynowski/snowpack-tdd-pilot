
export class PointerStore {
  position: number = 0;

  moveForward(step: number){
    this.position += step;
  }

  moveBackward(step: number){
    this.position -= step;
  }
}