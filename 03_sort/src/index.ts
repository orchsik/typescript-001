import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([100000000, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

const chractersCollection = new CharactersCollection("Xaayb");
chractersCollection.sort();
// const sorter = new Sorter(chractersCollection);
// sorter.sort();
console.log(chractersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.print();
