// intersection types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

//interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Vasyl',
    privileges: ['create'],
    startDate: new Date(),
};

// UNION TYPES
type Combinable = string | number;
type Numeric = number | boolean;

// INTERSECTIONS
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    // type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('qwe', 'ert');
console.log(add('a', 3));
console.log(add(1, 3));

const fetchedUserData = {
    id: '1',
    name: 'Vasyl',
    job: {
        title: 'CEO',
        description: 'My own company',
    },
};
// OPTIONAL CHAINING
console.log('--- fetchedUserData: ', fetchedUserData?.job?.title);

// NULLISH COALESCING check on null or undefined
const userInput = '';
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

//

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate:' + emp.startDate);
    }
    console.log('Name: ' + emp.name);
}
printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...');
    }
    loadCargo(amount: number) {
        console.log('loading cargo ... ' + amount);
    }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);

type q = number | string | boolean;
type w = object;

type e = q & w;

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log(`Miving with speed: ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
moveAnimal({ type: 'horse', runningSpeed: 1000 });

// const userInputElement = <HTMLInputElement>(
//     document.getElementById('user-input')
// );
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// { email: 'Not valid email', username: 'must start from character'}
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not valid email',
    username: 'Must start from a capital character',
};
