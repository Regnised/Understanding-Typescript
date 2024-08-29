var userInput;
var userName;
userName = 'Name';
userInput = 5;
userInput = 'TEST';
if (typeof userInput === 'string') {
    userName = userInput;
}
function genError(message, code) {
    throw { message: message, errorCode: code };
}
genError('Hey from Error!', 500);
