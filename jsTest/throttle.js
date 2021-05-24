function throttle(fn, wait = 50) {
    let last = 0
    return function (...args) {
        let now = +new Date()
        if (now - last > wait) {
            last = now
            fn.call(this, ...args)
        }
    }
}

setInterval(
    throttle(() => {
        console.log(1)
    }, 500),
    1
)