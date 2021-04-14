// Consegna:

// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// Prima di partire a scrivere codice poniamoci qualche domanda:


// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

var numeri = 0;

for (var i = 1; i <= 100; i++) {
    numeri = i;
    console.log(numeri);

    if (i % 5 === 0) {
        console.log("buzz");
    
    } else if (i % 3 == 0) {
        console.log("fizz") 
    }
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
    }
}


