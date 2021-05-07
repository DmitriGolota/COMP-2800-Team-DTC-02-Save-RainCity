/*jshint esversion: 6 */
let hairNum = 0;
let skinNum = 0;
let suitNum = 0;
let hairImage = document.getElementById('hairImage');
let skinImage = document.getElementById('skinImage');
let suitImage = document.getElementById('suitImage');
// let firebase =

let hairAssets = {
    0 : "./assets/hair0.png",
    1 : "./assets/hair1.png",
    2 : "./assets/hair2.png",
};
let hairAssetsLength = Object.keys(hairAssets).length - 1;

let skinAssets = {
    0 : "./assets/skin0.png",
    1 : "./assets/skin1.png",
    2 : "./assets/skin2.png",
};
let skinAssetsLength = Object.keys(skinAssets).length - 1;

let suitAssets = {
    0 : "./assets/suit0.png",
    1 : "./assets/suit1.png",
    2 : "./assets/suit2.png",
};
let suitAssetsLength = Object.keys(suitAssets).length - 1;

function hairPrev() {
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
//     writeCustomizedCharacter(hairNum, skinNum, suitNum)
// });
//
// // Writes user's customized character to Firestore
// function writeCustomizedCharacter (hair, skin, suit) {
//     firebase.auth().onAuthStateChanged(function (user) {
//         db.collection('users').doc(user.uid)
//         .collection('character')
//         .set({
//             'hair': hair,
//             'skin': skin,
//             'suit': suit
//         })
//     })
//     console.log("Save Success")
// };