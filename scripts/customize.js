/*jshint esversion: 6 */
// hair, skin, and suit assets must named like so: hair1.png, hair2.png, skin1.png, skin2.png etc.
let hairNum = 0;
let skinNum = 0;
let suitNum = 0;
let hairImage = document.getElementById('hairImage');
let skinImage = document.getElementById('skinImage');
let suitImage = document.getElementById('suitImage');
let firebase = 

function hairPrev() {
    "use strict";
    if (0 === hairNum) {
        hairNum = 2;
    }
    else {
        hairNum -= 1;
    }
    hairImage.setAttribute("src", "./assets/hair" + hairNum + ".png");
}

function hairNext() {
    "use strict";
    if (2 === hairNum) {
        hairNum = 0;
    }
    else {
        hairNum += 1;
    }
    hairImage.setAttribute("src", "./assets/hair" + hairNum + ".png");
}

function skinPrev() {
    "use strict";
    if (0 === skinNum) {
        skinNum = 2;
    }
    else {
        skinNum -= 1;
    }
    skinImage.setAttribute("src", "./assets/skin" + skinNum + ".png");
}

function skinNext() {
    "use strict";
    if (2 === skinNum) {
        skinNum = 0;
    }
    else {
        skinNum += 1;
    }
    skinImage.setAttribute("src", "./assets/skin" + skinNum + ".png");
}

function suitPrev() {
    "use strict";
    if (0 === suitNum) {
        suitNum = 2;
    }
    else {
        suitNum -= 1;
    }
    suitImage.setAttribute("src", "./assets/suit" + suitNum + ".png");
}

function suitNext() {
    "use strict";
    if (2 === suitNum) {
        suitNum = 0;
    }
    else {
        suitNum += 1;
    }
    suitImage.setAttribute("src", "./assets/suit" + suitNum + ".png");
}

document.getElementById('save-button').addEventListener('click', function () {
    writeCustomizedCharacter(hairNum, skinNum, suitNum)
});

// Writes user's customized character to Firestore
function writeCustomizedCharacter (hair, skin, suit) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid)
        .collection('character')
        .set({
            'hair': hair,
            'skin': skin,
            'suit': suit
        })
    })
    console.log("Save Success")
};