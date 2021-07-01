"use strict";
let hello = 'hello';
console.log(hello);
// 型がわかることでドキュメントとしての側面を持つ
function add(a, b) {
    return a + b;
}
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: 'jack',
    age: 21
};
const person2 = {
    name: 'jack',
    age: 21
};
//console.log(person2.age);→エラー
const person3 = {
    name: {
        first: 'jack',
        last: 'mychel'
    },
    age: 21
};
// 配列
const fruits = ['Apple', 'Banana', 'Grape'];
//fruits.push(5)→エラー
const fruits2 = ['Apple', 'Banana', 'Grape', 1];
const fruits3 = ['Apple', 'Banana', 'Grape', 1];
// tapple
// かならず文字列、数字、boolean
const book = ['business', 1500, false]; //これだと文字列、数字、booleanが入れられる配列
const book2 = ['business', 1500, false];
book2.push(1); //これはできちゃう。初期値は厳しいけど、その後はゆるい。
//console.log(book(3))// でも参照はできないので、問題ない
//Enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "short";
    CoffeeSize["TALL"] = "tall";
    CoffeeSize["GRANDE"] = "grande";
    CoffeeSize["VENTI"] = "venti";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
coffee.size = CoffeeSize.TALL; //CoffeeSizeしか入らない
// any型
let anything = true;
anything = 'hello';
anything = ['hello', 3, false];
let banana = 'banana';
banana = anything; //  入れれちゃう。any型になるとjavascriptの世界に戻ってしまう。なるべく使わない。
// Union型 複数の型を持てる
let unionType = 10;
unionType = 'union';
unionType.toUpperCase(); // stringが入っているときはエラーにならない
let unionTypes = [21, 'union'];
// literal型
const apple = 'apple'; // 'apple'しか代入できない
const apple2 = 0; //0しか代入できない。constだとliteralになる
let clothSize = 'small'; // unionとliteral組合せると便利
let size1 = 'small';
// 関数に型をつける　返却値は型推論が効く
function myAdd(num1, num2) {
    return num1 + num2;
}
// void undefinedを返す。undefinedはreturn;をつければ使えるが、使わない
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
// 関数型
const anotherAdd = add;
anotherAdd(2, 3);
const anotherAdd2 = add;
const anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
// 右辺、左辺どちらかに型定義があればいい
// callback関数
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
// unknown型
let unknownInput;
let anyInput;
unknownInput = true;
unknownInput = 21;
unknownInput = 'heelo';
anyInput = 'hello';
anyInput = true;
// unknownは使うときanyより厳しい
if (typeof unknownInput === 'string') { // チェックしてから使う
}
//  never型 本当に何も返さない
function error(message) {
    throw new Error(message);
}
// エラーとか無限ループとかで使うらしい。よくわからない。
console.log(error('this is error'));
console.log('hello'.toUpperCase());
//# sourceMappingURL=index.js.map