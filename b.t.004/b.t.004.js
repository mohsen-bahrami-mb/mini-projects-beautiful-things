<<<<<<< HEAD
document.querySelector('.login').addEventListener("click", checkAccess);
function checkAccess(e) {
    e.target.innerHTML = "wrong"
    e.target.classList.add('wrong');
=======
document.querySelector('.login').addEventListener("click", checkAccess)
function checkAccess(e) {
    e.target.innerHTML = "wrong"
    e.target.classList.toggle('wrong');
>>>>>>> 515ad2852f6909c94f8d2ffd49dcaa66ea416f25
    e.target.addEventListener('animationend', ()=>{
        e.target.innerHTML = "login";
        e.target.classList.remove('wrong');
    })
}