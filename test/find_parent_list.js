// 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
/**
 * const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]
 */

const list = [
    {
        "id": 1,
        "name": "部门A",
        "parentId": 0,
        "children": [
            {
                "id": 3,
                "name": "部门C",
                "parentId": 1,
                "children": [
                    {
                        "id": 6,
                        "name": "部门F",
                        "parentId": 3
                    }
                ]
            },
            {
                "id": 4,
                "name": "部门D",
                "parentId": 1,
                "children": [
                    {
                        "id": 8,
                        "name": "部门H",
                        "parentId": 4
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "部门B",
        "parentId": 0,
        "children": [
            {
                "id": 5,
                "name": "部门E",
                "parentId": 2
            },
            {
                "id": 7,
                "name": "部门G",
                "parentId": 2
            }
        ]
    }
]

function findParentList(list, id) {
    
}