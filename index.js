"use strict";
var hello = 'hello';
console.log(hello);
// 型がわかることでドキュメントとしての側面を持つ
function add(a, b) {
    return a + b;
}
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: 'jack',
    age: 21
};
var person2 = {
    name: 'jack',
    age: 21
};
//console.log(person2.age);→エラー
var person3 = {
    name: {
        first: 'jack',
        last: 'mychel'
    },
    age: 21
};
// 配列
var fruits = ['Apple', 'Banana', 'Grape'];
//fruits.push(5)→エラー
var fruits2 = ['Apple', 'Banana', 'Grape', 1];
var fruits3 = ['Apple', 'Banana', 'Grape', 1];
// tapple
// かならず文字列、数字、boolean
var book = ['business', 1500, false]; //これだと文字列、数字、booleanが入れられる配列
var book2 = ['business', 1500, false];
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
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
coffee.size = CoffeeSize.TALL; //CoffeeSizeしか入らない
// any型
var anything = true;
anything = 'hello';
anything = ['hello', 3, false];
var banana = 'banana';
banana = anything; //  入れれちゃう。any型になるとjavascriptの世界に戻ってしまう。なるべく使わない。
// Union型 複数の型を持てる
var unionType = 10;
unionType = 'union';
unionType.toUpperCase(); // stringが入っているときはエラーにならない
var unionTypes = [21, 'union'];
// literal型
var apple = 'apple'; // 'apple'しか代入できない
var apple2 = 0; //0しか代入できない。constだとliteralになる
var clothSize = 'small'; // unionとliteral組合せると便利
var size1 = 'small';
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
var anotherAdd = add;
anotherAdd(2, 3);
var anotherAdd2 = add;
var anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
// 右辺、左辺どちらかに型定義があればいい
// callback関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型
var unknownInput;
var anyInput;
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
