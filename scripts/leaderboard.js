//Create DOM elements
var list = document.getElementById("list");

var createListItem = (name, timestamp) => {
    //seconds to date solution found on stackoverflow
    var date = new Date(1970, 0, 1); //Epoch time
    date.setSeconds(timestamp);

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
    constructor (name, timestamp) {
        this.name = name;
        this.timestamp = timestamp;
    }
    toString() {
        return this.name + ', ' + this.timestamp;
    }
}

// Firestore data converter
var scoreConverter = {
    toFirestore: function(score) {
        return {
            name: score.name,
            timestamp: score.timestamp
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Score(data.name, data.timestamp);
    }
};

//Call for 'scores' collection from Firestore
var users = db.collection("scores").orderBy("timestamp", "desc").limit(10);

users.withConverter(scoreConverter).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var score = doc.data();
        //append retrived data to html page
        console.log(score.name + " " + score.timestamp.seconds);
        createListItem(score.name, score.timestamp.seconds);
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