

const vowelsCheck = ['a', 'e', 'i', 'o', 'u']

let leftOvers = [].join('')

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
            }
        }
    }
    // removes spaces and turns consonants variable into a string
    const consonants = letters.filter((letter) => letter !== ' ').join('')
    return consonants;

}

function countVowels(word){
    // split's string into array
    const letters = word.split('')
    const newLetters = [...letters]
    let vowels = []

    // goes through each element of the letters array
    for(let ii = 0; ii < newLetters.length; ii++){
        // goes through vowels array and compares element to each vowel letter
        for(let i = 0; i < vowelsCheck.length; i++){
            // if element of letters === a vowel letter, then push vowel to vowels variable
            if(newLetters[ii] === vowelsCheck[i]){
                vowels.push(newLetters[ii])
            }
        }
    }
    return vowels.length;
}

// function findVowels(word){
//     // split's string into array
//     const letters = word.split('')
//     const newLetters = [...letters]
//     let vowels = []

//     // goes through each element of the letters array
//     for(let ii = 0; ii < newLetters.length; ii++){
//         // goes through vowels array and compares element to each vowel letter
//         for(let i = 0; i < vowelsCheck.length; i++){
//             // if element of letters === a vowel letter, then push vowel to vowels variable
//             if(newLetters[ii] === vowelsCheck[i]){
//                 vowels.push(newLetters[ii])
//             }
//         }
//     }
//     return vowels;
// }

const input = document.getElementById('wordInput');

const button = document.getElementById('countButton')
button.addEventListener('click', () => {
    const result = findConsonants(input.value)
    const newH1 = document.createElement('h1')
    document.getElementById('result').appendChild(newH1)
    newH1.innerHTML = result
})


console.log('count vowels = ' + countVowels('lets see how this goes'))
console.log('find con = ' + findConsonants('lets see how this goes'))






