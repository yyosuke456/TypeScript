type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

// type EngineerBlogger = Engineer & Blogger;// ↓同じ
interface EngineerBlogger extends Engineer, Blogger {}
const michel : EngineerBlogger = {
  name: 'michel',
  role: 'back-end',
  follower: 100
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;// numberになる

// type guard
function toUpperCase(x: string | number){
  if(typeof x === 'string'){
    return x.toUpperCase();
  }else{
    return '';
  }
}

type NomadoWorker = Engineer | Blogger;
function describeProfile(nomadoWorker: NomadoWorker){
  console.log(nomadoWorker.name);// nameにだけアクセスできる
  if('role' in nomadoWorker){
    console.log(nomadoWorker.role);// roleにアクセスできる
  }
  if('follower' in nomadoWorker) {
    console.log(nomadoWorker.follower);
  }
}

class Dog {
  kind: 'dog' = 'dog';// リテラル型でタグを付ける
  speak(){
    console.log('bow-bow');
  }
}

class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet');
  }
  fly(){
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch(pet.kind){
    case 'bird':
      pet.fly();
  }
  if(pet instanceof Bird) {
    pet.fly();
  }
}

// 2通りの書き方がある
const input = <HTMLInputElement>document.getElementById('input')!;// jsx使う場合はこちらは使わないほうがわかりやすい
const input2 = document.getElementById('input') as HTMLInputElement;

input.value = 'initial input value';
input2.value = 'initial input value';
(document.getElementById('input') as HTMLInputElement).value = 'initial input value';

interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: 'Bill',
  role: 'data',
  fafa: 'fafa'
}

