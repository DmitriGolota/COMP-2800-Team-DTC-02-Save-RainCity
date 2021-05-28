if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./scripts/sw.js')
        .then(function(response){
            console.log('SW was registered')
        })
        .catch(function (err) {
            console.log('SW was not registered')
            console.log(err)
        })

}