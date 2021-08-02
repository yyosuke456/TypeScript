type Engineer = {
  kind: 'engineer';
  name: string;
  role: string;
}

type Blogger = {
  kind: 'blogger';
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
havePet({speak() {console.log('hello')}, fly() {console.log('not fly')}});// Birdのインスタンスじゃないのでspeakからflyは呼ばれない
