const input=document.querySelector(".name");
const submit=document.querySelector(".enter");


const correct= document.querySelector(".right");
const wrong= document.querySelector(".wrong");


submit.addEventListener('click',(e)=>{
    
    if(input.value=="SHAHED" ){
        correct.classList.add('show');
        wrong.classList.remove('show');

    }else{
        wrong.classList.add('show');
        correct.classList.remove('show')
    }
});
var typed = new Typed('.right', {
    strings: ['Ummmmmmmmmmmmmmah','Love You Babe ....'],
    typeSpeed: 15,
    backSpeed: 15,
    smartBackspace: true,
    loop: true,
        
  });
var typed = new Typed('.wrong', {
    strings: ['Tor nanir Heda','Tor Nanire Hondai'],
    typeSpeed: 15,
    backSpeed: 15,
    smartBackspace: true,
    loop: true,
        
  });
