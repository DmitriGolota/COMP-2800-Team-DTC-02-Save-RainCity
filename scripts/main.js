let buttonClickThree = new Audio("./assets/audio/buttonclick3.mp3")
let boxPopAudio = new Audio('./assets/audio/boxpop1.mp3')

/*jshint esversion: 6 */
document.getElementById('char-customization').addEventListener('click', function () {
    var audio = document.getElementById('myaudio');
    audio.play();
}, true);

// hair, skin, and suit assets must named like so: hair1.png, hair2.png, skin1.png, skin2.png etc.
let hairNum = 0;
let skinNum = 0;
let suitNum = 0;
let hairImage = document.getElementById('hairImage');
let skinImage = document.getElementById('skinImage');
let suitImage = document.getElementById('suitImage');

let hairAssets = {
    0: "./assets/hair/charhair1.svg",
    1: "./assets/hair/charhair2.svg",
    2: "./assets/hair/charhair3.svg",
};
let hairAssetsLength = Object.keys(hairAssets).length - 1;

let skinAssets = {
    0: "./assets/skin/charskin1.svg",
    1: "./assets/skin/charskin2.svg",
    2: "./assets/skin/charskin3.svg",
};
let skinAssetsLength = Object.keys(skinAssets).length - 1;

let suitAssets = {
    0: "./assets/suit/charsuit1.svg",
    1: "./assets/suit/charsuit2.svg",
    2: "./assets/suit/charsuit3.svg",
};
let suitAssetsLength = Object.keys(suitAssets).length - 1;

function test() {
    console.log(hairNum)
}

function hairPrev() {
    //button movement
    document.getElementById("hairPrev").src = "./assets/buttons/arrowleftclicked.svg"
    setTimeout(function () {
        document.getElementById("hairPrev").src = "./assets/buttons/arrowleftunclicked.svg"
    }, 50)

    //button sound
    let audio = new Audio("./assets/audio/buttonclick1.mp3")
    audio.play();
    //change hair
    "use strict";
    if (0 === hairNum) {
        hairNum = hairAssetsLength;
    }
    else {
        hairNum -= 1;
    }
    hairImage.setAttribute("src", hairAssets[hairNum]);
}

function hairNext() {
    //button movement
    document.getElementById("hairNext").src = "./assets/buttons/arrowrightclicked.svg"
    setTimeout(function () {
        document.getElementById("hairNext").src = "./assets/buttons/arrowrightsunclicked.svg"
    }, 50)

    //button sound
    let audio = new Audio("./assets/audio/buttonclick1.mp3")
    audio.play();

    //change hair
    "use strict";
    if (hairAssetsLength === hairNum) {
        hairNum = 0;
    }
    else {
        hairNum += 1;
    }
    hairImage.setAttribute("src", hairAssets[hairNum]);
}

function skinPrev() {

    //button movement
    document.getElementById("skinPrev").src = "./assets/buttons/arrowleftclicked.svg"
    setTimeout(function () {
        document.getElementById("skinPrev").src = "./assets/buttons/arrowleftunclicked.svg"
    }, 50)

    //button sound
    let audio = new Audio("./assets/audio/buttonclick1.mp3")
    audio.play();

    "use strict";
    if (0 === skinNum) {
        skinNum = skinAssetsLength;
    }
    else {
        skinNum -= 1;
    }
    skinImage.setAttribute("src", skinAssets[skinNum]);
}

function skinNext() {
    //button movement
    document.getElementById("skinNext").src = "./assets/buttons/arrowrightclicked.svg"
    setTimeout(function () {
        document.getElementById("skinNext").src = "./assets/buttons/arrowrightsunclicked.svg"
    }, 50)

    //button sound
    let audio = new Audio("./assets/audio/buttonclick1.mp3")
    audio.play();

    "use strict";
    if (skinAssetsLength === skinNum) {
        skinNum = 0;
    }
    else {
        skinNum += 1;
    }
    skinImage.setAttribute("src", skinAssets[skinNum]);
}

function suitPrev() {
    //button movement
    document.getElementById("suitPrev").src = "./assets/buttons/arrowleftclicked.svg"
    setTimeout(function () {
        document.getElementById("suitPrev").src = "./assets/buttons/arrowleftunclicked.svg"
    }, 50)

    //button sound
    let audio = new Audio("./assets/audio/buttonclick1.mp3")
    audio.play();

    "use strict";
    if (0 === suitNum) {
        suitNum = suitAssetsLength;
    }
    else {
        suitNum -= 1;
    }
    suitImage.setAttribute("src", suitAssets[suitNum]);
}

function suitNext() {
    //button movement
    document.getElementById("suitNext").src = "./assets/buttons/arrowrightclicked.svg"
    setTimeout(function () {
        document.getElementById("suitNext").src = "./assets/buttons/arrowrightsunclicked.svg"
    }, 50)

    //button sound
    let audio = new Audio("./assets/audio/buttonclick1.mp3")
    audio.play();

    "use strict";
    if (suitAssetsLength === suitNum) {
        suitNum = 0;
    }
    else {
        suitNum += 1;
    }
    suitImage.setAttribute("src", suitAssets[suitNum]);
}

// document.getElementById('save-button').addEventListener('click', function () {
//     //button movement
//     document.getElementById('save-button').src = "./assets/intro_box/ContinueButtonCllicked.svg"
//     setTimeout(function(){
//         document.getElementById("save-button").src = "./assets/intro_box/ContinueButtonUncllicked.svg"
//     }, 50)
//     //button sound


//     // writeCustomizedCharacter(hairNum, skinNum, suitNum)
// });

// // Writes user's customized character to Firestore
// function writeCustomizedCharacter (hair, skin, suit) {
//     firebase.auth().onAuthStateChanged(function (user) {
//         db.collection('users').doc(user.uid)
//         .collection('character').doc('character')
//         .set({
//             'hair': hair,
//             'skin': skin,
//             'suit': suit
//         })
//     })
//     console.log("Save Success")
// };


// Finish char customization and move onto intro
document.getElementById('save-button').addEventListener('click', function () {

    // Delete char customization
    document.getElementById('char-customization').remove();
    var audio = document.getElementById('myaudio');
    audio.pause();

    buttonClickThree.play()
    // Populate introduction scene

    // Play boxPopAudio
    boxPopAudio.play()

    // Begin main soundtrack    
    var audioMain = document.getElementById('mainSoundTrack');
    audioMain.play()

    let mainContainer = document.getElementById('container');

    let mainMap = document.createElement('img');
    mainMap.setAttribute('src', './assets/map/mainmapplaceholder.svg');
    mainMap.setAttribute('id', 'game-map');

    let introDiv = document.createElement('div');
    introDiv.setAttribute('id', 'intro-div');

    let introBox = document.createElement('img');
    introBox.setAttribute('src', './assets/intro_box/IntroGameBox.svg')
    introBox.setAttribute('id', 'intro-box');

    let introText = document.createElement('p');
    introText.setAttribute('id', 'intro-text');

    let nextButton = document.createElement('img');
    nextButton.setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.svg');
    nextButton.setAttribute('id', 'next-dialogue-button');
    // Event Listener for the button to prompt the next span of dialogue during introduction
    nextButton.addEventListener('click', masterIntroDialogue);

    introDiv.appendChild(introBox);
    introDiv.appendChild(introText);
    introDiv.appendChild(nextButton);

    mainContainer.append(mainMap);
    mainContainer.append(introDiv);

});

// Each string in this array is one span of dialogue for the intro
let introDialogueArray = ['Congratulations on being appointed Mayor! What a long and enduring campaign \
season that was! The world is in a state of climate emergency, and that includes RainCity!',
    "As you know, the citizens of RainCity revolted and threw the last Mayor out of office. The \
citizens were furious at the Mayor's lack of action to reduce RainCity's carbon pollution!",
    "Let's hope that you can make more green decisions during your term as Mayor, and avoid getting \
thrown out of office!"]
// Global variable for the first span of dialogue from introDialogueArray
let introDialogueText = introDialogueArray.shift().split('');

// Main function to run the intro dialogue
function masterIntroDialogue() {
    // document.getElementById("next-dialogue-button").src = "./assets/buttons/ContinueButtonCllicked.svg"
    // setTimeout(function(){
    //     document.getElementById("next-dialogue-button").src = "./assets/intro_box/ContinueButtonUncllicked.svg"
    // }, 50)

    if (introDialogueArray.length === 0 && introDialogueText.length === 0) {
        document.getElementById('intro-div').remove()
        setTimeout(firstPrompt, 5000);
    } else {
        let dialogueTextBox = document.getElementById('intro-text');
        dialogueTextBox.textContent = '';
        introDialogue();
    }

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
    setTimeout('introDialogue()', 5);
};


function firstPrompt() {
    // Toggle visiblity for this one
    let questionPromptDiv = document.createElement('div');
    questionPromptDiv.setAttribute('id', 'question-prompt-div');

    // Everything goes in here
    let questionPromptOverlay = document.createElement('div');
    questionPromptDiv.setAttribute('id', 'question-prompt-overlay');

    // Main Dialogue UI Box
    let mainDialogueUI = document.createElement('img');
    mainDialogueUI.setAttribute('src', 'assets/dialogue_box/MainDialogueUI.svg')
    mainDialogueUI.setAttribute('id', 'question-prompt')

    // Div for Main Character
    let mainCharacterDiv = document.createElement('div');
    mainCharacterDiv.setAttribute('id', 'main-character');

    let mainCharacterBody = document.createElement('img')
    mainCharacterBody.setAttribute('src', 'assets/static_elements/charbody.svg')
    mainCharacterBody.setAttribute('id', 'main-character-body');

    let mainCharacterSkin = document.createElement('img');
    mainCharacterSkin.setAttribute('src', hairAssets[skinNum])
    mainCharacterSkin.setAttribute('id', 'main-character-skin');

    let mainCharacterHair = document.createElement('img');
    mainCharacterHair.setAttribute('src', hairAssets[hairNum])
    mainCharacterSkin.setAttribute('id', 'main-character-hair');

    let mainCharacterSuit = document.createElement('img');
    mainCharacterSuit.setAttribute('src', suitAssets[suitNum])
    mainCharacterSkin.setAttribute('id', 'main-character-suit');

    mainCharacterDiv.appendChild(mainCharacterBody);
    mainCharacterDiv.appendChild(mainCharacterSkin);
    mainCharacterDiv.appendChild(mainCharacterHair);
    mainCharacterDiv.appendChild(mainCharacterSuit);

    let NPC = document.createElement('img');
    // change this later because it will not always be assistant
    NPC.setAttribute('id', 'assistant');
    NPC.setAttribute('src', 'assets/npc/npc1.svg');

    let yesButton = document.createElement('img');
    yesButton.setAttribute('src', '/assets/dialogue_box/buttons/YesButtonUnclicked.svg');
    yesButton.setAttribute('id', 'yes-button');

    let noButton = document.createElement('img');
    noButton.setAttribute('src', '/assets/dialogue_box/buttons/NoButtonUnclicked.svg');
    noButton.setAttribute('id', 'no-button');

    questionPromptOverlay.appendChild(mainDialogueUI);
    questionPromptOverlay.appendChild(mainCharacterDiv);
    questionPromptOverlay.appendChild(yesButton);
    questionPromptOverlay.appendChild(noButton);

    questionPromptDiv.appendChild(questionPromptOverlay);

    document.getElementById('container').appendChild(questionPromptDiv);
};