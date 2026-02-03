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

let petdog = dogsArray.includes ("Baxter")
console.log(petdog);

// Opgave 4a

// Check om der i catsArray er en kat som hedder "Bagheera".

// Udskriv katten i konsollen hvis den findes og ellers "undefined".

// console.log("Opgave 4a", ...)

const found = catsArray.find((element) => element == "Bagheera");
console.log(found);

// Opgave 4b

// Check om der i catsArray er en kat som hedder "Salem".

// Udskriv katten i konsollen hvis den findes og ellers "undefined".

// console.log("Opgave 4b", ...)


const founded = catsArray.find((element) => element == "Salem");
console.log(founded);

// Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.

// Udskriv det nye array i konsollen:

// console.log("Opgave 5", ...)

const nytArray = numbersArray.map(function(thisNumber){
   return thisNumber *3
})
console.log(nytArray);

// numbersArray.map(()=>{}) det beytyder det samme som function this number, bare en forkortelse

// Opgave 6

// Udskriv alle hundene i dogsArray i én lang streng.

// (Sådan her: BarneyMollyBaxter...)

// Udskriv strengen konsollen:

// console.log("Opgave 6", ...)

const nydogArray = dogsArray.join ("")
console.log(nydogArray);

// Opgave 7a

// Find ud af hvilket index "Mango" har i fruitsArray.

// Udskriv indexet i konsollen.

// console.log("Opgave 7a", ...)


// Opgave 7b

// Find ud af hvilket index "Blåbær" har i fruitsArray.

// Udskriv indexet i konsollen.

// console.log("Opgave 7b", ...)

const newfruitsArray = fruitsArray.indexOf ("Mango")
console.log(newfruitsArray);