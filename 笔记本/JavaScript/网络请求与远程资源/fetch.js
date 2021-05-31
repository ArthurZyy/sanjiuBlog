// --------------------------------------------------
// fetch
let payload = JSON.stringify({
    foo: 'bar'
});

let jsonHeader = new Headers({
    'Content-Type': 'application/json'
});

fetch('/send-me-json', {
    method: 'POST',
    body: payload,
    headers: jsonHeader
});

// 发送文件

let imageFormData = new FormData();
let imageInpt = document.querySelector("input[type='file'][multiple]");

for (let i = 0; i < imageInput.files.length; i++) {
    imageFormData.append('image', imageInpt.files[i]);
}

fetch('/img-upload', {
    method: 'POST',
    body: imageFormData
});


// 加载 Blob 文件

const imageElement = document.querySelector('img');

fetch('my-image.png')
    .then(res => res.blob)
    .then(blob => {
        imageElement.src = URL.createObjectURL(blob);
    });


// 发送跨源请求
fetch('//cross-origin.com', { method: 'no-cors' })
    .then((response) => console.log(response.type));


// 中断请求
let ac = new AbortController();

fetch('a.zip', {signal: ac.signal})
    .catch(() => console.log('abort'))

setTimeout(() => {
    ac.abort()
}, 10);