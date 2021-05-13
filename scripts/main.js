let buttonClickThree = new Audio("./assets/audio/buttonclick3.mp3")
let boxPopAudio = new Audio('./assets/audio/boxpop1.mp3')

/*jshint esversion: 6 */
document.getElementById('char-customization').addEventListener('click', function () {
    var audio = document.getElementById('myaudio');
    audio.play();
}, true);

let questionCounter = 0;

let questions = {
    0: {
        'question': 'To decrease the need for private vehicles, we want to create more walkable neighborhoods for the residents of RainCity. This means ensuring that neighborhoods have access to  Do you agree to this plan?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    1: {
        'question': 'To reduce traffic congestion in Downtown RainCity, we want to charge a fee for private vehicles entering the Metro Core. Do you agree to this plan?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    2: {
        'question': 'To further encourage cycling as a form of transportation, we want to build more bike-only paths that connect outer neighbourhoods to the core of RainCity. Do you agree to this plan?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    3: {
        'question': 'The bus system is getting expensive with the new green requirements! Should we reduce the schedule and frequency of busses to save money?',
        'answer': false,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    4: {
        'question': 'To reduce vehicle pollution, we want to offer incentives for employers that encourage sustainable transportation such as walking, cycling, and public transit. Do you agree to this plan? ',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    5: {
        'question': 'To discourage the ownership of private vehicles, we want to expand our residential parking permits city-wide. Do you agree to this plan?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    6: {
        'question': 'Wow! With such an increase in public transit use, we want to increase the ticket prices for buses and trains from $x to $x. Do you agree to this plan?',
        'answer': false,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    7: {
        'question': 'People are complaining about the lack of parking in Downtown RainCity! Can we pave over a greespace to build a parkade?',
        'answer': false,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    8: {
        'question': 'We want to increase the number of electric vehicle charging stations within RainCity. Do you agree to this plan?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    9: {
        'question': 'To further discourage non-electric private vehicles, we want to add an additional carbon pollution surcharge to parking permits for non-electric vehicles. Do you agree to this plan?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    10: {
        'question': 'Over 3 quarters of carbon emission from building operations can be eliminated by switching natural gas to electricity or renewable natural gas for space and water heating. Do you think it is feasible to require the majority of new home constructions to use electrical appliances for heating and hot water.',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    11: {
        'question': 'Do you agree to issue fines to building owners that still operate on unrenweable natural gas?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    12: {
        'question': 'The Architechture Association of Raincity hates big windows; they believe it is a faux-pas. Bigger windows allows for improved air flow which allows for reduced energy usage for heating. Do you want to mandate the usage of big windows or appease the powerful architects of Raincity?',
        'answer': '<yes or no here>',
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    13: {
        'question': 'Although wood is an excellent source of low carbon material, the deforestation of Raincity is a big controversy amongst Raincity denizens. Do you increase the production of the forestry industry?',
        'answer': '<yes or no here>',
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    14: {
        'question': 'One of our aims to lower embodied emissions is to decrease parking spaces in buildings. Do you agree with this?',
        'answer': '<yes or no here>',
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    15: {
        'question': 'The reforestation of Raincity is an immiment issue that needs to be adressed. Do you agree with mandating the planting of trees for every tree cut down?',
        'answer': true,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    16: {
        'question': 'Wood is a major export of Raincity. This is goes against the reforestation goals for the city. Do you decrease the exports of wood?',
        'answer': '<yes or no here>',
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    },
    17: {
        'question': 'As the climate grows warmer, the environment of Raincity will change. Longer summers and shorter winters will occur, resulting in an increase of innovations in farming. Do you agree with exacerbating climate change and its repurcussions in order to flourish our farming industry?',
        'answer': false,
        'consequence': '<numeric value, either good or bad, to effect eco-score and/or popularity>'
    }
};

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
    buttonClickThree.play();

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
    buttonClickThree.play();


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
    buttonClickThree.play();

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
    buttonClickThree.play();


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
    buttonClickThree.play();


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
    buttonClickThree.play();


    "use strict";
    if (suitAssetsLength === suitNum) {
        suitNum = 0;
    }
    else {
        suitNum += 1;
    }
    suitImage.setAttribute("src", suitAssets[suitNum]);
}

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
    nextButton.setAttribute('class', 'hidden');
    // Event Listener for the button to prompt the next span of dialogue during introduction
    nextButton.addEventListener('click', masterIntroDialogue);

    introDiv.appendChild(introBox);
    introDiv.appendChild(introText);
    introDiv.appendChild(nextButton);

    mainContainer.append(mainMap);
    mainContainer.append(introDiv);
    masterIntroDialogue()
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
    document.getElementById("next-dialogue-button").src = "./assets/intro_box/ContinueButtonCllicked.svg"
    buttonClickThree.play()
    setTimeout(function(){
        document.getElementById("next-dialogue-button").src = "./assets/intro_box/ContinueButtonUncllicked.svg"
        if (introDialogueArray.length === 0 && introDialogueText.length === 0) {
            document.getElementById('intro-div').remove()
            setTimeout(firstPrompt, 5000);
        } else {
            let dialogueTextBox = document.getElementById('intro-text');
            dialogueTextBox.textContent = '';
            introDialogue();
        }
    }, 50)
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

// Function for the first question prompt that appears after the intro
function firstPrompt() {
    // Toggle visiblity for this one
    let questionPromptDiv = document.createElement('div');
    questionPromptDiv.setAttribute('id', 'question-prompt-div');

    // Everything goes in here
    let questionPromptOverlay = document.createElement('div');
    questionPromptOverlay.setAttribute('id', 'question-prompt-overlay');

    // Main Dialogue UI Box
    let mainDialogueUI = document.createElement('img');
    mainDialogueUI.setAttribute('src', 'assets/dialogue_box/MainDialogueUI.svg')
    mainDialogueUI.setAttribute('id', 'question-prompt')

    // Text box for the current question / prompt
    let questionPromptText = document.createElement('p');
    questionPromptText.setAttribute('id', 'question-prompt-text');
    questionPromptText.textContent = questions[questionCounter]['question'];

    // Div for Main Character
    let mainCharacterDiv = document.createElement('div');
    mainCharacterDiv.setAttribute('id', 'main-character');

    // Body image for Main Character
    let mainCharacterBody = document.createElement('img')
    mainCharacterBody.setAttribute('src', 'assets/static_elements/charbody.svg')
    mainCharacterBody.setAttribute('id', 'main-character-body');

    // Skin image for Main Character
    let mainCharacterSkin = document.createElement('img');
    mainCharacterSkin.setAttribute('src', skinAssets[skinNum])
    mainCharacterSkin.setAttribute('id', 'main-character-skin');

    // Hair image for Main Character
    let mainCharacterHair = document.createElement('img');
    mainCharacterHair.setAttribute('src', hairAssets[hairNum])
    mainCharacterSkin.setAttribute('id', 'main-character-hair');

    // Suit image for Main Character
    let mainCharacterSuit = document.createElement('img');
    mainCharacterSuit.setAttribute('src', suitAssets[suitNum])
    mainCharacterSkin.setAttribute('id', 'main-character-suit');

    mainCharacterDiv.appendChild(mainCharacterBody);
    mainCharacterDiv.appendChild(mainCharacterSkin);
    mainCharacterDiv.appendChild(mainCharacterHair);
    mainCharacterDiv.appendChild(mainCharacterSuit);

    // Create NPC image
    let NPC = document.createElement('img');
    // change this later because it will not always be assistant
    NPC.setAttribute('id', 'assistant');
    NPC.setAttribute('src', 'assets/npc/npc1.svg');

    // Create Yes button
    let yesButton = document.createElement('img');
    yesButton.setAttribute('src', './assets/dialogue_box/buttons/YesButtonUnclicked.svg');
    yesButton.setAttribute('id', 'yes-button');
    yesButton.addEventListener('click', selectYesButton);

    // Create No button
    let noButton = document.createElement('img');
    noButton.setAttribute('src', './assets/dialogue_box/buttons/NoButtonUnclicked.svg');
    noButton.setAttribute('id', 'no-button');
    noButton.addEventListener('click', selectNoButton);

    // Append it all together
    questionPromptOverlay.appendChild(mainDialogueUI);
    questionPromptOverlay.appendChild(questionPromptText);
    questionPromptOverlay.appendChild(mainCharacterDiv);
    questionPromptOverlay.appendChild(NPC);
    questionPromptOverlay.appendChild(yesButton);
    questionPromptOverlay.appendChild(noButton);

    questionPromptDiv.appendChild(questionPromptOverlay);

    document.getElementById('container').appendChild(questionPromptDiv);
};

function selectYesButton() {
    document.getElementById('question-prompt-div').setAttribute('class', 'hidden');
    if (questions[questionCounter]['answer'] === true) {
        // correct answer
        console.log('You answered Yes; the correct answer is ' + questions[questionCounter]['answer'])
    } else {
        // wrong answer
        console.log('You answered No; the correct answer is ' + questions[questionCounter]['answer'])
    }
    questionCounter += 1
};

function selectNoButton() {
    document.getElementById('question-prompt-div').setAttribute('class', 'hidden');
    if (questions[questionCounter]['answer'] === false) {
        // correct answer
        console.log('You answered Yes; the correct answer is ' + questions[questionCounter]['answer'])
    } else {
        // wrong answer
        console.log('You answered No; the correct answer is ' + questions[questionCounter]['answer'])
    }
    questionCounter += 1
};