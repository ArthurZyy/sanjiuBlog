// -----------------------------
// request

let r = new Request('https://foo.com');
let r2 = new Request(r, {
    method: 'POST'
});
