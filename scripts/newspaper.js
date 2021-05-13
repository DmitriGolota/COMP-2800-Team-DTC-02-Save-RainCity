let popularity = 500;
let ecoScore = 750;

let papers = {
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false, 
    6 : false,
    7 : false,
    8 : false,
    9 : false, 
    10 : false, 
    11 : false
}

let defineDefaultHeadline = () => {

    if(popularity <= 250 && !papers[2]){
        papers[2] = true;
        return document.createTextNode("Protests Begin Due to the Mayor's New Ruling");
    }
    else if(popularity <= 100 && !papers[1] ){
        papers[1] = true;
        return document.createTextNode("Riots Breakout as Discontent Increases With the Mayor");
    }
    else if(popularity <= 0 && !papers[0]){
        papers[0] = true;
        return document.createTextNode("RainCity's Tyrant Mayor Ovethrown by the Revolution");
    }
    else if(popularity >= 750 && !papers[3]){
        papers[3] = true;
        return document.createTextNode("Citizens Celebrating the Mayor's Name with New Ruling");
    }
    else if (popularity >= 900 && !papers[4]){
        papers[4] = true;
        return document.createTextNode("RainCity's Mayor One of The Best In The World");
    }
    else if (popularity >= 1000 && !papers[5]){
        papers[5] = true;
        return document.createTextNode("RainCity Becomes the Best City In The World");
    }
    else if (ecoScore <= 250 && !papers[8]){
        papers[8] = true;
        return document.createTextNode("Hottest Day Ever Recorded, Scientists Say Due to Pollution")
    }
    else if (ecoScore <= 100 && !papers[7]){
        papers[7] = true;
        return document.createTextNode("Smog creates unbreathable air, WEAR MASKS")
    }
    else if (ecoScore <= 0 && !papers[6]){
        papers[6] = true;
        return document.createTextNode("Massive Tsunami Due to Polution Submerges RainCity ")
    }
    else if (ecoScore >= 1000 && !papers[11]){
        papers[11] = true;
        return document.createTextNode("RainCity Becomes the World's Greenest and Most Sustainable City")
    }
    else if (ecoScore >= 900 && !papers[10]){
        papers[10] = true;
        return document.createTextNode("Mayor Leads RainCity to Almost Having a ZERO Carbon Footprint")
    }
    else if(ecoScore >= 750 && !papers[9]){
        papers[9] = true;
        return document.createTextNode("Mayor Improves Quality of Live with Green Initiatives")
    }
    else {
        return document.createTextNode("null");
    }
}

let defineCustomHeadline = (headlineDefiner) => {

}

let createNewspaper = (headlineDefiner) => {
    var body = document.querySelector("body");
    var headline = document.createElement("h1");
    headline.id = "headline"
    var continueHeader = document.createElement("h1");
    continueHeader.id = "newspaperContinue";
    var continueText = document.createTextNode("Tap anywhere to continue...")
    continueHeader.appendChild(continueText);
    var paper = document.createElement("img");
    paper.src = "./assets/static_elements/newspaper.svg"
    paper.id = "paper"
    var newspaper = document.createElement("div");
    newspaper.id = "newspaper";
    newspaper.onclick = function () {
        var newspaper = document.getElementById('newspaper');
        newspaper.remove();
    }
    if(headlineDefiner == "default"){
        headline.appendChild(defineDefaultHeadline());
    }
    else{
        headline.appendChild(defineCustomHeadline(headlineDefiner));
    }

    if(headline.childNodes[0].textContent == "null"){
        return;
    }
    newspaper.appendChild(paper);
    newspaper.appendChild(headline);
    newspaper.appendChild(continueHeader);
    body.appendChild(newspaper);
}

let deletePaper = () => {
    var newspaper = document.getElementById('newspaper');
    newspaper.remove();
}