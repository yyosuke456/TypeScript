interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: string)
  greeting(message: string){
    console.log(message)
  }
}
