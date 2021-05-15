function debounce(fn, wait=50) {
    let timer = null;
    return function (...args) {
        if(timer){
            clearTimeout(timer)
        }
        setTimeout(function () {
            fn.call(this, ...args)
        }, wait)
    }
}