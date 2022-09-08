document.querySelector('.login').addEventListener("click", checkAccess);
function checkAccess(e) {
    e.target.innerHTML = "wrong"
    e.target.classList.add('wrong');
    e.target.addEventListener('animationend', ()=>{
        e.target.innerHTML = "login";
        e.target.classList.remove('wrong');
    })
};
