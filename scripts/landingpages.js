function checkLoginStatus() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let profileAnchor = document.getElementById('orange');
            profileAnchor.setAttribute('href', 'profile.html');
        }
    })
};