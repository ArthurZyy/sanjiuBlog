const deepTraversal1 = (node, nodeList = []) => {
    if(node !== null){
        nodeList.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            const child = children[i]
            deepTraversal1(child, nodeList)
        }
    }
    return nodeList
}

const deepTraversal2 = (node) => {
    let nodes = []
    if(node !== null){
        nodes.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            const child = children[i]
            nodes = nodes.concat(deepTraversal2(child))
        }
    }
    return nodes
}

const deepTraversal3 = (node) => {
    let nodes = []
    let stack = []
    if(node){
        stack.push(node)
        while (stack.length) {
            let item = stack.pop()
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