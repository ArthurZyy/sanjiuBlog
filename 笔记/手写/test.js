let get = new Promise((resolve, reject) => {
    resolve('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
})
    .then((response) => {
        return console.log(response);
    })
    .then(() => {
        console.log('File written');
    })
    .catch((err) => {
        console.error(err);
    });
