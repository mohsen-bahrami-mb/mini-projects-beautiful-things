document.querySelector('.login').addEventListener("click", checkAccess);
function checkAccess(e) {
    let login = false;
    if (login == true) {
        e.target.innerHTML = "&#9989;"
        e.target.classList.add('success');
        e.target.addEventListener('animationend', () => {
            e.target.innerHTML = "login";
            e.target.classList.remove('success');
        })
    } else {
        e.target.innerHTML = "wrong"
        e.target.classList.add('wrong');
        e.target.addEventListener('animationend', () => {
            e.target.innerHTML = "login";
            e.target.classList.remove('wrong');
        })
    }
};
