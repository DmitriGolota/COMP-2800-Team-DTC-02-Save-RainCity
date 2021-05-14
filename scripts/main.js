let buttonClickOne = document.getElementById('buttonClickOne');
let boxPopAudioOne = document.getElementById('boxPopAudioOne');
let boxPopAudioThree = document.getElementById('boxPopAudioThree');

/*jshint esversion: 6 */
document.getElementById('char-customization').addEventListener('click', function () {
    var audio = document.getElementById('myaudio');
    audio.play();
}, true);

// Score for player
let popularityScore = 10;
let ecoScore = 0;

let endGameScore = (popularityScore * ecoScore) * 420.69;

let questionCounter = 0;

let questions = {
    0: {
        'question': 'Mayor! People have been defacing trees in the parks! Should we increase the amount of plantlife near sidewalks to make it more enjoyable to walk?',
        'yes-result': 'That was a good choice!',
        'no-result': 'That was a bad choice!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    1: {
        'question': "These bikers never look where they're going.. but I guess it's better than driving... Do you think that building more bike-only paths will help further encourage cycling as a form of transportation?",
        'yes-result': 'The majority of the driving population are sick of bikers! They disagree with your decision, but the environment is looking better.',
        'no-result': 'The driving population is pleased with your decision, though it does hurt the environment.',
        'eco-score': 1,
        'pop-score': -1,
        'NPC-img-num': 2
    },
    2: {
        'question': 'Traffic in Downtown RainCity is at an all time high and that means lots of vehicle carbon emissions! Do you want to charge a fee for private vehicles entering the Metro Core?',
        'yes-result': 'The driving population is furious at your decision!',
        'no-result': 'The drivers are thankful for your decision.',
        'eco-score': 2,
        'pop-score': -4,
        'NPC-img-num': 3
    },
    3: {
        'question': 'The bus system is getting expensive with the new green requirements! Should we reduce the schedule and frequency of buses to save money?',
        'yes-result': 'The masses who commute on a daily basis are furious at your decision!',
        'no-result': 'Commuters are happy about the regular bus schedules, but the environment continues to deteriorate.',
        'eco-score': 1,
        'pop-score': -4,
        'NPC-img-num': 4
    },
    4: {
        'question': 'Back in my day we used to walk 10km to get to work... Do you want to offer incentives for employers that encourage sustainable transportation such as walking, cycling, and public transit to reduce vehicle pollution?',
        'answer': true,
        'yes-result': 'The employees, employers, and environment are happy with this decision!',
        'no-result': 'Bummer, that was a bad choice.',
        'eco-score': 2,
        'pop-score': 2,
        'NPC-img-num': 5
    },
    5: {
        'question': 'Mayor! Still too many people are driving private vehicles unnecessarily! Should we expand our residential parking permits city-wide?',
        'answer': true,
        'good-result': 'The environment is thriving, but the people are angry.',
        'bad-result': 'The people are happy, but at what cost.',
        'eco-score': 2,
        'pop-score': -2,
        'NPC-img-num': 6
    },
    6: {
        'question': 'Wow! With such an increase in public transit use, we want to increase the ticket prices for buses and trains from $2 to $4. Do you agree to this plan?',
        'answer': false,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    7: {
        'question': 'People are complaining about the lack of parking in Downtown RainCity! Can we pave over a greenspace to build a parkade?',
        'answer': false,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    8: {
        'question': "We just got a call from Elon Musk! He's paying cities lots of DogeCoin to add more electric vehicle charging stations! Should we?",
        'answer': true,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    9: {
        'question': 'Mayor, is it just me or is it hard to breathe downtown? To further discourage non-electric private vehicles, we want to add an additional carbon pollution surcharge to parking permits for non-electric vehicles. Do you agree to this plan?',
        'answer': true,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    10: {
        'question': 'Over 3 quarters of carbon emission from building operations can be eliminated by switching natural gas to electricity or renewable natural gas for space and water heating. Do you think it is feasible to require the majority of new home constructions to use electrical appliances for heating and hot water.',
        'answer': true,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    11: {
        'question': 'Do you agree to issue fines to building owners that still operate on unrenweable natural gas?',
        'answer': true,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    12: {
        'question': 'The Architechture Association of Raincity hates big windows; they believe it is a faux-pas. Bigger windows allows for improved air flow which allows for reduced energy usage for heating. Do you want to mandate the usage of big windows or appease the powerful architects of Raincity?',
        'answer': '<yes or no here>',
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    13: {
        'question': "Mayor, Tim's Mill just called and they want to increase their wood production. Wood is a great low carbon material, but the citizens really hate deforestation. Should we do it?",
        'answer': '<yes or no here>',
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    14: {
        'question': 'One of our aims to lower embodied emissions is to decrease parking spaces in buildings. Do you agree with this?',
        'answer': '<yes or no here>',
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    15: {
        'question': 'Yooo man... We gotta replant the trees dude, it a real issue man. The trees are gonna save us from the terrible carbon pollution bro. I love trees man. *Kisses Tree*',
        'answer': true,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    16: {
        'question': "Bro, exporting out massive amounts of wood is totally not cool man. This totally goes against the grain of the trees dude. Let's export less so we can save our tree brethren. *Kisses you*",
        'answer': '<yes or no here>',
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
    },
    17: {
        'question': 'Climate change is not cool at all man. But the changing temperatures and seasons could make the farmining industry innovate more dude... As a vegan, I think the farming industry is hella cool... We should ignore climate change to help save the cows *Kisses cow*',
        'answer': false,
        'good-result': 'You made the correct decision!',
        'bad-result': 'You made the wrong decision!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 1
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
    buttonClickOne.play();

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
    buttonClickOne.play();


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
    buttonClickOne.play();

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
    buttonClickOne.play();


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
    buttonClickOne.play();


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
    buttonClickOne.play();


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

    buttonClickOne.play()
    // Populate introduction scene

    // Play boxPopAudio
    boxPopAudioOne.play()

    // Begin main soundtrack    
    var audioMain = document.getElementById('mainSoundTrack');
    audioMain.play()

    let mainContainer = document.getElementById('container');

    // Create Map and set as background
    let mainMap = document.createElement('img');
    mainMap.setAttribute('src', './assets/mainmap.gif');
    mainMap.setAttribute('id', 'game-map');
    
    
    // Manual Animation Sequence
    /*
    setInterval(function () {
        animateMainMap();
    }, 300);
    */


    // Create the answer box for consequences of decisions
    let answerBox = document.createElement('img');
    answerBox.setAttribute('src', './assets/dialogue_box/AnswerBox.svg')
    answerBox.setAttribute('id', 'answerBox');
    answerBox.setAttribute('class', 'hidden');

    // Create the text box for the answer box
    let answerBoxText = document.createElement('p');
    answerBoxText.setAttribute('id', 'answerBoxText');
    answerBoxText.setAttribute('class', 'hidden');

    // Create UI Bar and set initial score
    let uibarcontainer = document.createElement('div');
    uibarcontainer.setAttribute('id', 'ui-container');

    let uibar = document.createElement('img');
    uibar.setAttribute('src', './assets/status_bar/ui_bar.svg');

    let uiecoscore = document.createElement('img');
    uiecoscore.setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.svg');
    uiecoscore.setAttribute('id', 'uiEcoScore');

    let uipopscore = document.createElement('img');
    uipopscore.setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.svg');
    uipopscore.setAttribute('id', 'uiPopScore')

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

    uibarcontainer.appendChild(uibar);
    uibarcontainer.appendChild(uipopscore);
    uibarcontainer.appendChild(uiecoscore);

    mainContainer.append(mainMap);
    mainContainer.append(answerBox);
    mainContainer.append(answerBoxText);
    mainContainer.append(uibarcontainer);
    mainContainer.append(introDiv);
    
    masterIntroDialogue();

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
    buttonClickOne.play()
    setTimeout(function () {
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
    setTimeout('introDialogue()', 5);
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
    boxPopAudioOne.play();
};

function selectYesButton() {
    document.getElementById('question-prompt-div').setAttribute('class', 'hidden');
    buttonClickOne.play();
    document.getElementById('answerBoxText').textContent = questions[questionCounter]['yes-result']
    // Reflect on eco score
    ecoScore += questions[questionCounter]['eco-score'];
    if (ecoScore >= 10) {
        ecoScore = 10;
    }
    if (ecoScore <= 0) {
        ecoScore = 0;
    }
    // Reflect popularity score
    popularityScore += questions[questionCounter]['pop-score'];
    if (popularityScore >= 10) {
        popularityScore = 10;
    }
    if (popularityScore <= 0) {
        popularityScore = 0;
    }
    document.getElementById('uiEcoScore').setAttribute('src', './assets/eco_score/eco_score' + ecoScore + '.svg');
    document.getElementById('uiPopScore').setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.svg');
    setTimeout(displayAnswerBox, 1000);
    questionCounter += 1
    setTimeout(nextQuestionPrompt, 11000);
};

function selectNoButton() {
    document.getElementById('question-prompt-div').setAttribute('class', 'hidden');
    buttonClickOne.play();
    document.getElementById('answerBoxText').textContent = questions[questionCounter]['no-result']
    // Reflect on eco score
    ecoScore -= questions[questionCounter]['eco-score'];
    if (ecoScore >= 10) {
        ecoScore = 10;
    }
    if (ecoScore <= 0) {
        ecoScore = 0;
    }
    // Reflect popularity score
    popularityScore -= questions[questionCounter]['pop-score'];
    if (popularityScore >= 10) {
        popularityScore = 10;
    }
    if (popularityScore <= 0) {
        popularityScore = 0;
    }
    document.getElementById('uiEcoScore').setAttribute('src', './assets/eco_score/eco_score' + ecoScore + '.svg');
    document.getElementById('uiPopScore').setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.svg');
    setTimeout(displayAnswerBox, 1000);
    questionCounter += 1
    setTimeout(nextQuestionPrompt, 11000);
};

function displayAnswerBox() {
    boxPopAudioThree.play();
    document.getElementById('answerBox').setAttribute('class', 'visible');
    document.getElementById('answerBoxText').setAttribute('class', 'visible')
    setTimeout(hideAnswerBox, 5000);
};

function hideAnswerBox() {
    document.getElementById('answerBox').setAttribute('class', 'hidden');
    document.getElementById('answerBoxText').setAttribute('class', 'hidden')
};

function nextQuestionPrompt() {
    boxPopAudioOne.play();
    document.getElementById('question-prompt-div').setAttribute('class', 'visible');

    // Change the question to the next question
    document.getElementById('question-prompt-text').textContent = questions[questionCounter]['question'];

    // Change the NPC to correct NPC image
    document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[questionCounter]['NPC-img-num'] + ".svg")
    
    if (questionCounter === 5 || popularityScore === 0) {
        // end game
        endGameSequence();
    }
};

function endGameSequence() {
    // Remove everything
    document.getElementById('container').remove();

    let endGameBox = document.createElement('img');
    endGameBox.setAttribute('id', 'endGameBox');
    endGameBox.setAttribute('src', './assets/end_game_box/EndGameBox.svg');

    let gameOverText = document.createElement('img');
    gameOverText.setAttribute('id', 'gameOverText');
    gameOverText.setAttribute('src', './assets/end_game_box/game_over_anim/GameOver1.svg')

    let returnButton = document.createElement('img');
    returnButton.setAttribute('id', 'returnButton');
    returnButton.setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.svg');
    returnButton.setAttribute('onclick', 'window.location.assign("index.html")');

    document.body.append(endGameBox);
    document.body.append(gameOverText);
    document.body.append(returnButton);


    setInterval(function () {
        animateGameOver();
    }, 100);
};

// Main Map Animation
/*
mainMapFrames = {
    "0": "./assets/main_map/mainmap1.svg",
    "1": "./assets/main_map/mainmap2.svg",
    "2": "./assets/main_map/mainmap3.svg",
    "3": "./assets/main_map/mainmap4.svg",
    "4": "./assets/main_map/mainmap5.svg",
    "5": "./assets/main_map/mainmap6.svg",
    "6": "./assets/main_map/mainmap7.svg",
    "7": "./assets/main_map/mainmap8.svg",
    "8": "./assets/main_map/mainmap9.svg",
    "9": "./assets/main_map/mainmap10.svg",
    "10": "./assets/main_map/mainmap11.svg",
    "11": "./assets/main_map/mainmap12.svg",
    "12": "./assets/main_map/mainmap13.svg",
    "13": "./assets/main_map/mainmap14.svg",
    "14": "./assets/main_map/mainmap15.svg",
    "15": "./assets/main_map/mainmap16.svg",
    "16": "./assets/main_map/mainmap17.svg",
    "17": "./assets/main_map/mainmap18.svg",
    "18": "./assets/main_map/mainmap19.svg",
    "19": "./assets/main_map/mainmap20.svg",
    "20": "./assets/main_map/mainmap21.svg",
    "21": "./assets/main_map/mainmap22.svg",
    "22": "./assets/main_map/mainmap23.svg",
    "23": "./assets/main_map/mainmap24.svg",
    "24": "./assets/main_map/mainmap25.svg",
    "25": "./assets/main_map/mainmap26.svg",
    "26": "./assets/main_map/mainmap27.svg",
    "27": "./assets/main_map/mainmap28.svg",
    "28": "./assets/main_map/mainmap29.svg",
    "29": "./assets/main_map/mainmap30.svg",
    "30": "./assets/main_map/mainmap31.svg",
    "31": "./assets/main_map/mainmap32.svg",
    "32": "./assets/main_map/mainmap33.svg",
    "33": "./assets/main_map/mainmap34.svg",
    "34": "./assets/main_map/mainmap35.svg",
    "35": "./assets/main_map/mainmap36.svg",
    "36": "./assets/main_map/mainmap37.svg",
    "37": "./assets/main_map/mainmap38.svg",
    "38": "./assets/main_map/mainmap39.svg",
    "39": "./assets/main_map/mainmap40.svg",
    
}
let mainmapframe = 0
function animateMainMap() {
    let mainMap = document.getElementById('game-map');
    if (mainmapframe == 38) {
        mainmapframe = 0;
        mainMap.setAttribute('src', mainMapFrames[mainmapframe])
    } else {
        mainmapframe += 1
        mainMap.setAttribute('src', mainMapFrames[mainmapframe])
    }
};
*/


// Game Over Animation
gameOverFrames = {
    "0": "./assets/end_game_box/game_over_anim/GameOver1.svg",
    "1": "./assets/end_game_box/game_over_anim/GameOver2.svg",
    "2": "./assets/end_game_box/game_over_anim/GameOver3.svg",
    "3": "./assets/end_game_box/game_over_anim/GameOver4.svg",
    "4": "./assets/end_game_box/game_over_anim/GameOver5.svg",
    "5": "./assets/end_game_box/game_over_anim/GameOver6.svg",
    "6": "./assets/end_game_box/game_over_anim/GameOver7.svg",
    "7": "./assets/end_game_box/game_over_anim/GameOver8.svg",
    "8": "./assets/end_game_box/game_over_anim/GameOver9.svg",
    "9": "./assets/end_game_box/game_over_anim/GameOver10.svg",
    "10": "./assets/end_game_box/game_over_anim/GameOver11.svg",
    "11": "./assets/end_game_box/game_over_anim/GameOver12.svg",
    "12": "./assets/end_game_box/game_over_anim/GameOver13.svg",
    "13": "./assets/end_game_box/game_over_anim/GameOver14.svg",
    "14": "./assets/end_game_box/game_over_anim/GameOver15.svg",
    "15": "./assets/end_game_box/game_over_anim/GameOver16.svg",
    "16": "./assets/end_game_box/game_over_anim/GameOver17.svg",
    "17": "./assets/end_game_box/game_over_anim/GameOver18.svg",
    "18": "./assets/end_game_box/game_over_anim/GameOver19.svg",
    "19": "./assets/end_game_box/game_over_anim/GameOver20.svg",
    "20": "./assets/end_game_box/game_over_anim/GameOver21.svg",
    "21": "./assets/end_game_box/game_over_anim/GameOver22.svg",
}

let goanimframe = 0;

function animateGameOver() {
    if (goanimframe == 21) {
        goanimframe = 0;
        gameOverText.setAttribute('src', gameOverFrames[goanimframe])
    } else {
        goanimframe += 1
        gameOverText.setAttribute('src', gameOverFrames[goanimframe])
    }
};
