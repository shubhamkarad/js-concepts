//     *
//    **
//   ***
//  ****
// *****

const star2 = (n) => {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n - i; k++) {
      string += " ";
    }
    for (let j = 0; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
};

console.log(star2(5));
