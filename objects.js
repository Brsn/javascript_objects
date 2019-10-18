var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
};

var person = {
    name: "Travis",
    age: 20,
    city: "New Port"
};
//objects have no order
//key value pairs
console.log(person["name"]);
console.log(person.name);
//you cannot use dot notation if the property starts with a number ex: .1blah
//you cannot use dot notation on names with spaces ex: .this guy
//you'd have to use brackets [1blah]
person.age += 1;
console.log(person.age);
person["age"] +=1;
console.log(person.age);
person.city = "London";
console.log(person.city);
console.log(person);
//object instanation is done by creating an object literal ex: above
//the other way is...
delete person.age;
//delete an object property using delete
console.log(person.age);

