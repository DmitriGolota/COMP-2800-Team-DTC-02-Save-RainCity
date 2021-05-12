/*jshint esversion: 6 */
document.body.addEventListener('click', function(){
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
    0 : "./assets/hair/charhair1.svg",
    1 : "./assets/hair/charhair2.svg",
    2 : "./assets/hair/charhair3.svg",
};
let hairAssetsLength = Object.keys(hairAssets).length - 1;

let skinAssets = {
    0 : "./assets/skin/charskin1.svg",
    1 : "./assets/skin/charskin2.svg",
    2 : "./assets/skin/charskin3.svg",
};
let skinAssetsLength = Object.keys(skinAssets).length - 1;

let suitAssets = {
    0 : "./assets/suit/charsuit1.svg",
    1 : "./assets/suit/charsuit2.svg",
    2 : "./assets/suit/charsuit3.svg",
};
let suitAssetsLength = Object.keys(suitAssets).length - 1;

function test(){
    console.log(hairNum)
}

function hairPrev() {
    //button movement
    document.getElementById("hairPrev").src = "./assets/buttons/arrowleftclicked.svg"
    setTimeout(function(){
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
    setTimeout(function(){
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
    setTimeout(function(){
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
    setTimeout(function(){
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
    setTimeout(function(){
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
    setTimeout(function(){
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

document.getElementById('save-button').addEventListener('click', function () {
    //button movement
    document.getElementById('save-button').src = "./assets/intro_box/ContinueButtonCllicked.svg"
    setTimeout(function(){
        document.getElementById("save-button").src = "./assets/intro_box/ContinueButtonUncllicked.svg"
    }, 50)
    //button sound
    let audio = new Audio("./assets/audio/buttonclick3.mp3")
    audio.play()
    document.getElementById('main-game').style.display = "initial";
    document.getElementById('character-customization').style.display = "none";
    // setTimeout(function(){
    //     window.location.href = "main.html"
    // }, 300)
    writeCustomizedCharacter(hairNum, skinNum, suitNum)
});

// Writes user's customized character to Firestore
function writeCustomizedCharacter (hair, skin, suit) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid)
        .collection('character').doc('character')
        .set({
            'hair': hair,
            'skin': skin,
            'suit': suit
        })
    })
    console.log("Save Success")
};

