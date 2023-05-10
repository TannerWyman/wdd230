function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hBtn").classList.toggle("open");
}

const x = document.getElementById('hBtn')
x.onclick = toggleMenu;