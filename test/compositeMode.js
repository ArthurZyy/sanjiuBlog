class Folder{
    constructor(name, children){
        this.name = name
        this.children =children
    }

    add(...fileOrFolder){
        this.children.push(...fileOrFolder)
        return this
    }

    scan(cb){
        this.children.forEach(child => child.scan(cb))
    }
}

class File{
    constructor(name, size){
        this.name = name
        this.size =size
    }

    add(...fileOrFolder){
        throw new Error('文件下面不能再添加文件')
    }

    scan(cb){
        cb(this)
    }
}

const flodMovies = new Folder('电影', [
    new Folder('漫威电影', [
        new File('钢铁侠.mp4', 1.6),
        new File('黑寡妇.mp4', 2.1),
        new File('金刚狼.mp4', 1),
        new File('蜘蛛侠.mp4', 1),
    ]),
    new Folder('DC英雄电影', [
        new File('蝙蝠侠.mp4', 1.9),
        new File('超人.mp4', 2.9),
    ])
])

flodMovies.scan(item => {
    item.size > 2 && console.log(item)
})