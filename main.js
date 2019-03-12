const button = document.querySelector('button')


let wordArray = ['cat', 'dog', 'car', 'forest', 'computer', 'pizza', 'house', 'music', 'game', 'water', 'map', ]


let randomWord = function () {
    let randomNumber = Math.floor(Math.random() * wordArray.length)
    return wordArray[randomNumber]
}

let buttonClicked = false;


class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word
        this.remainingGuesses = remainingGuesses
        this.numberOfGuesses = 0
    }
    setBlanks() {
        let wordToArray = this.word.split('')
        wordToArray.forEach(function (letter) {
            var x = document.createElement("p");
            var t = document.createTextNode('_');
            x.appendChild(t);
            document.querySelector('#guess').appendChild(x);
        })
    }
    makeGuess(guess) {

        let wordToArray = this.word.split('')
        wordToArray.forEach(function (letter, index) {
            console.log(letter, index)
            if (guess === letter) {
                document.getElementById('guess').getElementsByTagName('p')[index].innerHTML = guess
            }
        })


        if (!wordToArray.includes(guess)) {
            this.numberOfGuesses++
            document.querySelector('.man').setAttribute('src', `img/${this.numberOfGuesses}.png`)
            this.remainingGuesses--

        }
    }
}



let game1 = new Hangman(randomWord(), 6)

button.addEventListener('click', function () {
    if (!buttonClicked) {
        game1.setBlanks()
        buttonClicked = true;
    }

    document.querySelectorAll('span').forEach(function (spanItem) {
        spanItem.style.visibility = 'visible'
    })

})

document.querySelector('.alphabet').addEventListener('click', function (e) {
    // console.log(e)
    game1.makeGuess(e.target.textContent.toLowerCase())
})