interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number){};
  greeting(message: string){
    console.log(message)
  }
}

const user: Human = new Developer('Quill', 38, 8);// Human型で定義できる。
user.age;// Human型なのでuser.experienceは呼べない。構造的部分型

