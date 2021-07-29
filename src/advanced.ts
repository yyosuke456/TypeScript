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
}