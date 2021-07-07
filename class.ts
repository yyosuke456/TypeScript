class Person {
  readonly id: number = 22;
  constructor(readonly name: string, protected age: number) {// protectedにすると継承先でも使える。
  }// public, privateをつけることで初期化が省略できる。

  incrementAge() {
    this.age += 1;
  }
  //クラスメソッド
  greeting(this: Person) {//thisをより厳しく制限
    console.log(`hello, my name is ${this.name}. I am ${this.age} years old`);
  }
}

const quill = new Person('Quill', 38);
console.log(quill);

const anontherQuill = {
  name: 'anotherQuill',
  anotherGreeting: quill.greeting()
}
quill.greeting();
quill.incrementAge();
quill.greeting();

class Teacher extends Person {
  get subject(): string {
    if (!this._subject) {
      throw new Error('There is no subject');
    }
    return 'Music';
  }
  set subject(value) {
    if (!value) {
      throw new Error('There is no subject');
    }
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);// constructor使いたいならかならずsuper
  }
  greeting() {
    console.log(`hello, my name is ${this.name}. years old, and I teach ${this.subject}`);
  }
}

const mike = new Teacher('Mike', 33, '');
console.log(mike.subject);