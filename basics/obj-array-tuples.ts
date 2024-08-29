// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Vasyl',
//     age: 36,
//     hobbies: ['Sport', 'Cooking'],
//     role: [2, 'author']
// };
enum Role {
    READ_ONLY = 1,
    WRITE = 2
}
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: any
} = {
    name: 'Vasyl',
    age: 36,
    hobbies: ['Sport', 'Cooking'],
    role: Role.READ_ONLY
};

console.log(person);