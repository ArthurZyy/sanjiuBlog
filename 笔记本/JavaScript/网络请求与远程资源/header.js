// --------------------------------------------------
// header

let h = new Headers();

h.set('a', 'b');
h.has('a');
h.get('a');
h.delete('a');
console.log(...h.keys());
console.log(...h.values());
console.log(...h.entries());

// 与map不一样
let h2 = new Headers({a: 'b'})
h2.append({c: 'd'});