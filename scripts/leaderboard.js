//Create DOM elements
var list = document.getElementById("list");

var createListItem = (name, timecompleted) => {
    //seconds to date solution found on stackoverflow
    var date = new Date(1970, 0, 1); //Epoch time
    date.setSeconds(timecompleted);

    //Create DOM element
    var listItem = document.createElement('li');
    listItem.className = "person"
    var nameContainer = document.createElement('h3');
    var nameText = document.createTextNode(name);
    nameContainer.appendChild(nameText);
    var completedDate = document.createElement('p');
    var dateText = document.createTextNode(date.toUTCString());
    completedDate.appendChild(dateText);
    listItem.appendChild(nameContainer);
    listItem.appendChild(completedDate);
    list.appendChild(listItem);
}



//Database fetch request
//Parts of code taken from Firebase documentation

//Custom score class
class Score {
    constructor (name, percentage, timecompleted) {
        this.name = name;
        this.percentage = percentage;
        this.timecompleted = timecompleted;
    }
    toString() {
        return this.name + ', ' + this.percentage + ', ' + this.timecompleted;
    }
}

// Firestore data converter
var scoreConverter = {
    toFirestore: function(score) {
        return {
            name: score.name,
            percentage: score.percentage,
            timecompleted: score.timecompleted
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Score(data.name, data.percentage, data.timecompleted);
    }
};

//Call for 'scores' collection from Firestore
var test = db.collectionGroup("scores").where('percentage', '==', 100).orderBy("timecompleted", "desc").limit(10);

test.withConverter(scoreConverter).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var score = doc.data();
        //append retrived data to html page
        console.log(score.name + " " + score.percentage + " " + score.timecompleted.seconds);
        createListItem(score.name, score.timecompleted.seconds);
    })
})

// firebase.auth().onAuthStateChanged(function() {
//     if (user) {
//         db.collection('scores')
//         .where('percentage', '==', 100)
//         .orderBy('timestamp', 'desc')
//         .limit(10)
//         .get()
//         .then(function (snap) {
//             snap.forEach(function (doc) {
//                 let name = doc.data().name
//                 let timestamp = doc.data().timestamp
//                 createListItem(name, timestamp)
//             })
//         })
//     }
// })