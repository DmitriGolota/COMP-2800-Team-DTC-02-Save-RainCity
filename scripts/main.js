 let buttonClickOne = document.getElementById('buttonClickOne');
let boxPopAudioOne = document.getElementById('boxPopAudioOne');
let boxPopAudioThree = document.getElementById('boxPopAudioThree');
var mainTheme = document.getElementById('mainSoundTrack');

/*jshint esversion: 6 */
document.getElementById('char-customization').addEventListener('click', function () {
    var audio = document.getElementById('myaudio');
    audio.play();
}, true);

// Score for player
let popularityScore = 10;
let ecoScore = 0;
let prevEcoScore = ecoScore;
let prevPopularityScore = popularityScore;
// Percentage of correct answers out of 20 questions
let mayoralRating = 0;

let questionCounter = 0;
//If correct-point is 1, the yes-result is correct. If correct-point is 0, the no-result is correct.
let questions = {
    0: {
        'question': 'Mayor! People have raised concerns about how boring it is to walk in some neighbourhoods. Should we increase the amount of trees and plants near sidewalks to make them more enjoyable to walk?',
        'yes-result': 'People are starting to walk more now! The less cars on the road the better! They are thrilled by your first decision as Mayor!',
        'no-result': 'People are still unmotivated to walk rather than drive. Hopefully your next decisions will be better!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 4
    },
    1: {
        'question': "These bikers never look where they're going.. but I guess it's better than driving... Should we build more bike-only paths to encourage more cycling?",
        'yes-result': 'Some of the driving population are angry to see more bikers on the road! At least there are less cars on the road!',
        'no-result': 'The driving population is pleased with your decision, however; you did not help the environment.',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 5
    },
    2: {
        'question': 'Traffic in Downtown RainCity is at an all time high and that means lots of vehicle carbon emissions! Should we charge a fee for private vehicles entering the Metro Core?',
        'yes-result': 'Drivers are not happy with your decision, but this is definitely going to reduce carbon emissions! Good work!',
        'no-result': 'Drivers are happy to continue driving wherever they please, but your decision has not reduced any carbon emissions!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 3
    },
    3: {
        'question': 'The bus system is getting expensive with the new eco-friendly policies! Should we reduce the schedule and frequency of buses to save money?',
        'yes-result': 'Citizens of RainCity are now further discouraged to consider public transit! That was not a good move!',
        'no-result': 'Commuters are glad to keep the regular bus schedules! The budget department can kick rocks!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    4: {
        'question': 'Yooo man... We gotta replant the trees dude. Should we enforce a law that requires people to plant a tree for every tree they chop down?',
        'yes-result': 'Totally tubular, man! The more trees the better!',
        'no-result': 'That is so bogus! We are gonna run out of trees, at this rate!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 6
    },
    5: {
        'question': 'We just got a call from Elon Musk! He is paying cities lots of DogeCoin to add more electric vehicle charging stations! Should we add more EV chargers around RainCity?',
        'yes-result': 'Woohoo, that is a lot of DogeCoin! We are starting to see more electric vehicles across the city! Nicely done!',
        'no-result': "Uh-oh, you do not want to get on Elon's bad side. It would have been a good idea to make electric vehicles more accessible too!",
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 2
    },
    6: {
        'question': 'Wow! So many people have started using public transit for their commutes! Should we increase the ticket price for buses and trains from $2 to $4?',
        'yes-result': 'People are starting to walk more now! The less cars on the road the better! They are thrilled by your first decision as Mayor!',
        'no-result': 'People are still unmotivated to walk rather than drive. Hopefully your next decisions will be better!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    7: {
        'question': 'People are complaining about the lack of parking in Downtown RainCity! Can we pave over a greenspace to build a parkade?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    8: {
        'question': "Mayor! Still too many people are driving private vehicles unnecessarily! Should we expand our residential parking permits city-wide?",
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    9: {
        'question': 'Mayor, is it just me or is it hard to breathe downtown? Should we add an additional carbon pollution surcharge to parking permits for non-electric vehicles?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    10: {
        'question': 'A lot of carbon emissions can be eliminated by switching from natural gas to electricity for household heating. Should we require new home constructions to use electrical appliances for heating and hot water?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    11: {
        'question': 'We need to do something drastic to reduce our building carbon emissions. Should we begin issuing fines to building owners that still operate with non-renewable natural gas?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    12: {
        'question': 'The Landlords Association of Raincity hates big windows; they believe they are too expensive! Bigger windows allows for improved air flow which reduces energy used for household heating. Do you want to mandate the usage of big windows or appease the landlords of Raincity?',
        'yes-result': 'Let there be light! Citizens are breathing a breathe of fresh air!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    13: {
        'question': "Mayor, Tim's Mill just called and they want to expand into old-growth forests. This could make us a lot of money! Should we start chopping?",
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    14: {
        'question': 'Apartment dwellers in RainCity are asking for more parking spots within building parkades. Should we increase the maximum parking limit for residential buildings?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'The citizens are not happy with their lack of parking. However, introducing a parking maximum is a good idea! We should focus on reducing the need for cars overall!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    15: {
        'question': 'Drivers are complaining about the bright streetlamps! Should we get rid of some streetlamps to accommodate late-night drivers?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'Residents no longer feel safe walking at night! Removing streetlamps is taking a step backward in our plan for creating more walkable neighborhoods.',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    16: {
        'question': "Exporting out massive amounts of wood is totally not the vibe, man. This goes against the grain of the trees, dude. Should we reduce the amount of trees we export?",
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    17: {
        'question': 'Climate change is so not cool, man! But the warmer weather is really helping my tan! Should we ignore climate change so I can lay on the beach more often?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    18: {
        'question': 'Mayor, this is a marketing disaster! Only 7% of RainCity citizens know what our biggest carbon impact really is! Should we increase our marketing budget to spread awareness about carbon footprints?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    },
    19: {
        'question': 'Recent studies have shown that people who do not depend on a car are healthier and happier! Should we increase funding and promote Walk/Bike-To-Work programs for businesses?',
        'yes-result': 'You made the correct decision!',
        'no-result': 'You made the wrong decision!',
        'airQualityRating': 1,
        'emissionsRating': 1,
        'energyRating': 1,
        'transportRating': 1,
        'walkabilityRating': 1,
        'governmentActionRating': 1,
        'environmentRestorationRating': 1,
        'eco-score': 1,
        'pop-score': 1,
        'correct-point': 1,
        'NPC-img-num': 1
    }
};

//Extra metrics that show players end game stats
//Shows how much they improved a quality of the city's greenness as a rating
//Example - A player at the end game screen can see that they increased the city's airQualityRating by 30% during their time as mayor
let airQualityRating = 0;
let emissionsRating = 0;
let energyRating = 0;
let transportRating = 0;
let walkabilityRating = 0;
let governmentActionRating = 0;
let environmentRestorationRating = 0;

//Creates an array of random integers from 0-9
//For easy questions
function getRandomIntegersEasy() {
    var arr = [];
    while (arr.length < 10) {
        var randInt = Math.floor(Math.random() * 10);
        if (arr.indexOf(randInt) === -1) arr.push(randInt);
    }
    return arr;
}
var arrOfRandomIntegersEasy = getRandomIntegersEasy();

//Creates an array of random integers from 10-19
//For hard questions
function getRandomIntegersHard() {
    var arr = [];
    while (arr.length < 10) {
        var randInt = Math.floor(Math.random() * 10) + 10;
        if (arr.indexOf(randInt) === -1) arr.push(randInt);
    }
    return arr;
}
var arrOfRandomIntegersHard = getRandomIntegersHard();

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


// Door Animation Function
function updateMayorbg(){
    document.getElementById('mayorbg').setAttribute('src', './assets/mayorsofficebg/mayorsoffice2.png')
}

function doorAnimate1(){
    document.getElementById('char-customization').remove();

    setTimeout (function(){
        setTimeout(updateMayorbg, 1000)
        var doorsound = document.getElementById('doorsound');
        var audio = document.getElementById('myaudio');
        audio.pause();
        doorsound.play();
        setTimeout(doorAnimate2, 2000)
        setTimeout(doorAnimate3, 2700)
    , 1000})

}
function doorAnimate2(){
    document.getElementById('mayorbg').setAttribute('src', './assets/mayorsofficebg/mayorsoffice3.png')
    var footstep = document.getElementById('footstep');
    footstep.play();
    setTimeout(intro, 2000)
}

function doorAnimate3(){
    document.getElementById('mayorbg').setAttribute('src', './assets/mayorsofficebg/mayorsoffice4.png')
}


// Finish char customization and move onto intro
document.getElementById('save-button').addEventListener('click', function () {

    setTimeout(doorAnimate1, 100)
    
});

// Show art work easter egg

document.getElementById('artbutton').addEventListener('click', function(){
    let art = document.createElement('img');
    art.setAttribute('src', "./assets/end_game_box/gameoverscreenart.png");
    art.setAttribute('id', 'bcartwork');

    boxPopAudioOne.play()
    let container = document.getElementById('container')
    container.appendChild(art);

    art.addEventListener('click', function(){
        art.remove()
    })

})


function intro(){
    


    // Delete char customization
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
    mainMap.setAttribute('src', './assets/main_map/mainmap.gif');
    mainMap.setAttribute('id', 'game-map');
    mainMap.setAttribute('class', 'fade-in-image');

    // Create the answer box for consequences of decisions
    let answerBox = document.createElement('img');
    answerBox.setAttribute('src', './assets/intro_box/MainBox.png')
    answerBox.setAttribute('id', 'answerBox');
    answerBox.setAttribute('class', 'hidden');

    // Create the text box for the answer box
    let answerBoxText = document.createElement('p');
    answerBoxText.setAttribute('id', 'answerBoxText');
    answerBoxText.setAttribute('class', 'hidden');

    // Create the continue button for the answer box
    let answerBoxButton = document.createElement('img');
    answerBoxButton.setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.png')
    answerBoxButton.setAttribute('id', 'answerBoxButton');
    answerBoxButton.setAttribute('class', 'hidden');
    answerBoxButton.addEventListener('click', continueAnswerBox)

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

    // Insert image of current term
    let currentTermImage = document.createElement('img');
    currentTermImage.setAttribute('src', './assets/dialogue_box/TermOne.png');
    currentTermImage.setAttribute('id', 'currentTermImage');

    // Introduction stuff here
    let introDiv = document.createElement('div');
    introDiv.setAttribute('id', 'intro-div');
    introDiv.setAttribute('class', 'hidden');

    let introBox = document.createElement('img');
    introBox.setAttribute('src', './assets/intro_box/MainBox.png')
    introBox.setAttribute('id', 'intro-box');

    let introText = document.createElement('p');
    introText.setAttribute('id', 'intro-text');

    let nextButton = document.createElement('img');
    nextButton.setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.png');
    nextButton.setAttribute('id', 'next-dialogue-button');
    nextButton.setAttribute('class', 'hidden');

    //Easter Egg Content
    let whaleClickable = document.createElement('img');
    whaleClickable.setAttribute('id', 'whaleSoundButton');
    whaleClickable.setAttribute('src', './assets/eastereggtransparent.png')

    let shipClickable = document.createElement('img');
    shipClickable.setAttribute('id', 'shipSoundButton');
    shipClickable.setAttribute('src', './assets/eastereggtransparent.png')

    let duckClickable = document.createElement('img');
    duckClickable.setAttribute('id', 'duckSoundButton');
    duckClickable.setAttribute('src', './assets/eastereggtransparent.png')

    // Event Listener for the button to prompt the next span of dialogue during introduction
    nextButton.addEventListener('click', masterIntroDialogue);

    introDiv.appendChild(introBox);
    introDiv.appendChild(introText);
    introDiv.appendChild(nextButton);

    uibarcontainer.appendChild(uibar);
    uibarcontainer.appendChild(uipopscore);
    uibarcontainer.appendChild(uiecoscore);

    mainContainer.append(mainMap);
    mainContainer.append(whaleClickable);
    mainContainer.append(duckClickable);
    mainContainer.append(shipClickable);
    mainContainer.append(answerBox);
    mainContainer.append(answerBoxText);
    mainContainer.append(answerBoxButton);
    mainContainer.append(currentTermImage);
    mainContainer.append(uibarcontainer);
    mainContainer.append(introDiv);
    
    // remove mayor background here for smooth transition
    document.getElementById('mayorbg').remove();

    // Easter Eggs
    document.getElementById('whaleSoundButton').addEventListener('click', function () {
        let whalenoise = document.getElementById('whaleSound')
        whalenoise.play();
        whaleClicked = true;
        displayEasterEggFinal()
    })

    document.getElementById('duckSoundButton').addEventListener('click', function () {
        let ducknoise = document.getElementById('duckSound')
        ducknoise.play();
        duckClicked = true;
        displayEasterEggFinal()
    })

    document.getElementById('shipSoundButton').addEventListener('click', function () {
        let shipnoise = document.getElementById('shipHornSound')
        shipnoise.play();
        shipClicked = true;
        displayEasterEggFinal()
    })

    setTimeout(masterIntroDialogue, 3000)
}

// GLOBAL VARIABLES  

//Easter Egg State
whaleClicked = false;
duckClicked = false;
shipClicked = false;

// Master Easter Egg
function displayEasterEggFinal() {
    if (whaleClicked == true && duckClicked == true && shipClicked == true) {
        var audio = document.getElementById('easterEggSound')
        audio.play();
        mainTheme.pause();
        var body = document.querySelector('body');
        var div = document.createElement('div');
        div.id = 'easterEgg';
        div.onclick = function () {
            var div = document.getElementById('easterEgg');
            mainTheme.play();
            div.remove();
        }
        var img = document.createElement('img');
        img.setAttribute('src', "./assets/easterEgg.png")
        img.id = 'easterEggPhoto'
        div.appendChild(img);
        body.appendChild(div);
        whaleClicked = false;
        duckClicked = false;
        shipClicked = false;
    }
}
// for current answer box text
let nextAnswerBoxText = '';

// Function to make text slowly appear for answer box
function answerBoxTextScroll() {
    if (nextAnswerBoxText.length === 0) {
        document.getElementById('answerBoxButton').setAttribute('class', 'visible')
        return false
    } else if (nextAnswerBoxText.length > 0) {
        document.getElementById('answerBoxText').innerHTML += nextAnswerBoxText.shift();
    }
    setTimeout('answerBoxTextScroll()', 30);
};

// Function for event listener of the continue button in answer box to continue to next question
function continueAnswerBox() {
    buttonClickOne.play();
    document.getElementById('answerBoxButton').setAttribute('src', './assets/intro_box/ContinueButtonCllicked.png')
    setTimeout(() => {
        document.getElementById('answerBoxButton').setAttribute('src', './assets/intro_box/ContinueButtonUncllicked.png')
    }, 50);
    hideAnswerBox();
};

// Each string in this array is one span of dialogue for the intro
let introDialogueArray = ['Congratulations on being appointed Mayor! What a long and enduring campaign \
season that was! The world is in a state of climate emergency, and that includes RainCity!',
    "As you know, the citizens of RainCity revolted and threw the last Mayor out of office. The \
citizens were furious at the Mayor's lack of action to reduce RainCity's carbon pollution!",
    "Let's hope that you can make more green decisions during your term as Mayor, and maybe even get elected for a second term!", 
    "Keep an eye on your eco-score and popularity hearts in the top-right corner! If you make too many unpopular decisions, and run out of hearts, the citizens will demand your resignation! Make wise, environmentally friendly decisions to Save RainCity!"]
// Global variable for the first span of dialogue from introDialogueArray
let introDialogueText = introDialogueArray.shift().split('');

// Main function to run the intro dialogue
function masterIntroDialogue() {
    document.getElementById('intro-div').setAttribute('class', 'visible');
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
    }, 30)
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
    setTimeout('introDialogue()', 0.1);
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
    questionPromptText.textContent = questions[arrOfRandomIntegersEasy[questionCounter]]['question'];

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
    NPC.setAttribute('src', 'assets/npc/npc' + questions[arrOfRandomIntegersEasy[questionCounter]]['NPC-img-num'] + '.png');

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
    document.getElementById('yes-button').setAttribute('src', './assets/dialogue_box/buttons/YesButtonClicked.png');
    buttonClickOne.play();
    setTimeout(function () {
        // Hide the question prompt box
        document.getElementById('question-prompt-div').setAttribute('class', 'hidden');

        // Reset the text for the answer box
        document.getElementById('answerBoxText').textContent = '';

        // Play click noise
        buttonClickOne.play();

        //Hard questions, "level 2"
        if (questionCounter > 9) {
            nextAnswerBoxText = questions[arrOfRandomIntegersHard[questionCounter - 10]]['yes-result'].split('');

            //Keeps track of accumulated ratings
            airQualityRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['airQualityRating'];
            emissionsRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['emissionsRating'];
            energyRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['energyRating'];
            transportRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['transportRating'];
            walkabilityRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['walkabilityRating'];
            governmentActionRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['governmentActionRating'];
            environmentRestorationRating += questions[arrOfRandomIntegersHard[questionCounter - 10]]['environmentRestorationRating'];

            // Reflect on eco score
            prevEcoScore = ecoScore;
            ecoScore += questions[arrOfRandomIntegersHard[questionCounter - 10]]['eco-score'];
            if (ecoScore >= 10) {
                ecoScore = 10;
            }
            if (ecoScore <= 0) {
                ecoScore = 0;
            }

            // Reflect popularity score
            prevPopularityScore = popularityScore;
            popularityScore += questions[arrOfRandomIntegersHard[questionCounter - 10]]['pop-score'];
            if (popularityScore >= 10) {
                popularityScore = 10;
            }
            if (popularityScore <= 0) {
                popularityScore = 0;
            }
            // Increment question counter
            questionCounter += 1;

            // Change the NPC to next NPC image
            document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[arrOfRandomIntegersHard[questionCounter - 10]]['NPC-img-num'] + ".png");

            // Change the question text to the next question
            document.getElementById('question-prompt-text').textContent = questions[arrOfRandomIntegersHard[questionCounter - 10]]['question'];

            // Count number of correct answers made by players
            if (questions[arrOfRandomIntegersHard[questionCounter - 10]]['correct-point'] === 1) {
                mayoralRating += 1;
            }
        }

        //Easy questions, "level 1"
        else {
            // Set the global variable (for scrolling text) to the correct string
            nextAnswerBoxText = questions[arrOfRandomIntegersEasy[questionCounter]]['yes-result'].split('');

            //Keeps track of accumulated ratings
            airQualityRating += questions[arrOfRandomIntegersEasy[questionCounter]]['airQualityRating'];
            emissionsRating += questions[arrOfRandomIntegersEasy[questionCounter]]['emissionsRating'];
            energyRating += questions[arrOfRandomIntegersEasy[questionCounter]]['energyRating'];
            transportRating += questions[arrOfRandomIntegersEasy[questionCounter]]['transportRating'];
            walkabilityRating += questions[arrOfRandomIntegersEasy[questionCounter]]['walkabilityRating'];
            governmentActionRating += questions[arrOfRandomIntegersEasy[questionCounter]]['governmentActionRating'];
            environmentRestorationRating += questions[arrOfRandomIntegersEasy[questionCounter]]['environmentRestorationRating'];

            // Reflect on eco score
            prevEcoScore = ecoScore;
            ecoScore += questions[arrOfRandomIntegersEasy[questionCounter]]['eco-score'];
            if (ecoScore >= 10) {
                ecoScore = 10;
            }
            if (ecoScore <= 0) {
                ecoScore = 0;
            }

            // Reflect popularity score
            prevPopularityScore = popularityScore;
            popularityScore += questions[arrOfRandomIntegersEasy[questionCounter]]['pop-score'];
            if (popularityScore >= 10) {
                popularityScore = 10;
            }
            if (popularityScore <= 0) {
                popularityScore = 0;
            }
            // Increment question counter
            questionCounter += 1;

            // Change the NPC to next NPC image
            document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[arrOfRandomIntegersEasy[questionCounter]]['NPC-img-num'] + ".png");

            // Change the question text to the next question
            document.getElementById('question-prompt-text').textContent = questions[arrOfRandomIntegersEasy[questionCounter]]['question'];

            // Count number of correct answers made by players
            if (questions[arrOfRandomIntegersEasy[questionCounter]]['correct-point'] === 1) {
                mayoralRating += 1;
            }
        }
        // For click animation's sake
        document.getElementById('yes-button').setAttribute('src', './assets/dialogue_box/buttons/YesButtonUnclicked.png');

        // Adjust score bar and popularity hearts to correct scale
        document.getElementById('uiEcoScore').setAttribute('src', './assets/eco_score/eco_score' + ecoScore + '.png');
        document.getElementById('uiPopScore').setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.png');

        // After 1 second, run function to display the answer box
        setTimeout(displayAnswerBox, 1000);

        // Count number of correct answers made by players

    }, 50)
};

function selectNoButton() {
    document.getElementById('no-button').setAttribute('src', './assets/dialogue_box/buttons/NoButtonClicked.png');
    setTimeout(function () {

        // Hide the question prompt box
        document.getElementById('question-prompt-div').setAttribute('class', 'hidden');

        // Play click noise
        buttonClickOne.play();

        // Reset the text for the answer box
        document.getElementById('answerBoxText').textContent = '';

        //Hard questions, "level 2"
        if (questionCounter > 9) {
            nextAnswerBoxText = questions[arrOfRandomIntegersHard[questionCounter - 10]]['no-result'].split('')

            //Eco score factors
            airQualityRating = questions[arrOfRandomIntegersHard[questionCounter - 10]]['airQualityRating'];
            emissionsRating = questions[arrOfRandomIntegersHard[questionCounter - 10]]['emissionsRating'];
            energyRating = questions[arrOfRandomIntegersHard[questionCounter - 10]]['energyRating'];
            transportRating = questions[arrOfRandomIntegersHard[questionCounter - 10]]['transportRating'];
            walkabilityRating = questions[arrOfRandomIntegersHard[questionCounter - 10]]['walkabilityRating'];
            governmentActionRating = questions[arrOfRandomIntege6rsHard[questionCounter - 10]]['governmentActionRating'];
            environmentRestorationRating = questions[arrOfRandomIntegersHard[questionCounter - 10]]['environmentRestorationRating'];

            // Reflect on eco score
            prevEcoScore = ecoScore;
            ecoScore += questions[arrOfRandomIntegersHard[questionCounter - 10]]['eco-score'];
            if (ecoScore >= 10) {
                ecoScore = 10;
            }
            if (ecoScore <= 0) {
                ecoScore = 0;
            }

            // Reflect popularity score
            prevPopularityScore = popularityScore;
            popularityScore -= questions[arrOfRandomIntegersHard[questionCounter - 10]]['pop-score'];
            if (popularityScore >= 10) {
                popularityScore = 10;
            }
            if (popularityScore <= 0) {
                popularityScore = 0;
            }
            // Increment question counter
            questionCounter += 1;

            // Change the NPC to next NPC image
            document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[arrOfRandomIntegersHard[questionCounter - 10]]['NPC-img-num'] + ".png");

            // Change the question text to the next question
            document.getElementById('question-prompt-text').textContent = questions[arrOfRandomIntegersHard[questionCounter - 10]]['question'];

            // Count number of correct answers made by players
            if (questions[arrOfRandomIntegersHard[questionCounter - 10]]['correct-point'] === 0) {
                mayoralRating += 1;
            }
        }

        //Easy questions, "level 1"
        else {
            nextAnswerBoxText = questions[arrOfRandomIntegersEasy[questionCounter]]['no-result'].split('');

            //Eco score factors
            airQualityRating = questions[arrOfRandomIntegersEasy[questionCounter]]['airQualityRating'];
            emissionsRating = questions[arrOfRandomIntegersEasy[questionCounter]]['emissionsRating'];
            energyRating = questions[arrOfRandomIntegersEasy[questionCounter]]['energyRating'];
            transportRating = questions[arrOfRandomIntegersEasy[questionCounter]]['transportRating'];
            walkabilityRating = questions[arrOfRandomIntegersEasy[questionCounter]]['walkabilityRating'];
            governmentActionRating = questions[arrOfRandomIntegersEasy[questionCounter]]['governmentActionRating'];
            environmentRestorationRating = questions[arrOfRandomIntegersEasy[questionCounter]]['environmentRestorationRating'];

            // Reflect on eco score
            prevEcoScore = ecoScore;
            ecoScore += questions[arrOfRandomIntegersEasy[questionCounter]]['eco-score'];
            if (ecoScore >= 10) {
                ecoScore = 10;
            }
            if (ecoScore <= 0) {
                ecoScore = 0;
            }

            // Reflect popularity score
            prevPopularityScore = popularityScore;
            popularityScore -= questions[arrOfRandomIntegersEasy[questionCounter]]['pop-score'];
            if (popularityScore >= 10) {
                popularityScore = 10;
            }
            if (popularityScore <= 0) {
                popularityScore = 0;
            }
            // Increment question counter
            questionCounter += 1;

            // Change the NPC to next NPC image
            document.getElementById('assistant').setAttribute('src', "assets/npc/npc" + questions[arrOfRandomIntegersEasy[questionCounter]]['NPC-img-num'] + ".png");

            // Change the question text to the next question
            document.getElementById('question-prompt-text').textContent = questions[arrOfRandomIntegersEasy[questionCounter]]['question'];

            // Count number of correct answers made by players
            if (questions[arrOfRandomIntegersEasy[questionCounter]]['correct-point'] === 0) {
                mayoralRating += 1;
            }
        }

        // For click animation's sake
        document.getElementById('no-button').setAttribute('src', './assets/dialogue_box/buttons/NoButtonUnclicked.png');

        // Adjust score bar and popularity hearts to correct scale
        document.getElementById('uiEcoScore').setAttribute('src', './assets/eco_score/eco_score' + ecoScore + '.png');
        document.getElementById('uiPopScore').setAttribute('src', './assets/pop_score/pop_score' + popularityScore + '.png');

        // After 1 second, run function to display the answer box
        setTimeout(displayAnswerBox, 1000);

    }, 50)
};


// Displays the answer box
function displayAnswerBox() {
    // Play box popup audio
    boxPopAudioThree.play();
    // Begin the scrolling text
    answerBoxTextScroll();
    // Make the answer box and text visible
    document.getElementById('answerBox').setAttribute('class', 'visible');
    document.getElementById('answerBoxText').setAttribute('class', 'visible')
};

// Hides the answer box when you click the continue button
function hideAnswerBox() {
    setTimeout(() => {
        document.getElementById('answerBox').setAttribute('class', 'hidden');
        document.getElementById('answerBoxText').setAttribute('class', 'hidden')
        document.getElementById('answerBoxButton').setAttribute('class', 'hidden')
    }, 50);
    if (!createNewspaper("default")) {
        setTimeout(nextQuestionPrompt, 6000);
    }
};

// This is the main function to call the next yes/no question
function nextQuestionPrompt() {
    // temporary change
    if (questionCounter === 6 || popularityScore === 0) {
        // end game
        endGameSequence();
    } else if (questionCounter === 9) {
        // put newspaper popup here. show newspaper with headline:
        if (popularityScore > 0) {
            // If player has made it through half the questions, advance to term 2
            createNewspaper("termSwitch");
            var newspaper = document.getElementById("newspaper");
            newspaper.onclick = function () {
                let audio = new Audio("./assets/Audio/newspaperAway.mp3")
                var newspaper = document.getElementById('newspaper');
                newspaper.remove();
                audio.play();
                document.getElementById('currentTermImage').setAttribute('src', './assets/dialogue_box/TermTwo.png');
                setTimeout(function() {
                    boxPopAudioOne.play();
                    document.getElementById('question-prompt-div').setAttribute('class', 'visible');
                }, 3000)
            }
        }
    } else {
        boxPopAudioOne.play();
        // Else, make the question prompt appear (the npc image and text content was 
        // already changed within the selectYesButton or selectNoButton functions)
        document.getElementById('question-prompt-div').setAttribute('class', 'visible');
    }
};

//Create headlines
let papers = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false
}

let defineDefaultHeadline = () => {

    if (popularityScore <= 3 && !papers[2] && prevPopularityScore > popularityScore) {
        papers[2] = true;
        return document.createTextNode("Protests Begin Due to the Mayor's New Ruling");
    }
    else if (popularityScore <= 1 && !papers[1] && prevPopularityScore > popularityScore) {
        papers[1] = true;
        return document.createTextNode("Riots Breakout as Discontent Increases With the Mayor");
    }
    else if (popularityScore <= 0 && !papers[0] && prevPopularityScore > popularityScore) {
        papers[0] = true;
        return document.createTextNode("RainCity's Tyrant Mayor Overthrown by the Revolution");
    }
    else if (popularityScore >= 7 && !papers[3] && prevPopularityScore < popularityScore) {
        papers[3] = true;
        return document.createTextNode("Citizens Celebrating the Mayor's Name with New Ruling");
    }
    else if (popularityScore >= 9 && !papers[4] && prevPopularityScore < popularityScore) {
        papers[4] = true;
        return document.createTextNode("RainCity's Mayor One of The Best In The World");
    }
    else if (popularityScore >= 10 && !papers[5] && prevPopularityScore < popularityScore) {
        papers[5] = true;
        return document.createTextNode("RainCity Becomes the Best City In The World");
    }
    else if (ecoScore <= 3 && !papers[8] && prevEcoScore > ecoScore) {
        papers[8] = true;
        return document.createTextNode("Hottest Day Ever Recorded, Scientists Say Due to Pollution")
    }
    else if (ecoScore <= 1 && !papers[7] && prevEcoScore > ecoScore) {
        papers[7] = true;
        return document.createTextNode("Smog creates unbreathable air, WEAR MASKS")
    }
    else if (ecoScore <= 0 && !papers[6] && prevEcoScore > ecoScore) {
        papers[6] = true;
        return document.createTextNode("Rising sea levels floods Raincity! Causing major damage")
    }
    else if (ecoScore >= 7 && !papers[9] && prevEcoScore < ecoScore) {
        papers[9] = true;
        return document.createTextNode("Mayor Improves Quality of Life with Green Initiatives")
    }
    else if (ecoScore >= 9 && !papers[10] && prevEcoScore < ecoScore) {
        papers[10] = true;
        return document.createTextNode("Mayor Leads RainCity to Almost Having a ZERO Carbon Footprint")
    }
    else if (ecoScore >= 10 && !papers[11] && prevEcoScore < ecoScore) {
        papers[11] = true;
        return document.createTextNode("RainCity Becomes the World's Greenest and Most Sustainable City")
    }
    else {
        return document.createTextNode("null");
    }
}

let defineCustomHeadline = (headlineDefiner) => {
    if (headlineDefiner == "termSwitch") {
        return document.createTextNode("Current Mayor has been relected to run for a second term!")
    }
    if (headlineDefiner == "endGame"){
        if(popularityScore == 0){
            return document.createTextNode("RainCity's Tyrant Mayor Overthrown by the Revolution")
        }

        else if(mayoralRating < 50){
            return document.createTextNode("Mayor's Terrible Administration Comes to an End")
        }

        else if (mayoralRating == 100){
            return document.createTextNode("Citizens Mourn the Retirement of Raincity's Best Mayor")
        }

        else if (mayoralRating >= 50){
            return document.createTextNode("Mayor Decides to Retire After Two Fruitful Years")
        }
    }
}

//Create newspaper DOM elements
let createNewspaper = (headlineDefiner) => {
    var body = document.querySelector("body");
    var headline = document.createElement("h1");
    headline.id = "headline"
    var continueHeader = document.createElement("h1");
    continueHeader.id = "newspaperContinue";
    var continueText = document.createTextNode("Tap anywhere to continue...")
    continueHeader.appendChild(continueText);
    var paper = document.createElement("img");
    paper.src = "./assets/static_elements/newspaper.png"
    paper.id = "paper"
    var newspaper = document.createElement("div");
    newspaper.id = "newspaper";
    newspaper.onclick = function () {
        let audio = new Audio("./assets/Audio/newspaperAway.mp3")
        var newspaper = document.getElementById('newspaper');
        newspaper.remove();
        audio.play();
        setTimeout(nextQuestionPrompt, 6000);
    }
    if (headlineDefiner == "default") {
        headline.appendChild(defineDefaultHeadline());
    }
    else {
        headline.appendChild(defineCustomHeadline(headlineDefiner));
    }

    if (headline.childNodes[0].textContent == "null") {
        return false;
    }
    newspaper.appendChild(paper);
    newspaper.appendChild(headline);
    newspaper.appendChild(continueHeader);
    body.appendChild(newspaper);

    let audio = new Audio("./assets/Audio/newspaperLoad.mp3")
    audio.play();
    return true;
}

let deletePaper = () => {
    var newspaper = document.getElementById('newspaper');
    newspaper.remove();
}

//Check if the user Saved their score yet
let scoreSaved = false;
let sharing = false;

// If you finish all questions, or pop score reaches 0, end game.
function endGameSequence() {
    //Remove everything
    document.getElementById('container').remove();
    // Stop the main theme audio 
    var audioMain = document.getElementById('mainSoundTrack');
    audioMain.pause()
    // Start the end game theme audio
    var endAudio = document.getElementById('endSoundTrack');
    endAudio.play()
    // Calculate user's end game score here
    let endGameScore = mayoralRating/20;

    // Timestamp of when the game ended
    let currentDate = new Date();

    let currentDayOfMonth = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let timestamp = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;


    // Remove everything
    setTimeout(() => {

        let endGameBox = document.createElement('img');
        endGameBox.setAttribute('id', 'endGameBox');
        endGameBox.setAttribute('src', './assets/end_game_box/EndGameBox.png');

        let endGameScoreText = document.createElement('p');
        endGameScoreText.textContent = '' + endGameScore + "%";
        endGameScoreText.setAttribute('id', 'endGameScoreText');

        let returnButton = document.createElement('img');
        returnButton.setAttribute('id', 'returnButton');
        returnButton.setAttribute('src', './assets/end_game_box/buttons/quitUnclicked.png');
        returnButton.onclick = () => {
            buttonClickOne.play();
            returnButton.src = "./assets/end_game_box/buttons/quitClicked.png"
            window.location.assign("index.html")
        }

        let gameOverAnimation = document.createElement('img');
        gameOverAnimation.setAttribute('src', './assets/end_game_box/game_over_anim/EndGameBox.gif');
        gameOverAnimation.setAttribute('id', 'gameover-anim');

        let gameOver = document.createElement('div');
        gameOver.id = 'gameOver';
        gameOver.setAttribute('class', 'visible');

        // Create the advanved statistics box
        let answerBox = document.createElement('img');
        answerBox.setAttribute('src', './assets/end_game_box/EndGameBoxBack.png')
        answerBox.setAttribute('id', 'answerBox');

        // Create the text box for the advanced statistics box
        let answerBoxText = document.createElement('p');
        answerBoxText.setAttribute('id', 'answerBoxText');
        answerBoxText.setAttribute('style', 'white-space: pre;');

        //Create advanced div
        let advanced = document.createElement('div');
        advanced.setAttribute('class', 'visible');
        advanced.id = 'advanced';
        advanced.onclick = () => {
            //Flip card
            flipcardInner.classList.remove('flip-card-activate');
            //Show Button
            advancedButton.setAttribute('class', 'visible');
            share.setAttribute('class', 'visible');
            returnButton.setAttribute('class', 'visible');
            saveScore.setAttribute('class', 'visible');
        }

        advanced.append(answerBox);
        advanced.append(answerBoxText);

        let advancedButton = document.createElement('img');
        advancedButton.id = 'advancedButton';
        advancedButton.setAttribute('src', './assets/end_game_box/buttons/advancedUnclicked.png');
        advancedButton.onclick = function(){
            buttonClickOne.play();
            document.getElementById("advancedButton").src = "./assets/end_game_box/buttons/advancedClicked.png"
            setTimeout(function () {
                advancedButton.src =  './assets/end_game_box/buttons/advancedUnclicked.png';
            }, 50)

            //Flip card
            flipcardInner.classList.add('flip-card-activate');
                //Hide buttons
                advancedButton.setAttribute('class', 'hidden');
                share.setAttribute('class', 'hidden');
                returnButton.setAttribute('class', 'hidden');
                saveScore.setAttribute('class', 'hidden');

                //Populate advanceBoxText
                document.getElementById('answerBoxText').textContent = 'You improved Rain City\'s:\r\n' +
                    'Air quality rating - +' + Math.round(airQualityRating/2) + '%\r\n' +
                    'Carbon emissions rating - +' + Math.round(emissionsRating/2) + '%\r\n' +
                    'Energy consumption rating - +' + Math.round(energyRating/2) + '%\r\n' +
                    'Transportation rating - +' + Math.round(transportRating/2) + '%\r\n' +
                    'Walkability rating - +' + Math.round(walkabilityRating/2) + '%\r\n' +
                    'Government action rating - +' + Math.round(governmentActionRating/2) + '%\r\n' +
                    'Environment restoration rating - +' + Math.round(environmentRestorationRating/2) + '%\r\n';
        }

        let saveScore = document.createElement('img');
        saveScore.setAttribute('src', './assets/end_game_box/buttons/saveScoreUnclicked.png')
        saveScore.id = 'saveScore';
        saveScore.onclick = () => {
            buttonClickOne.play();
            saveScore.src = "./assets/end_game_box/buttons/saveScoreClicked.png"
            setTimeout(function () {
                saveScore.src = './assets/end_game_box/buttons/saveScoreUnclicked.png';
            }, 50)
            
            // Write the user's end game score to firestore
            if (!scoreSaved){
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        scoreSaved = true;
                        console.log("Save Success");
                        var name = '';
                        db.collection('users').doc(user.uid)
                            .get()
                            .then(function (doc) {
                                name = doc.data().name.split(' ');
                                db.collection('users').doc(user.uid)
                                    .collection('game-scores').doc()
                                    .set({
                                        score: endGameScore,
                                        timestamp: timestamp
                                    })
                                    .then(function () {
                                        // if the user scored a perfect score aka 100%
                                        // this will be altered as 100 does no currently mean 100%
                                        if (endGameScore === 100) {
                                            db.collection('scores').doc()
                                                .set({
                                                    name: name[0],
                                                    score: endGameScore,
                                                    timestamp: timestamp
                                                })
                                        }
                                    })
                            })
                    } else{
                        console.log("Login please")
                        window.open('./saveScore.html');
                    }
                });
            }
        }

        let share = document.createElement('img');
        share.setAttribute('src', './assets/end_game_box/buttons/shareUnclicked.png')
        share.id = 'share';
        share.onclick = () => {
            buttonClickOne.play();
            share.src = "./assets/end_game_box/buttons/shareClicked.png"
            setTimeout(function () {
                share.src = './assets/end_game_box/buttons/shareUnclicked.png';
            }, 50)

            // 
            let links = document.getElementById("share-div");

            if(!sharing){
                sharing = true;
                links.setAttribute('style', 'visibility: visible !important');
            } else {
                sharing = false;
                links.setAttribute('style', 'visibility: hidden !important');
            }
        }

        //Create gameOver div
        gameOver.append(endGameBox);
        gameOver.append(gameOverAnimation);
        gameOver.append(endGameScoreText);
        gameOver.append(returnButton);
        gameOver.append(advancedButton);
        gameOver.append(saveScore);
        gameOver.append(share);

        //Create flipcard div
        let flipcard = document.createElement('div');
        flipcard.id = 'flipcard';
        let flipcardInner = document.createElement('div');
        flipcardInner.id = 'flipcard-Inner';
        flipcardInner.append(gameOver);
        flipcardInner.append(advanced);
        flipcard.append(flipcardInner);
        //Create newspaper Element

        createNewspaper("endGame");
        var newspaper = document.getElementById("newspaper");
        newspaper.onclick = function () {
            let audio = new Audio("./assets/Audio/newspaperAway.mp3")
            var newspaper = document.getElementById('newspaper');
            newspaper.remove();
            audio.play();
            //Create endgame screen
            document.body.append(flipcard);
        }
    }, 100);
};