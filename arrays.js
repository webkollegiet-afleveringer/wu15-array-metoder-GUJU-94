let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 
// Opgave 1

let res=numbersArray.filter((thisNumber)=>{
    return thisNumber > 20
} )
console.log(res);

// opgave 2

// Tilføj katten "Sniffles" til catsArray.

// Udskriv arrayet i konsollen.

// console.log("Opgave 2", ...)

catsArray.push("Sniffels")

console.log(catsArray);

catsArray.forEach ((catName)=>{console.log(catName)})

// Opgave 3a
// Check om der i dogsArray er en hund som hedder "Trixie".
// Udskriv "true" eller "false" i konsollen afhængig af svaret.
// console.log("Opgave 3a", ...)

let dog = dogsArray.includes ("Trixie")
console.log(dog);

// Opgave 3b

// Check om der i dogsArray er en hund som hedder "Baxter".

// Udskriv "true" eller "false" i konsollen afhængig af svaret.

// console.log("Opgave 3b", ...)