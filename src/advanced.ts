type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const michel : EngineerBlogger = {
  name: 'michel',
  role: 'back-end',
  follower: 100
}

type tmp = string & number;