const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
const cenzorBtn = document.getElementById('cenzorBtn') as HTMLButtonElement;

const wordsInput = document.getElementById('word-input') as HTMLInputElement;
const textInput = document.getElementById('text-area') as HTMLTextAreaElement;

const badWords = document.getElementById('bad-word') as HTMLSpanElement;

let badWordArray: string[] = [];

function addBadWord(): void {

    let newBadWord: string = wordsInput.value;

    if (newBadWord) {
        badWordArray.push(newBadWord);
        wordsInput.value = "";
        badWords.innerHTML = badWordArray.join(", ");
        wordsInput.placeholder = 'word here...'
        wordsInput.style.border = 'none';
    } else {
        wordsInput.placeholder = 'Please, write a word!'
        wordsInput.style.border = '1px solid red';
    }
};

function cenzorText(): void {

    let censoredText: string = textInput.value;

    if(censoredText) {
        badWordArray.forEach((badWord) => {
            censoredText = censoredText.replace(badWord, "*".repeat(badWord.length));
        });
        textInput.placeholder = 'text here...'
        textInput.style.border = 'none';
    } else {
        textInput.placeholder = 'Please, write a text!'
        textInput.style.border = '1px solid red';
    }
    textInput.value = censoredText;
};

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBadWord();
});

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    badWords.innerHTML = "";
    badWordArray = [];    
});


cenzorBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cenzorText();
});