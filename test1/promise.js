/*
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('start')
        resolve()
    }, 1000)
})

p.then(() => {
    console.log('ok')
}).catch(error => {
    console.log(error)
})

let nums = [...Array(3).keys()]
let plist = nums.map(key =>
    new Promise((resolve, reject) => {
        if (key === 1) {
            reject(key)
        } else {
            resolve(key)
        }
    })
)

Promise.all(plist)
    .then(data => {
        console.log('Promise.all then', data)
    })
    .catch(error => {
        console.log('Promise.all error', error)
    })

Promise.race(plist)
    .then(data => {
        console.log('Promise.race then', data)
    })
    .catch(error => {
        console.log('Promise.race error', error)
    })

Promise.resolve
*/
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise{
    constructor(fn){
        this.state = PENDING
        this.value = undefined
        this.reason = undefined

        this.successCbs = []
        this.failCbs = []

        let resolve = (value) => {
            if(this.state === PENDING){
                this.state = RESOLVED
                this.value = value
                this.successCbs.forEach(item => item.call(this, value))
            }
        }
        let reject = (reason) => {
            if(this.state === PENDING){
                this.state = REJECTED
                this.reason = reason
                this.failCbs.forEach(item => item.call(this, reason))
            }
        }

        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected){
        if(this.state === RESOLVED){
            onFulfilled(this.value)
        }

        if(this.state === REJECTED){
            onRejected(this.reason)
        }

        if(this.state === PENDING){
            this.successCbs.push(() => {
                onFulfilled(this.value)
            })
            this.failCbs.push(() => {
                onRejected(this.reason)
            })
        }
    }
}

let p = new MyPromise((resolve, reject) => {
    reject(1)
})
p.then((x) => {
    console.log(x)
}, (x) => {
    console.log('err', x)
})
console.log(p)