let hello: string = 'hello';
console.log(hello);

// 型がわかることでドキュメントとしての側面を持つ
function add(a: number, b: number) : number {
  return a + b;
}

let hasValue: boolean = true;
let count: number = 10;
let float:number = 3.14;
let negative: number = - 0.12;
let single: string  = 'hello';
let double: string = "hello";
let back: string = `hello`;


const person: {
  name: string,
  age: number} =  {
  name: 'jack',
  age: 21
}

const person2: object =  {
  name: 'jack',
  age: 21
}
//console.log(person2.age);→エラー

const person3 = {
  name: {
    first: 'jack',
    last: 'mychel'
  },
  age: 21
}

// 配列

const fruits: string[] =  ['Apple', 'Banana', 'Grape'];
//fruits.push(5)→エラー
const fruits2 =  ['Apple', 'Banana', 'Grape', 1];
const fruits3: any[] =  ['Apple', 'Banana', 'Grape',  1];

// tapple
// かならず文字列、数字、boolean
const book = ['business', 1500,  false];//これだと文字列、数字、booleanが入れられる配列
const book2: [string, number, boolean] = ['business', 1500,  false];
book2.push(1);//これはできちゃう。初期値は厳しいけど、その後はゆるい。
//console.log(book(3))// でも参照はできないので、問題ない


//Enum

enum CoffeeSize {
  SHORT = 'short',
  TALL = 'tall',
  GRANDE = 'grande',
  VENTI = 'venti'
}
const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}

coffee.size = CoffeeSize.TALL;//CoffeeSizeしか入らない


// any型
let anything: any = true;
anything = 'hello';
anything = ['hello', 3, false];
let banana = 'banana';
banana = anything;//  入れれちゃう。any型になるとjavascriptの世界に戻ってしまう。なるべく使わない。

// Union型 複数の型を持てる
let unionType: number | string = 10;
unionType = 'union';
unionType.toUpperCase();// stringが入っているときはエラーにならない

let unionTypes: (number | string)[] = [21, 'union'];

