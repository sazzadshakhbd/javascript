var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'Teacher':
      return firstName + ' teaches us. ';
    case 'Driver':
      return firstName + ' drives on road.';
    case 'Designer':
      return firstName + ' design graphics';
    default:
      return ' no jobs founcd';
  }
}
console.log(whatDoYouDo('Teacher', 'john'));
console.log(whatDoYouDo('Driver', 'Mike'));
console.log(whatDoYouDo('Designer', 'Mary'));
console.log(whatDoYouDo('Web Developer', 'Sazzad'));