// ********* Switch *********

/*
- Basic Syntax -
switch (key) {
    case value:

        break;

    default:
        break;
}
*/

const month = "feb";

switch (month) {
  case "jan":
    console.log(1);
    break;
  case "feb":
    console.log(2);
  // break;
  case "march":
    console.log(3);
  // break;
  case "april":
    console.log(4);
  // break;

  default:
    console.log("Default Case Executed");
    break;
}

// Must use 'break' statement after each case