const body = document.querySelector(".web");
const menu = document.querySelector(".menu");
const ham = document.querySelector("#hamburger");
console.log(menu.style.display )
let b = false;

ham.addEventListener('click', ()=>
{
        b= true;
        menu.style.display = "flex";
});
body.addEventListener('click', ()=>
{
    if(b)
    {
        menu.style.display = "none";
        b= false;
    }

});