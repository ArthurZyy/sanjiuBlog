// 原生浏览器通信
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) {
        return
    }

    try {


        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            let myHeader = xhr.getResponseHeader('myHeader');
            let allHeader = xhr.getAllResponseHeaders();
            alert(xhr.responseText);
            // responseXML：如果响应的内容类型是"text/xml"或"application/xml" 
        } else {
            alert("error" + xhr.status + ' ' + xhr.statusText);
        }

    } catch (error) {

    }
}


xhr.open("post", 'example.php', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-formurlencoded');
xhr.overrideMimeType("text/xml");
xhr.timeout = 1000;
xhr.ontimeout = function () {
    alert('timeout');
}

let form = document.getElementById("user-info");
xhr.send(new FormData(form))
// xhr.send(null); //不需要发送请求体，则必须传 null
