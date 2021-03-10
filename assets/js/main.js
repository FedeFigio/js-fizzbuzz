var stampaDOM = document.querySelector("#stampa")
for (let i = 1; i <= 100; i++) {
    if (!(i % 15)) {
        stampaDOM.innerHTML += "<li>fizzbuzz</li>"
    } else if (!(i % 3)) {
        stampaDOM.innerHTML += "<li>fizz</li>"
    } else if (!(i % 5)) {
        stampaDOM.innerHTML += "<li>buzz</li>"
    } else {
        stampaDOM.innerHTML += "<li>" + i + "</li>"
    }

}