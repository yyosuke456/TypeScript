var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.id = 22;
    } // public, privateをつけることで初期化が省略できる。
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    //クラスメソッド
    Person.prototype.greeting = function () {
        console.log("hello, my name is " + this.name + ". I am " + this.age + " years old");
    };
    return Person;
}());
var quill = new Person('Quill', 38);
console.log(quill);
var anontherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greeting()
};
quill.greeting();
quill.incrementAge();
quill.greeting();
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject');
            }
            return 'Music';
        },
        set: function (value) {
            if (!value) {
                throw new Error('There is no subject');
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.greeting = function () {
        console.log("hello, my name is " + this.name + ". years old, and I teach " + this.subject);
    };
    return Teacher;
}(Person));
var mike = new Teacher('Mike', 33, '');
console.log(mike.subject);
