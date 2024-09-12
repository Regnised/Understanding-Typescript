{
  const userObj = {
    firstName: 'Vasyl',
    age: 30,
  };
  const person = { ...userObj, lastName: 'Onopriienko' }; // SPREAD OPERATOR

  const someArr = ['one', 'two'];
  const extenedArray = ['three', ...someArr]; // SPREAD OPERATOR
  console.log(extenedArray);

  const add = (...numbers: number[]) => {
    return numbers.reduce((acc, item) => {
      return acc + item;
    }, 0);
  };

  const addedNumbers = add(1, 2, 3, 3.3);
  console.log(addedNumbers);

  // ARRAY AND OBJECT DESTRUCTURING
  const [three, ...others] = extenedArray;
  const { age, firstName: name1 } = person;
}
