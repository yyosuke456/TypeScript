class Person {
  readonly id: number = 22;
  constructor(public readonly name: string, private age: number){
  }// public, privateをつけることで初期化が省略できる。

  incrementAge(){
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

class Teacher extends Person{
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  greeting(this: Teacher) {//thisをより厳しく制限
    console.log(`hello, my name is ${this.name}. I am ${this.age} years old, and I teach ${this.subject}`);
  }
}

const teacher = new Teacher('Mike', 33);