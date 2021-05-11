// Each string in this array is one span of dialogue for the intro
let introDialogueArray = ['Congratulations on being appointed Mayor! What a long and enduring campaign \
season that was!', 'The world is in a state of climate emergency, and that includes RainCity!',
"As you know, the citizens of RainCity revolted and threw the last Mayor out of office. The \
citizens were furious at the Mayor's lack of action to reduce RainCity's carbon pollution!", 
"Let's hope that you can make more green decisions during your term as Mayor, and avoid getting \
thrown out of office!"]
// Global variable for the first span of dialogue from introDialogueArray
let introDialogueText = introDialogueArray.shift().split('');

// Event Listener for the button to prompt the next span of dialogue during introduction
document.getElementById('next-dialogue-button').addEventListener('click', masterIntroDialogue);

// Main function to run the intro dialogue
function masterIntroDialogue() {
    if (introDialogueArray.length === 0 && introDialogueText.length === 0) {
        document.getElementById('intro-div').remove()
        return false
    }
    let dialogueTextBox = document.getElementById('intro-text');
    dialogueTextBox.textContent = '';
    introDialogue();
};

// Decomposed function to add each individual letter to text box with a timeout in-between
function introDialogue() {
    if (introDialogueArray.length === 0 && introDialogueText.length === 0) {
        document.getElementById('next-dialogue-button').setAttribute('class', 'visible')
        return false
    } else if (introDialogueText.length > 0) {
        document.getElementById('intro-text').innerHTML += introDialogueText.shift();
        document.getElementById('next-dialogue-button').setAttribute('class', 'hidden')
    } else {
        introDialogueText = introDialogueArray.shift().split('');
        document.getElementById('next-dialogue-button').setAttribute('class', 'visible')
        return false
    }
    setTimeout('introDialogue()', 50);    
};