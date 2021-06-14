class Person {
  name: string;
  constructor(iniitName: string){
    this.name = iniitName;
  }
}

const quill = new Person('Quill');
console.log(quill);