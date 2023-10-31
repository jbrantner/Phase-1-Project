

const vowelsCheck = ['a', 'e', 'i', 'o', 'u']

let leftOvers = [].join('')


let test = []

function removeVowels(word){
    // split's string into array
    const letters = word.split('')
    const vowels = [];
    const consonants = []

    // goes through each element of the letters array
    for(let ii = 0; ii < letters.length; ii++){
        // goes through vowels array and compares element to each vowel letter
        for(let i = 0; i < vowelsCheck.length; i++){
            // if element of letters === a vowel letter, then push that letter to the vowel array
            if(letters[ii] === vowelsCheck[i]){
                vowels.push(letters[ii])
                console.log(vowels)
            }
        }
        // if it doesn't find a vowel, push the letter to the consonants array
        
    }
}

removeVowels('lets see how this goes')

console.log(test)


