const burger = document.querySelector('.burgers');
const nav_memu = document.querySelector('.nav_memu');
const nav_back = document.querySelector('.nav_back');


const handleBurgerClick = () =>{
    nav_memu.classList.toggle("active");
    nav_back.classList.toggle("active");
    burger.classList.toggle("active");
}



if(burger){
    burger.addEventListener('click', handleBurgerClick);
}