// Add event listener for delete account button and name change button
document.getElementById('deleteAccountButton').addEventListener('click', deleteAccount);
document.getElementById('changeNameButton').addEventListener('click', changeUserName);

// Reference to user's name text field
let userNameField = document.getElementById('usersName');

// Set user's textcontent under Name header to name from firestore
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        db.collection('users').doc(user.uid)
            .get()
            .then(function (doc) {
                userNameField.textContent = doc.data().name;
            })
        db.collection('users').doc(user.uid)
            .collection('game-scores')
            .orderBy('score', 'desc')
            .limit(5)
            .get()
            .then(function (snap) {
                let referenceToHighscores = document.getElementById('scoresGoHere');
                snap.forEach(function (doc) {
                    let score = doc.data().score;
                    // Get the timestamp field > make it a JS date object > make it a string > split it on the spaces --> 
                    // > slice the first 5 elements > join em back together > call it a day
                    let time = doc.data().timestamp.toDate().toString().split(' ').slice(0, 5).join(' ');

                    let tableRow = document.createElement('tr');
                    let tableData = document.createElement('td');
                    tableData.innerHTML = '<span class="blue">Score:</span> ' + score + ' <span class="blue">Date:</span> ' + time;
                    tableRow.appendChild(tableData)
                    referenceToHighscores.after(tableRow);
                })
            })
    } else {
        window.location.assign('/index.html')
    }
})

// Update user's name to input from user
function changeUserName() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            let inputFromPrompt = prompt('Please enter your new name and select OK to change your name.')
            if (inputFromPrompt != null) {
                db.collection('users').doc(user.uid)
                    .update({
                        name: inputFromPrompt
                    })
                    .then(() => {
                        userNameField.textContent = inputFromPrompt;
                    })
            }

        };
    })
};


// Delete user's account if they enter their name correctly into prompt
function deleteAccount() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            let inputFromPrompt = prompt('Please enter your full name and select OK to delete your account.')
            db.collection('users').doc(user.uid)
                .get()
                .then(function (doc) {
                    if (inputFromPrompt === doc.data().name) {
                        db.collection("users").doc(user.uid).delete().then(() => {
                            console.log("Document successfully deleted!");
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                        user.delete().then(function () {
                            // User deleted.
                            window.location.assign('/index.html')
                        }).catch(function (error) {
                            // An error happened.
                        });
                    }
                })
        }
    })
}