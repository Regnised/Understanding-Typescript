{
  function add2(
    num1: number,
    num2: number,
    showResult: boolean,
    printPhrase: string
  ) {
    if (showResult) {
      const res = num1 + num2;
      console.log(printPhrase + res);
    } else {
      return num1 + num2;
    }
  }

  const num1 = 2;
  const num2 = 3;
  const printResult = true;
  const printPhrase = 'Result is: ';

  const result = add2(num1, num2, printResult, printPhrase);
}
