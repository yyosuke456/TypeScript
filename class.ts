class Person {
  name: string;
  constructor(iniitName: string){
    this.name = iniitName;
  }

  //クラスメソッド
  greeting() {
    console.log(`hello, my name is ${this.name}`);
  }
}

const quill = new Person('Quill');
console.log(quill);

const anontherQuill = new Person('Quill');
quill.greeting();