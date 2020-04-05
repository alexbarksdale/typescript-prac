import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log('Number sort', numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaa');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log('Character Sort', charactersCollection.data);

