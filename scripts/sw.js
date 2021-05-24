
let cacheName = 'v1';

// Set all requried files under scope of SW
// What is worth saving to cache?

let files = [
    // HTML
    '../index.html',
    '../aboutUs.html',
    '../ceap.html',
    '../main.html',
    '../leaderboard.html',
    '../login.html',
    '../saveScore.html',
    // Stylesheets
    '../styles/aboutUs.css',
    '../styles/ceap.css',
    '../styles/index.css',
    '../styles/login.css',
    '../styles.mainPNG.css',
    '../styles/profile.css',
    // Scripts
    '../scripts/sw.js',
    '../scripts/index.js',
    '../scripts/profile.js',
    '../scripts/main.js',
    '../scripts/leaderboard.js',
    '../scripts/login.js',
    '../scripts/saveScore.js',
    '../scripts/landingpages.js',
    // Assets
    '../assets',
];


self.addEventListener('install', function(event){

    caches.open(cacheName)
        .then(function(cache) {
            cache.addAll(files)
    })
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(match){
                if(match){
                    return match;
                } else {
                    console.log("to be filled")
                    fetch(event.request)
                        .then(function(response){
                            return caches.open(cacheName).then(function(cache){
                                cache.put(event.request, response.clone())
                                console.log(response)
                                return response
                            })
                        })
                }
            })
    );
})
