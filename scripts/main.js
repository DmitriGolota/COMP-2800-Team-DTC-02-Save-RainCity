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


let questionCounter = 0;

let questions = {
    0: {
        'question': 'Mayor! People have raised concerns about how boring it is to walk in some neighbourhoods. Should we increase the amount of trees and plants near sidewalks to make them more enjoyable to walk?',
        'yes-result': 'People are starting to walk more now! The less cars on the road the better! They are thrilled by your first decision as Mayor!',
        'no-result': 'People are still unmotivated to walk rather than drive. Hopefully your next decisions will be better!',
        'eco-score': 1,
        'pop-score': 1,
        'NPC-img-num': 4
    },
    1: {
        'question': "These bikers never look where they're going.. but I guess it's better than driving... Should we build more bike-only paths to help encourage cycling as a form of transportation?",
        'yes-result': 'Some of the driving population are angry to see more bikers on the road! At least there are less cars on the road!',
        'no-result': 'The driving population is pleased with your decision, however; you did not help the environment.',
        'eco-score': 1,
        'pop-score': -1,
        'NPC-img-num': 5
    },
    2: {
        'question': 'Traffic in Downtown RainCity is at an all time high and that means lots of vehicle carbon emissions! Should we charge a fee for private vehicles entering the Metro Core?',
        'yes-result': 'Drivers are not happy with your decision, but this is definitely going to reduce carbon emissions! Good work!',
        'no-result': 'Drivers are happy to continue driving wherever they please, but your decision has not reduced any carbon emissions!',
        'eco-score': 2,
        'pop-score': -3,
        'NPC-img-num': 3
    },
    3: {
        'question': 'The bus system is getting expensive with the new eco-friendly policies! Should we reduce the schedule and frequency of buses to save money?',
        'yes-result': 'Citizens of RainCity are now further discouraged to consider public transit! That was not a good move!',
        'no-result': 'Commuters are glad to keep the regular bus schedules! The budget department can kick rocks!',
        'eco-score': 1,
        'pop-score': -4,
        'NPC-img-num': 1
    },
    4: {
        'question': 'Yooo man... We gotta replant the trees dude, it is a real issue man. I love trees man. *kisses tree* Should we enforce a law that requires people to plant a tree for every tree they chop down?',
        'yes-result': 'Totally tubular, man! The more trees the better!',
        'no-result': 'That is so bogus! We are gonna run out of trees, at this rate!',
        'eco-score': 2,
        'pop-score': 2,
        'NPC-img-num': 6
    },
    5: {
        'question': 'We just got a call from Elon Musk! He is paying cities lots of DogeCoin to add more electric vehicle charging stations! Should we add more EV chargers around RainCity?',
        'yes-result': 'Woohoo, that is a lot of DogeCoin! We are starting to see more electric vehicles across the city! Nicely done!',
        'no-result': "Uh-oh, you do not want to get on Elon's bad side. It would have been a good idea to make electric vehicles more accessible too!",
        'eco-score': 2,
        'pop-score': 1,
        'NPC-img-num': 2
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
        'question': "Mayor! Still too many people are driving private vehicles unnecessarily! Should we expand our residential parking permits city-wide?",
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
    0: "./assets/hair/charhair1.png",
    1: "./assets/hair/charhair2.png",
    2: "./assets/hair/charhair3.png",
};
let hairAssetsLength = Object.keys(hairAssets).length - 1;

let skinAssets = {
    0: "./assets/skin/charskin1.png",
    1: "./assets/skin/charskin2.png",
    2: "./assets/skin/charskin3.png",
};
let skinAssetsLength = Object.keys(skinAssets).length - 1;

let suitAssets = {
    0: "./assets/suit/charsuit1.png",
    1: "./assets/suit/charsuit2.png",
    2: "./assets/suit/charsuit3.png",
};
let suitAssetsLength = Object.keys(suitAssets).length - 1;

function test() {
    console.log(hairNum)
}

function hairPrev() {
    //button movement
    document.getElementById("hairPrev").src = "./assets/buttons/arrowleftclicked.png"
    setTimeout(function () {
        document.getElementById("hairPrev").src = "./assets/buttons/arrowleftunclicked.png"
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
    document.getElementById("hairNext").src = "./assets/buttons/arrowrightclicked.png"
    setTimeout(function () {
        document.getElementById("hairNext").src = "./assets/buttons/arrowrightsunclicked.png"
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
    document.getElementById("skinPrev").src = "./assets/buttons/arrowleftclicked.png"
    setTimeout(function () {
        document.getElementById("skinPrev").src = "./assets/buttons/arrowleftunclicked.png"
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
    document.getElementById("skinNext").src = "./assets/buttons/arrowrightclicked.png"
    setTimeout(function () {
        document.getElementById("skinNext").src = "./assets/buttons/arrowrightsunclicked.png"
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
    document.getElementById("suitPrev").src = "./assets/buttons/arrowleftclicked.png"
    setTimeout(function () {
        document.getElementById("suitPrev").src = "./assets/buttons/arrowleftunclicked.png"
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
    document.getElementById("suitNext").src = "./assets/buttons/arrowrightclicked.png"
    setTimeout(function () {
        document.getElementById("suitNext").src = "./assets/buttons/arrowrightsunclicked.png"
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
    answerBox.setAttribute('src', './assets/dialogue_box/AnswerBox.png')
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
    uibar.setAttribute('src', './assets/status_bar/ui_bar.png');

    let uiecoscore = document.createElement('img');
    uiecoscore.setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.png');
    uiecoscore.setAttribute('id', 'uiEcoScore');

    let uipopscore = document.createElement('img');
    uipopscore.setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.png');
    uipopscore.setAttribute('id', 'uiPopScore')

    let introDiv = document.createElement('div');
    introDiv.setAttribute('id', 'intro-div');

    let introBox = document.createElement('img');
    introBox.setAttribute('src', './assets/intro_box/MainBox.png')
    introBox.setAttribute('id', 'intro-box');

    let introText = document.createElement('p');
    introText.setAttribute('id', 'intro-text');

    let nextButton = document.createElement('img');
    nextButton.setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.png');
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
    document.getElementById("next-dialogue-button").src = "./assets/intro_box/ContinueButtonCllicked.png"
    buttonClickOne.play()
    setTimeout(function () {
        document.getElementById("next-dialogue-button").src = "./assets/intro_box/ContinueButtonUncllicked.png"
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
    setTimeout('introDialogue()', 25);
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
    mainDialogueUI.setAttribute('src', 'assets/dialogue_box/MainDialogueUI.png')
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
    mainCharacterBody.setAttribute('src', 'assets/static_elements/charbody.png')
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
    NPC.setAttribute('src', 'assets/npc/npc4.png');

    // Create Yes button
    let yesButton = document.createElement('img');
    yesButton.setAttribute('src', './assets/dialogue_box/buttons/YesButtonUnclicked.png');
    yesButton.setAttribute('id', 'yes-button');
    yesButton.addEventListener('click', selectYesButton);

    // Create No button
    let noButton = document.createElement('img');
    noButton.setAttribute('src', './assets/dialogue_box/buttons/NoButtonUnclicked.png');
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
    document.getElementById('yes-button').setAttribute('src', './assets/dialogue_box/buttons/YesButtonClicked.png')
    buttonClickOne.play();
    setTimeout(function () {
        document.getElementById('question-prompt-div').setAttribute('class', 'hidden');
        buttonClickOne.play();
        document.getElementById('answerBoxText').textContent = questions[questionCounter]['yes-result']
        document.getElementById('yes-button').setAttribute('src', './assets/dialogue_box/buttons/YesButtonUnclicked.png')
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

        document.getElementById('uiEcoScore').setAttribute('src', './assets/eco_score/eco_score' + ecoScore + '.png');
        document.getElementById('uiPopScore').setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.png');

        setTimeout(displayAnswerBox, 1000);

        questionCounter += 1

        // Change the NPC to next NPC image
        document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[questionCounter]['NPC-img-num'] + ".png")

        // Change the question text to the next question
        document.getElementById('question-prompt-text').textContent = questions[questionCounter]['question'];


        setTimeout(nextQuestionPrompt, 11000);
    }, 50)
};

function selectNoButton() {
    document.getElementById('no-button').setAttribute('src', './assets/dialogue_box/buttons/NoButtonClicked.png')
    setTimeout(function () {

        document.getElementById('question-prompt-div').setAttribute('class', 'hidden');
        buttonClickOne.play();
        document.getElementById('answerBoxText').textContent = questions[questionCounter]['no-result']
        document.getElementById('no-button').setAttribute('src', './assets/dialogue_box/buttons/NoButtonUnclicked.png')
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

        document.getElementById('uiEcoScore').setAttribute('src', './assets/eco_score/eco_score' + ecoScore + '.png');
        document.getElementById('uiPopScore').setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.png');

        setTimeout(displayAnswerBox, 1000);

        questionCounter += 1

        // Change the NPC to correct NPC image
        document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[questionCounter]['NPC-img-num'] + ".png")

        // Change the question to the next question
        document.getElementById('question-prompt-text').textContent = questions[questionCounter]['question'];

        setTimeout(nextQuestionPrompt, 11000);
    }, 50)

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
    if (questionCounter === 6 || popularityScore === 0) {
        // end game
        endGameSequence();
    } else {
        boxPopAudioOne.play();
        document.getElementById('question-prompt-div').setAttribute('class', 'visible');
    }
};

function endGameSequence() {
    // Remove everything
    let endGameScore = (popularityScore + ecoScore) * 69;
    setTimeout(() => {
        document.getElementById('container').remove();

        let endGameBox = document.createElement('img');
        endGameBox.setAttribute('id', 'endGameBox');
        endGameBox.setAttribute('src', './assets/end_game_box/EndGameBox.png');

        let gameOverText = document.createElement('img');
        gameOverText.setAttribute('id', 'gameOverText');
        gameOverText.setAttribute('src', './assets/end_game_box/game_over_anim/GameOver1.png')

        let endGameScoreText = document.createElement('p');
        endGameScoreText.textContent = '' + endGameScore;
        endGameScoreText.setAttribute('id', 'endGameScoreText');

        let returnButton = document.createElement('img');
        returnButton.setAttribute('id', 'returnButton');
        returnButton.setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.png');
        returnButton.setAttribute('onclick', 'window.location.assign("index.html")');

        document.body.append(endGameBox);
        document.body.append(gameOverText);
        document.body.append(endGameScoreText);
        document.body.append(returnButton);
    }, 100);



    setInterval(function () {
        animateGameOver();
    }, 100);
};

// Main Map Animation
/*
mainMapFrames = {
    "0": "./assets/main_map/mainmap1.png",
    "1": "./assets/main_map/mainmap2.png",
    "2": "./assets/main_map/mainmap3.png",
    "3": "./assets/main_map/mainmap4.png",
    "4": "./assets/main_map/mainmap5.png",
    "5": "./assets/main_map/mainmap6.png",
    "6": "./assets/main_map/mainmap7.png",
    "7": "./assets/main_map/mainmap8.png",
    "8": "./assets/main_map/mainmap9.png",
    "9": "./assets/main_map/mainmap10.png",
    "10": "./assets/main_map/mainmap11.png",
    "11": "./assets/main_map/mainmap12.png",
    "12": "./assets/main_map/mainmap13.png",
    "13": "./assets/main_map/mainmap14.png",
    "14": "./assets/main_map/mainmap15.png",
    "15": "./assets/main_map/mainmap16.png",
    "16": "./assets/main_map/mainmap17.png",
    "17": "./assets/main_map/mainmap18.png",
    "18": "./assets/main_map/mainmap19.png",
    "19": "./assets/main_map/mainmap20.png",
    "20": "./assets/main_map/mainmap21.png",
    "21": "./assets/main_map/mainmap22.png",
    "22": "./assets/main_map/mainmap23.png",
    "23": "./assets/main_map/mainmap24.png",
    "24": "./assets/main_map/mainmap25.png",
    "25": "./assets/main_map/mainmap26.png",
    "26": "./assets/main_map/mainmap27.png",
    "27": "./assets/main_map/mainmap28.png",
    "28": "./assets/main_map/mainmap29.png",
    "29": "./assets/main_map/mainmap30.png",
    "30": "./assets/main_map/mainmap31.png",
    "31": "./assets/main_map/mainmap32.png",
    "32": "./assets/main_map/mainmap33.png",
    "33": "./assets/main_map/mainmap34.png",
    "34": "./assets/main_map/mainmap35.png",
    "35": "./assets/main_map/mainmap36.png",
    "36": "./assets/main_map/mainmap37.png",
    "37": "./assets/main_map/mainmap38.png",
    "38": "./assets/main_map/mainmap39.png",
    "39": "./assets/main_map/mainmap40.png",
    
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
    "0": "./assets/end_game_box/game_over_anim/GameOver1.png",
    "1": "./assets/end_game_box/game_over_anim/GameOver2.png",
    "2": "./assets/end_game_box/game_over_anim/GameOver3.png",
    "3": "./assets/end_game_box/game_over_anim/GameOver4.png",
    "4": "./assets/end_game_box/game_over_anim/GameOver5.png",
    "5": "./assets/end_game_box/game_over_anim/GameOver6.png",
    "6": "./assets/end_game_box/game_over_anim/GameOver7.png",
    "7": "./assets/end_game_box/game_over_anim/GameOver8.png",
    "8": "./assets/end_game_box/game_over_anim/GameOver9.png",
    "9": "./assets/end_game_box/game_over_anim/GameOver10.png",
    "10": "./assets/end_game_box/game_over_anim/GameOver11.png",
    "11": "./assets/end_game_box/game_over_anim/GameOver12.png",
    "12": "./assets/end_game_box/game_over_anim/GameOver13.png",
    "13": "./assets/end_game_box/game_over_anim/GameOver14.png",
    "14": "./assets/end_game_box/game_over_anim/GameOver15.png",
    "15": "./assets/end_game_box/game_over_anim/GameOver16.png",
    "16": "./assets/end_game_box/game_over_anim/GameOver17.png",
    "17": "./assets/end_game_box/game_over_anim/GameOver18.png",
    "18": "./assets/end_game_box/game_over_anim/GameOver19.png",
    "19": "./assets/end_game_box/game_over_anim/GameOver20.png",
    "20": "./assets/end_game_box/game_over_anim/GameOver21.png",
    "21": "./assets/end_game_box/game_over_anim/GameOver22.png",
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
