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

function toUpperCase(x: string): string;// 関数のオーバーロード
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number{
  if(typeof x === 'string'){
    return x.toUpperCase();
  }else{
    return '';
  }
}
const upperHello = toUpperCase('Hello');

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

console.log(designer.notExistField);// 存在しないものを指定してもエラーにならない。

interface DownloadedData {
  id: number;
  user?: {
    name?: {
    first: string;
    last: string;
    }
  }
}

const downloadedData: DownloadedData = {
  id: 1
}

console.log(downloadedData.user?.name?.first);// undefinedの場合にもエラーを防げる。

const userData = downloadedData.user ?? 'no-user';// undefined, nullならno-user
const userData2 = downloadedData.user || 'no-user';//空文字でもno-userになる。

type id = DownloadedData["id"];
let target: string = 'hello';
let source: 'hello' = 'hello';
target =  source;
// source = target;// 逆は不可

enum Color {
  RED,
  BLUE
}

let targetColor = Color.RED;
let sourceColor = 100;
targetColor = sourceColor;// enumにnumberは入れられる。
sourceColor = targetColor;// numberにenumは入れられる。

let targetFunc = function(a: string, b: string){}
let sourceFunc = function(a: string){}
targetFunc = sourceFunc;// 引数が多い分は無視するので可
// sourceFunc = targetFunc;// 引数が足りないのは不可