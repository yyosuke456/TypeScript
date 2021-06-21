class Person {
  name: string;
  constructor(iniitName: string){
    this.name = iniitName;
  }

  //クラスメソッド
  greeting(this: Person) {//偽物のパラメータthis。第一引数にだけとれる。正しくthisをつたえる
    console.log(`hello, my name is ${this.name}`);
  }
}

const quill = new Person('Quill');
console.log(quill);

const anontherQuill = {
  name: 'anotherQuill',
  anotherGreeting: quill.greeting()
}
quill.greeting();


