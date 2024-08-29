type Combinable = number | string;
type resType = 'as-number' | 'as-text';

function combine (
    in1: Combinable, 
    in2: Combinable, 
    resultType: resType  
) {
    let result;
    if (typeof in1 === 'number' && typeof in2 === 'number' || resultType === 'as-number') {
        result = +in1 + +in2;
    }
    else {
        result = in1.toString() + in2.toString();
    }
    
    return result
}

const combinedNumbers = combine(1, 3, 'as-number');
console.log(combinedNumbers);

const combinedStringNumbers = combine(1, '3', 'as-number');
console.log(combinedStringNumbers);

const combinedNames = combine('qwe', 'das', 'as-text');
console.log(combinedNames);
