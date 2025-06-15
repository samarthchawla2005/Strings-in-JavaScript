console.log("This is Strings Tutorial")

//String
let a = "Sam";

//Assigning Characters
console.log(a);
console.log(a[-1]); //This will show undefined
console.log(a[0]); //S
console.log(a[1]); //a
console.log(a[2]); //m
console.log(a[3]); //It will show undefined

//Length of an Array
console.log(a.length); //3

let real_name = "Samarth"
let king = "SRK"

console.log("The King of Bollywood is " + king + " and his biggest Fan is " + real_name )
//The King of Bollywood is SRK and his biggest Fan is Samarth

//Template Literals
console.log(`My name is ${real_name} and I am Fan of ${king}`)
//My name is Samarth and I am Fan of SRK

let b = "Dev"
console.log(b.toUpperCase()) //DEV
console.log(b.toLowerCase()) //dev
console.log(b.toString())    //Dev
console.log(b.toLocaleLowerCase()) //dev
console.log(b.toLocaleUpperCase()) //DEV
console.log(b.replace("Dev","Sam"))
console.log(b.length) //3


//Slicing String → V.IMP

console.log(b.slice) //[Function: slice]
console.log(b.slice(1)) //ev
console.log(b.slice(2)) //v
console.log(b.slice(3)) // No value
console.log(b.slice(1,2)) //e
console.log(b.slice(1,3)) //ev
console.log(b.slice(2,1)) //No value
console.log(b.slice(2,3)) //v
console.log(b.slice(3,1)) //No value
console.log(b.slice(3,2)) //No value

//String Replace
console.log(b.replace("Dev", "Gwalior"))

/*let c = "HaHa"
console.log(c.replace("Ha","aH"))
console.log(c.replace("aH","Ha"))*/

//Concatenation
console.log(b.concat(a, "Boss", "King", "Badshah"))

//Strings are Immutable i.e.,  not changing over time or unable to be changed.
console.log(a)
console.log(b)
console.log(king)
console.log(real_name)



//My Code

/*
let c = "Lorem, ipsum dolor sit amet consectetur adipisicing elit."

console.log(c.length)
console.log(c.slice)
console.log(c.slice(1))
console.log(c.slice(12))
console.log(c.slice(1,2))
console.log(c.slice(6,6))
console.log(c.slice(12,6))
console.log(c.slice(6,12))
*/
