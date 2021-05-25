function checkLoginStatus() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let profileAnchor = document.getElementById('profileAnchor');
            profileAnchor.setAttribute('href', 'profile.html');
        }
    })
};

checkLoginStatus();