for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}

for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}

for (var i = 0; i< 10; i++){
	setTimeout((j) => {
		console.log(j);
    }, 1000, i)
}

for (var i = 0; i< 10; i++){
	((i) => setTimeout(() => {
		console.log(i);
    }, 1000))(i)
}