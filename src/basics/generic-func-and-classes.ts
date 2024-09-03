// GENERICS
// const names: Array<string> = ['Vasyl', 'Vika'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('DONE !');
//     }, 2000);
// });

// promise.then((data) => {
//     data.split(' ');
// });
// END

// Type constraints ! `extends object`
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
// console.log(merge({ a: '1' }, { b: 3 }));
const mergedObj = merge({ name: 'Vasyl' }, { age: 3 });
console.log(mergedObj.name);

interface Lengthy {
    length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elem.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndPrint('Hi there!'));
console.log(countAndPrint(['123', '345']));
// console.log(countAndPrint(1));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value' + obj[key];
}
extractAndConvert({ name: 1 }, 'name');

// GENERIC CLASSES
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('1');
textStorage.addItem('2');
textStorage.addItem('3');
textStorage.removeItem('2');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Vas' });
// objStorage.addItem({ name: 'Q' });
// objStorage.removeItem({ name: 'Vas' });
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Vas', 'Test'];
// names.push('123');
