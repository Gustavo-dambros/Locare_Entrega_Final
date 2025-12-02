   
const menu=document.getElementById("menu_icon");
const sidebar=document.getElementById("sidebar")

function mudarMenu(){

sidebar.classList.toggle("translate-x-0");
sidebar.classList.toggle("translate-x-full");
menu.src='./Img/menu_icon.svg';

}

document.addEventListener('click', (e) =>    {
   const clicouFora = !sidebar.contains(e.target);
    const clicouNoBotao = menu.contains(e.target);

    if (clicouFora && !clicouNoBotao) {
        sidebar.classList.remove("translate-x-0");
        sidebar.classList.add("translate-x-full");

}})

