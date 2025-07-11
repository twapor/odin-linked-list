import LinkedList from "./linkedList.js";  

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list);

list.prepend("fish");
console.log(list);

list.delete("cat");
console.log(list);

console.log("Size of the list:", list.size());
console.log("Head of the list:", list.getHead());
console.log("Tail of the list:", list.getTail());
console.log("Element at index 2:", list.atIndex(2));

list.pop();
console.log("After popping the last element:", list);
console.log("Contains 'dog':", list.contains("dog"));
console.log("Contains 'cat':", list.contains("cat"));
console.log("Find 'parrot':", list.find("parrot"));
console.log("Find 'lion':", list.find("lion"));
console.log("String representation of the list:", list.toString());