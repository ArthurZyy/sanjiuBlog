function sleepPromise(wait=1000) {
    return new Promise(resolve => setTimeout(resolve, wait))
}

sleepPromise(1000).then(() => {

})

async function sleepAsync(wait = 1000) {
    await sleepPromise(wait)
    return
}
