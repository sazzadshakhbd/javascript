let johnsTeamScore = (110 + 120 + 103) / 3;
let mikesTeamScore = (116 + 94 + 123) / 3;
let marysTeamScore = (97 + 134 + 105) / 3;
console.log(johnsTeamScore, mikesTeamScore, marysTeamScore);


// if (johnsTeamScore > mikesTeamScore) {
//   console.log('John Win ' + johnsTeamScore + ' points');
// } else if (mikesTeamScore > johnsTeamScore) {
//   console.log('Mike win ' + mikesTeamScore + ' points');
// } else {
//   console.log('Match Draw');
// }


if (johnsTeamScore > mikesTeamScore && johnsTeamScore > marysTeamScore) {
  console.log('John Win ' + johnsTeamScore + ' points');
} else if (mikesTeamScore > johnsTeamScore && mikesTeamScore > marysTeamScore) {
  console.log('Mike win ' + mikesTeamScore + ' points');
} else if (marysTeamScore > johnsTeamScore && marysTeamScore > mikesTeamScore) {
  console.log('Mary win ' + marysTeamScore + ' points');
} else {
  console.log('Match Draw');
}