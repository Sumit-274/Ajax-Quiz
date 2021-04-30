function Fruits() {
    let element = document.getElementById("heading").innerHTML = "<b>Fruits</b>"
    const xhr = new XMLHttpRequest();

    xhr.open("Get", "Fruits.json", true)

    xhr.onload = function () {
        let data = JSON.parse(this.responseText)
        let element = document.getElementById("List1")
        let str = "";
        Array.from(data["fruits"]).forEach(function (params) {
            str += `<li>${params["name"]}`
            element.innerHTML = str
        })
    }

    xhr.send()
}
function Vegetable() {

    let element = document.getElementById("heading1").innerHTML = "<b>Vegetable</b>"
    const xhr = new XMLHttpRequest();

    xhr.open("Get","Vegetable.json",true)

    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        let element = document.getElementById("List2");
        let str = "";

        Array.from(data["vegetables"]).forEach(function (params) {
            str += `<li>${params}</li>`
            element.innerHTML = str
            console.log(params)
        })
    }
    
    xhr.send()
}

let element = document.getElementById("BTN1").addEventListener("click",Fruits)
let element2 = document.getElementById("BTN2").addEventListener("click",Vegetable)