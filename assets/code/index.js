var menuOpened = false
document.getElementById('menu').style.width = "0px"
document.getElementById('menu').style.right = "-100px"

function menu() {
    if (menuOpened == true) {
        document.getElementById('menu').style.width = "0px"
        document.getElementById('menu').style.right = "-100px"
        menuOpened = false
    } else {
        document.getElementById('menu').style.width = "200px"
        document.getElementById('menu').style.right = "0"
        menuOpened = true
    }
}