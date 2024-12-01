// *******
//  *****
//   ***
//    *

const star3 = (n) => {
  let string = "";
  for (let i = n; i >= 1; i--) {
    for (let k = 1; k <= n - i; k++) {
      string += " ";
    }
    for (let j = 1; j <= i; j++) {
      string += "*";
    }
    for (let l = 1; l <= i - 1; l++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
};

console.log(star3(5));
