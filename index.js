

const vowelsCheck = ['a', 'e', 'i', 'o', 'u']

let leftOvers = [].join('')


let test = []

function findConsonants(word){
    // split's string into array
    const letters = word.split('')
    const newLetters = [...letters]

    // goes through each element of the letters array
    for(let ii = 0; ii < newLetters.length; ii++){
        // goes through vowels array and compares element to each vowel letter
        for(let i = 0; i < vowelsCheck.length; i++){
            // if element of letters === a vowel letter, then replace vowel with ' '
            if(newLetters[ii] === vowelsCheck[i]){
                letters.splice(ii, 1, ' ')
                console.log(letters)
            }
        }
    }
    // removes spaces and turns consonants variable into a string
    const consonants = letters.filter((letter) => letter !== ' ').join('')
    return consonants;

}

findConsonants('lets see how this goes')




