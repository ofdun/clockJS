window.onload = function () {


    const timeHTML = document.getElementById("time")
    firstrun()

    Interval = setInterval(update, 1000)

    function update() {
        let now = new Date().toString().split("PM")[0].split(" ")
        let time = now[4]

        timeHTML.innerHTML = time
    }

    function firstrun() {
        let now = new Date().toString().split("PM")[0].split(" ")
        let time = now[4]
        timeHTML.innerHTML = time
    }

}