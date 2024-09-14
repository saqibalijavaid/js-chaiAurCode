// *************** for Loop ***************

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

// console.log(element); // not accessible

// *** Nested for Loop ***

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j ); // + --> String Catenation
  }
}

// *** Array + for Loop ***

let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// *** break Statement ***

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`Detected 5`);
    break;
  }
  //    console.log(`Value of i is ${index}`);
}

// *** continue Statement ***

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`Detected 5`);
    continue;
  }
  //   console.log(`Value of i is ${index}`);
}
