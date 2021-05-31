let db = undefined;
let version = 1;
let request = indexedDB.open('admin', version);

request.onerror = e => alert(e.target.errorCode);
request.onsuccess = e => {
    db = e.target.request;
};

// 对象存储
request.onupgradeneeded = e => {
    const db = e.target.request;

    if (db.objectStoreNames.contains("users")) {
        db.deleteObjectStore("users");
    }

    // keyPath 属性表示应该用作键的存储对象的属性名
    db.createObjectStore("users", { keypath: "username" });
}

let transaction = db.transaction(["users"]);
let store = transaction.objectStore("users");
let request = store.get("007");
request.onerror = (event) => alert("Did not get the object!");
request.onsuccess = (event) => alert(event.target.result.firstName);

// users 是一个用户数据的数组
let request,
    requests = [];
for (let user of users) {
    request = store.add(user);
    request.onerror = () => {
        // 处理错误
    };
    request.onsuccess = () => {
        // 处理成功
    };
    requests.push(request);
}