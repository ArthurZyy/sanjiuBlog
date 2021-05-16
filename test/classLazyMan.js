class LazyManClass {
    constructor(name) {
        this.taskList = []
        this.name = name
        console.log(`Hi I am ${name}`)
        setTimeout(() => {
            this.next()
        }, 0);
    }

    next() {
        const fn = this.taskList.shift()
        fn && fn()
    }

    sleepFirst(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next()
            }, time * 1000)
        }
        this.taskList.unshift(fn)
        return this
    }

    sleep(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next()
            }, time * 1000)
        }
        this.taskList.push(fn)
        return this
    }

    eat(name) {
        const fn = (n) => {
            console.log(`I am eating ${name}`)
            this.next()
        }
        this.taskList.push(fn)
        return this
    }
}

function LazyMan(name) {
    return new LazyManClass(name)
}

LazyMan('Tony')
    .eat('lunch')
    .eat('dinner')
    .sleepFirst(5)
    .sleep(4)
    .eat('junk food');