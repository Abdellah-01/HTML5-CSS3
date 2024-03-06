let menuBtn = document.getElementById('menu-btn')
let sideNav = document.getElementById('side-nav')
let login = document.getElementById('login')

sideNav.style.right = '-250px'
menuBtn.onclick = function() {
    if (sideNav.style.right == '-250px'){
        sideNav.style.right = '0'
    }
    else{
        sideNav.style.right = '-250px'
    }
}

login.onclick = function() {
    window.location.href = "form.html";
}

