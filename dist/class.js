"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 22;
    } // public, privateをつけることで初期化が省略できる。
    incrementAge() {
        this.age += 1;
    }
    //クラスメソッド
    greeting() {
        console.log(`hello, my name is ${this.name}. I am ${this.age} years old`);
    }
}
const quill = new Person('Quill', 38);
console.log(quill);
const anontherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greeting()
};
quill.greeting();
quill.incrementAge();
quill.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age); // constructor使いたいならかならずsuper
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return 'Music';
    }
    greeting() {
        console.log(`hello, my name is ${this.name}. years old, and I teach ${this.subject}`);
    }
}
const mike = new Teacher('Mike', 33, 'Math');
console.log(mike.subject);
//# sourceMappingURL=class.js.map