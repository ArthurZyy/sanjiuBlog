sessionStorage.setItem("name", "n");
sessionStorage.book = 'p';

let n = sessionStorage.getItem('name');
let book = sessionStorage.book;

for (const key in sessionStorage) {
    const value = sessionStorage[key];
}

delete sessionStorage.book;
sessionStorage.removeItem('name');

// 适用于IE8
sessionStorage.begin();
sessionStorage.name = 'n';
sessionStorage.commit();

// localStorage 使用方法类似，但数据保存不受刷新、关闭等影响


window.addEventListener('storage', e => {
    alert(e.domain);
    /**
         domain：存储变化对应的域。
         key：被设置或删除的键。
         newValue：键被设置的新值，若键被删除则为 null。
         oldValue：键变化之前的值。
     */
});