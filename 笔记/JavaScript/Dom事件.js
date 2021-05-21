const text = document.getElementById('text')
text.onmouseenter = function (e) { }
text.onmousedown = function (e) { }
text.onfocus = function (e) { }
text.onclick = function (e) { }

text.addEventListener('click', function name(e) {
    e.stopPropagation()
    // e.target
})


let myEvent = document.createEvent('event_name');
myEvent.initEvent( 'click', false, true)
dispatchEvent(myEvent)

