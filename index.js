

function fetchClient(){
    let number = 0
// Async Code //
fetch("clients.json")
    // convert to json
    .then(function (response){return response.json()})
    // get random number based on number of clients in clients.json
    .then((data) => {
        number = getRandomClient(data)
        return data
    })
    // add data and number to various functions
    .then((data) => {postClientData(data, number)})
// end Async Code // 

function getRandomClient(data){
    const clientNumber = data.length
    return Math.floor(Math.random() * clientNumber);
}}



function postClientData(data, number) {
    // creates profile container p
    const profileContainer = document.createElement('p')
    profileContainer.id = `${number}`
    document.getElementById('clientProfiles').appendChild(profileContainer)

    // creates profile h1
    const createProfile = document.createElement('h1')
    createProfile.innerHTML = `Hello, my name is ${data[number].name}. I'm ${data[number].age} years old. I would like to order '${data[number].likes[0].toUpperCase()}' and '${data[number].likes[1].toUpperCase()}', please.`
    createProfile.id = `client${number}`
    profileContainer.appendChild(createProfile)
    // creates textbox input
    const orderInput = document.createElement('input')
    orderInput.id = `client${number}`
    orderInput.className = 'inputButton'
    profileContainer.appendChild(orderInput);
    // creates button to submit text
    const orderInputButton = document.createElement('button')
    orderInputButton.innerHTML = "Submit Order"
    profileContainer.appendChild(orderInputButton)

    orderInputButton.addEventListener('click', () => {
        findMatchingVowels(data, number, orderInput.value)
    })
}



let money = 0;

const vowelsCheck = ['a', 'e', 'i', 'o', 'u']

let leftOvers = [].join('')

function returnConsonants(word){
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
            }}}
    // removes spaces and counts consonants
    const consonants = letters.filter((letter) => letter !== ' ')
    money = money + consonants.length;
    document.getElementById('money').innerHTML = `Money: ${money}`
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




function returnVowels(word){
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
    return vowels;
}


// generate client button
const generateClientButton = document.getElementById('clientButton')
// show client profile
generateClientButton.addEventListener('click', () => {
    fetchClient()
})



// find if vowels match the likes key in the clients object
function findMatchingVowels(data, number, word){
    let vowel1 = false;
    let vowel2 = false;
    // if user input == value, then return true
    const vowels = returnVowels(word);
    vowels.find((element) => {
        if(element == data[number].likes[0]) {
            vowel1 = true;
        }})
    vowels.find((element) => {
        if(element == data[number].likes[1]) {
                vowel2 = true;
        }})
        if(vowel1 === true && vowel2 === true){
            removeClient(number);
        }

}

function removeClient(id){
    document.getElementById(`client${id}`).innerHTML = "Thanks!"
    returnConsonants(orderInput.value)
    setTimeout(() => document.getElementById(`${id}`).remove(), 1000)
}


