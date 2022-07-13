
export class TextStore {
    text: string = '';

    setText(text: string){
        this.text = text;
    }

    getText(){
      return  this.text;
    }
}