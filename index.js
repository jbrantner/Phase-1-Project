

function fetchClient(){
    let number = 0

// Async Code

fetch("clients.json")
    // convert to json
    .then(function (response){return response.json()})
    // get random number based on number of clients in clients.json
    .then((data) => {
        number = getRandomClient(data)
        return data
    })
    // use random number to access client's information
    .then((data) => {accessClientData(data, number)})

// end Async Code

    
// generates a random client
function getRandomClient(data){
    const clientNumber = data.length
    return Math.floor(Math.random() * clientNumber);
}}

// accesses age and vowels from that random number index
function accessClientData(data, number) {
    console.log(data[number]);
    const createProfile = document.createElement('h1')
    document.getElementById('clientProfiles').appendChild(createProfile);
    createProfile.innerHTML = `Hello, my name is ${data[number].name}. I'm ${data[number].age} years old. I would like to order '${data[number].likes[0].toUpperCase()}' and '${data[number].likes[1].toUpperCase()}', please.`
    const orderInput = document.createElement('input')
    document.getElementById('clientProfiles').appendChild(orderInput);
    const orderInputButton = document.createElement('button')
    orderInputButton.innerHTML = "Submit Order"
    document.getElementById('clientProfiles').appendChild(orderInputButton)
}





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

// consonant button 
const input = document.getElementById('wordInput');

const button = document.getElementById('countButton')
button.addEventListener('click', () => {
    const result = findConsonants(input.value)
    const newH1 = document.createElement('h1')
    document.getElementById('result').appendChild(newH1)
    newH1.innerHTML = result
})

// generate client button
const generateClientButton = document.getElementById('clientButton')
// show client profile
generateClientButton.addEventListener('click', () => {
    fetchClient()
})





