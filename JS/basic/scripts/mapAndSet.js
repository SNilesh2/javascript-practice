let map = new Map();

console.log(typeof map);

map.set(1,'nilesh');
map.set(2,'raji');
map.set(3,'sid');
map.set(4,'nags');

console.log(map);
//get a particular value for the given key
console.log(map.get(2));

//check whether the key is available is not 
console.log(map.has(1));

//deleting a particular key 
map.delete(2);
console.log(map);

//if we use map.clear() function is used to delete all the entires in the map

//size of map
console.log(map.size);


//iterating the map
//the below loop gives the keys 
console.log("iterating key...")
for(key of map.keys())
{
    console.log(key);
}

//iterating the values 
console.log("interting the values ...");
for(val of map.values())
{
    console.log(val);
}

//iterating the key value pairs
console.log("iterating the key value pairs ...");
for(entry of map)
{
    console.log(entry);
}

//iterating the values using key
console.log("iterating the values using key ...");
for(key of map.keys())
{
    console.log(map.get(key));
}


//set
let set= new Set();

set.add('1');
set.add(1);
set.add('ohooo');
set.add('hihi');

console.log(set);
console.log(set.has(1));
set.delete(1);
console.log(set);
console.log(set.size);

//set.clear() deletes all the values in the set 

//interating the set
for(val of set)
{
    console.log(val);
}

