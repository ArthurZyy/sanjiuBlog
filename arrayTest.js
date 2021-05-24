function checkArray(array) {
    if (!array) return
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}

let array = [9, 1, 5, 4]

function bubble(array) {
    checkArray(array)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j+1)

        }
    }
    return array
}

console.log(bubble(array))

function insertion (array){
    checkArray(array)
    for (let i = 1; i < array.length; i++) {
        for (let j = i-1; j > 0 && array[j] > array[j+1]; j++) {
            swap(array, j, j+1)
        }
        
    }
}