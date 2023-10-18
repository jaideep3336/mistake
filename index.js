const userLeft = true
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback){
    if (userLeft) {
        errorCallback({
            name: 'user Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'user Watching Cat Meme',
            message:'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})