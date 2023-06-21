const functions = require("./../script.js");
const paint = require("./../script.js");

describe("tests", () => {
  it("should return a welcome message", () => {
    const heyThere = functions.welcome("Hey there");
    const result = heyThere("Bob");
    expect(result).toBe("Hey there! Nice to meet you, Bob!");
  });

  it("should return a prefixed name", () => {
    const heyThere = functions.addPrefix("Sir");
    const result = heyThere("Bob");
    expect(result).toBe("Sir Bob!");
  });

  it("should return correct animal sound", () => {
    const lionSound = functions.soundMaker("roar");
    const mouseSound = functions.soundMaker("squeak");

    const result = lionSound();
    const res = mouseSound();

    expect(result).toBe("roar");
    expect(res).toBe("squeak");
  });

  it("should return correct full name", () => {
    const misterJunior = functions.nameEnhancer("Mister")("Junior");
    const duchessThird = functions.nameEnhancer("Duchess")("The Third");

    const result = misterJunior("samuel");
    const res = duchessThird("sarah");

    expect(result).toBe("Mister samuel Junior");
    expect(res).toBe("Duchess sarah The Third");
  });

  it("should return correct number", () => {
    const addTwoMultiplyByThree = functions.addaMult(2)(3);
    const addFiveMultiplyByNine = functions.addaMult(5)(9);

    const result = addTwoMultiplyByThree(1);
    const res = addFiveMultiplyByNine(1);

    expect(result).toBe(9);
    expect(res).toBe(54);
  });

  it("should return reversed Array", () => {
    const Cat = "I am a Cat";
    const sentence = functions.reverseArray(Cat);

    expect(sentence).toBe("Cat a am I ");
  });

  it("should return repeated Phrase", () => {
    const rgr = "red green refactor";
    const phrase = functions.phraseRepeater(3)(rgr);

    expect(phrase).toBe(
      "red green refactor red green refactor red green refactor "
    );
  });
});
