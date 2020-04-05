import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log('Number sort:', numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaa');
charactersCollection.sort();
console.log('Character Sort:', charactersCollection.data);

console.log('LL Sort:');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
linkedList.sort();
linkedList.print();
