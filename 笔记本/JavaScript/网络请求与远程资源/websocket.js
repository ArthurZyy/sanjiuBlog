let socket = new WebSocket("ws://www.example.com/server.php");

let stringData = "Hello world!";
let arrayBufferData = Uint8Array.from(['f', 'o', 'o']);
let blobData = new Blob(['f', 'o', 'o']);

socket.send(stringData);
socket.send(arrayBufferData);
socket.send(blobData);


socket.onmessage = function (e) {
    let data = e.data;
};

socket.onopen = function () { };
socket.onerror = function () { };
socket.onclose = function (event) {
    console.log(`as clean? ${event.wasClean} Code=${event.code} Reason=${event.reason}`);
};