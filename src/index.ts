import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([-1, 2, -3, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("mSdJjhab");
// charactersCollection.sort();
// console.log(charactersCollection.data);
