// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // print all
// // console.log(numbers);

// /////////////////////////////////////////////////
const cars = ["honda", "mazda", "chevy"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

const cars = ["honda", "mazda", "chevy"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// //////////////////////////////////////////////////

const boardgames = [
  "chutes n ladders",
  "chess",
  "monopoly",
  "life",
  "candyland",
];

let i = 0;
while (true) {
  console.log(boardgames[i]);
  i++;
  if (i === boardgames.length) {
    break;
  }
}

boardgames[i].indexOf("l") > -1;

for (let game of boardgames) {
  if (game.indexOf("l") > -1) {
    console.log(game);
  }
}

const animals = [
  "dog",
  "elephant",
  "bird",
  "rabbit",
  "cat",
  "hamster",
  "horse",
  "lamb",
  "chicken",
  "cow",
];

for (let pet of animals) {
  if (pet.indexOf("t") > -1) {
    console.log(pet);
  }
}

for (let a of animals) {
  if (a.indexOf("c") > -1) {
    console.log(a);
  }
}

for (let t of animals) {
  if (t.indexOf("o") > -1) {
    console.log(t);
  }
}

Math.floor(Math.random) * 10)

let i = 0;

while (i < 3) {
  i++;
}
while (i) {
  console.log(i);
  i--;
}

const printTens = () => {
  for (let i = 10; i <= 100; i += 10)
    console.log(i);

};

console.log(printTens);

// Longer Name (of Three)
// Start with three variables name1, name2, and name3 which hold three names.

// The code should output the longest of the three names. e.g. "Ada Lovelace has the longest name.". Assume there will not be a tie.

function printLongestName(name1, name2, name3) {
  // Write code here.
  if (name1.length > name2.length) {
    // name1 > name2
    if (name1.length > name3.length) {
      // name1 is longest
      console.log(`${name1} has the longest name.`);
    } else if (name1.length < name3.length) {
      //  name3 is longest
      console.log(`${name3} has the longest name.`);
    } // name1 == name3
    else {
      console.log(`${name1} and ${name3} tie for the longest name.`);
    }
  } else if (name2.length > name1.length) {
    // name2 > name 1
    if (name2.length > name3.length) {
      // name2 is longest
      console.log(`${name2} has the longest name.`);
    } else if (name2.length < name3.length) {
      // name3 is longest
      console.log(`${name3} has the longest name.`);
    } // name2 == name3
    else {
      console.log(`${name2} and ${name3} tie for the longest name.`);
    }
  } // name1 == name2
  else {
    if (name1.length === name3.length) {
      console.log(
        `All three names, ${name1}, ${name2}, and ${name3}, are the same length.`
      );
    } else if (name1.length < name3.length) {
      console.log(`${name3} has the longest name.`);
    } else {
      console.log(`${name1} and ${name2} tie for the longest name.`);
    }
  }
}
