const deepTraversal3 = (node) => {
    let nodes = []
    let stack = []
    if(node){
        stack.push(node)
        while (stack.length) {
            let item = stack.shift()
            nodes.push(item)
            let children = item.children
            for (let i = 0; i < children.length; i++) {
                const child = children[i]
                stack.push(child)
            }
        }
    }
    return nodes
}