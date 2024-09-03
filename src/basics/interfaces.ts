// type AddFunc = (a: number, b: number) => number;
interface AddFunc {
    (a: number, b: number): number;
}

let add: AddFunc;

add = (a, b) => a + b;

interface Named {
    name?: string;
    outputName?: string;
}

interface Age2 {
    age: number;
}

interface Greetable extends Named, Age2 {
    // several extends
    name?: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Greetable;

class Person implements Greetable {
    name?: string;
    constructor(public age: number, n?: string) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + this.name);
            return;
        }
        console.log('HI');
    }
}

user1 = new Person(30);
// user1.name = 'qwe';

user1.greet('Hi, there - ');
