// Example
function welcome(salutation) {
  return function (yourName) {
    return `${salutation}! Nice to meet you, ${yourName}!`;
  };
}
const heyThere = welcome("Hey there");

// Closure
// Problem 1
function addPrefix(prefix) {
  return function (yourName) {
    return `${prefix} ${yourName}!`;
  };
}
const prefixSir = addPrefix("Sir");

// Problem 2

function soundMaker(animalSound) {
  return function () {
    return animalSound;
  };
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

// Problem 3
function nameEnhancer(prefix) {
  return function (suffix) {
    return function (name) {
      return `${prefix} ${name} ${suffix}`;
    };
  };
}

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

// Problem 4
function addaMult(addBy) {
  return function (multBy) {
    return function (initialNumber) {
      return (initialNumber + addBy) * multBy;
    };
  };
}

const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);

// Recursion
// Problem 1

function reverseArray(sentence) {
  if (sentence === "") {
    return "";
  }

  const lastSpaceIndex = sentence.lastIndexOf(" ");
  const lastWord = sentence.slice(lastSpaceIndex + 1);
  const remainingSentence = sentence.slice(0, lastSpaceIndex);
  return lastWord + " " + reverseArray(remainingSentence);
}

const Cat = "I am a Cat";

// Problem 2

function phraseRepeater(multiplier) {
  return function (phrase) {
    if (multiplier <= 0) {
      return "";
    } else {
      return `${phrase} ` + phraseRepeater(multiplier - 1)(phrase);
    }
  };
}

// Composition
// Problem 1

const rgr = "red green refactor";

function paint(color) {
  return {
    paints: function () {
      return "Paints " + color + "!";
    },
  };
}
const painter1 = paint("green");
const painter2 = paint("yellow");
const painter3 = paint("red");

console.log(painter1.paints());
// Problem 2

function sound(noise) {
  return {
    sound: function () {
      return noise;
    },
  };
}
const faucet = sound("Drip drip drip.");
const oldCar = sound("Grumble grumble");
const sleepyBear = sound("Grrr...yawn");

console.log(faucet.sound());

// Problem 3
function throwSpear(distance, speed) {
  return {
    throw: function () {
      return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`;
    },
  };
}
const robot1 = throwSpear(100, 200);
const robot2 = throwSpear(150, 100);
const robot3 = throwSpear(400, 50);

console.log(robot1.throw());

// Problem 4
const dancer = {};

function dance(type) {
  return function () {
    return `The dancer ${type}s!`;
  };
}

dancer.samba = dance("samba");
dancer.tango = dance("tango");
dancer.robot = dance("robot");

console.log(dancer.tango());

module.exports = {
  welcome,
  addPrefix,
  soundMaker,
  nameEnhancer,
  addaMult,
  reverseArray,
  phraseRepeater,
  sound,
  throwSpear,
};
