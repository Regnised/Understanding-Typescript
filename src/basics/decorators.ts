// CLASS DECORATOR

function Logger(logString: string) {
    console.log('logger factory');

    return function (constructor: Function) {
        console.log(`${logString} logging...`);
        console.log(constructor);
    };
}

// Returning a class in a Class decorator
function WithTemplate(template: string, hookId: string) {
    console.log('with template');

    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering tempate');

                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1> My Person Object</h1>', 'app')
class Person {
    name = 'Vasyl';

    constructor() {
        console.log(`Creating person object...`);
    }
}

const vas = new Person();
console.log(vas);

//-----------------

// DECORATOR for the PROPERTY
function Log(target: any, propertyName: string | symbol) {
    console.log(`Property decorator!`);
    console.log(target, propertyName);
}

// Accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(`Accessor decorator!`);
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// METHOD decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(`Method decorator!`);
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string, position: number) {
    console.log(`Parameter decorator!`);
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
        throw new Error('Price should be positive!');
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

//--- decorator invokes just one time , not in runtime
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = 'This is works!';
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// VALIDATION with decorators

interface ValidatorConfig {
    [prop: string]: {
        [validatableProp: string]: string[]; // required, positive
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    console.log('Required');
    console.log(target, propName);

    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required'],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive'],
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    console.log(objValidatorConfig);
    console.log(obj);

    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}
const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    console.log(registeredValidators);

    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});
