// Solution for https://dojopuzzles.com/problems/palavras-primas/
// Palavras Primas

const generateAlphabetValues = () => {
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaArray = alphabet.split("");
    var alphaCollection = [];

    for (var i = 0; i < alphaArray.length; i++) {
        alphaCollection.push(
            {
                "id": i + 1,
                "name": alphaArray[i]
            }
        )
    };
    return alphaCollection;
}

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
};

var wordString = ["auau", "abab", "b"];

const validateWords = (words) => {
    var alphabet = generateAlphabetValues();

    for (var i = 0; i < words.length; i++) {
        
        var wordChars = words[i].split("");
        var sum = 0;

        for (var e = 0; e < wordChars.length; e++) {
            var res = alphabet.find(alphabet => alphabet.name == wordChars[e]);
            sum += res.id        
        }
        var result = isPrime(sum);
        console.log(`${words[i]} - Soma: ${sum} - É primo: ${result}`)
    }
}

validateWords(wordString);