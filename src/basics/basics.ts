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

  type Point2D = { x: number; y: number };
  type Point3D = { x: number; y: number; z: number };

  type Point2DOr3D1 =
    | { x: number; y: number }
    | { x: number; y: number; z: number };
  type Point2DOr3D2 = { x: number; y: number } & {
    x: number;
    y: number;
    z: number;
  };
  // type Result = Point2D & { isValid: boolean };
  const q: Point2DOr3D2 = { x: 1, y: 1, z: 3 };

  type P1 = number | string;
  type P2 = number | boolean | bigint;
  type Result = P1 & P2;
  // const q2: Result = { x: 1, y: 1, z: 3 };
}
