const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const cenzorBtn = document.getElementById('cenzorBtn');
const wordsInput = document.getElementById('word-input');
const textInput = document.getElementById('text-area');
const badWords = document.getElementById('bad-word');
let badWordArray = [];
function addBadWord() {
    let newBadWord = wordsInput.value;
    if (newBadWord) {
        badWordArray.push(newBadWord);
        wordsInput.value = "";
        badWords.innerHTML = badWordArray.join(", ");
        wordsInput.placeholder = 'word here...';
        wordsInput.style.border = 'none';
    }
    else {
        wordsInput.placeholder = 'Please, write a word!';
        wordsInput.style.border = '1px solid red';
    }
}
;
function cenzorText() {
    let censoredText = textInput.value;
    if (censoredText) {
        badWordArray.forEach((badWord) => {
            censoredText = censoredText.replace(badWord, "*".repeat(badWord.length));
        });
        textInput.placeholder = 'text here...';
        textInput.style.border = 'none';
    }
    else {
        textInput.placeholder = 'Please, write a text!';
        textInput.style.border = '1px solid red';
    }
    textInput.value = censoredText;
}
;
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
