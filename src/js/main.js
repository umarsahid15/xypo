const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

sideNav.style.right = '-250px';
menuBtn.onclick = () => {
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0px';
    } else {
        sideNav.style.right = '-250px';
    }
}
