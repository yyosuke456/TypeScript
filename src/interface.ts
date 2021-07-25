//type addFunc = (num1: number, num2: number) => number;
interface addFunc{
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable{
  name: string;
  nickName?: string;
}

const nameable : Nameable = {
  name: 'mike',// nickNameがなくてもエラーにならない
}

interface Human extends Nameable {
  readonly name: string;
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
//user.name = 'aa';// readonlyなので代入不可

const tmpDeveloper = {
  name: 'Quill',// readonlyにする必要はない
  age: 38,
  experience: 8,
  greeting(message: string){
    console.log(message)
  }
}
const tmpUser: Human = tmpDeveloper;// これもエラーにならない。
tmpDeveloper.name = 'aa';// readonlyの影響は受けない

