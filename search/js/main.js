var search = document.getElementById('search'),
    btn = document.getElementById('btn'),
    modal = document.getElementById('myModal'),
    sp = document.getElementsByClassName('close')[0];



btn.onclick = function () {
    modal.style.display = 'block';
}
sp.onclick = function () {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

btn.addEventListener('click', function () {
    document.querySelector('.content p').innerHTML = document.getElementById('search').value;
});