const sleep = (timeoutMs) => new Promise((resolve) => {
    setTimeout(resolve, timeoutMs)
});

(async () => {
    for (var i = 0; i < 5; i++) {
        console.log(new Date, i);
        await sleep(1000);
    }

    console.log(new Date, i)
})();