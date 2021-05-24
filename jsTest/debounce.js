function debounce(fn, wait = 50) {
    let timer = 0
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, wait)
    }
}

function test(a, b, c) {
    console.log(a, b, c)
}
let debounceTest = debounce(test, 50)

for (let i = 1; i < 5; i++) {
    debounceTest(i, i + 1, i + 2)
}