let userInput: unknown;
let userName: string;

userName = 'Name';

userInput = 5;
userInput = 'TEST';

if (typeof userInput === 'string') {
    userName = userInput;
}

function genError(message: string, code: number): never {
    throw {message, errorCode: code};
}

const res = genError('Hey from Error!', 500);





