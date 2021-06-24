class Person {
  constructor(public name: string, private age: number){
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

