let gameseq=[];
let userseq=[];
let colors=["yellow","green","red","purple"];
let started=false;
let level=0;
let h2= document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
        
    }

})
function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(() => {
    btn.classList.remove("flash");
   }, 750);
}
function levelup(){
    userseq=[];
    level++;
h2.innerText=`level ${level}`;

let randidx=Math.floor(Math.random()*3)
let randcolor=colors[randidx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
 
btnflash(randbtn);

}

function checkans(indx){

   
    if(userseq[indx]==gameseq[indx])
    {
        if(userseq.length== gameseq.length){
            setTimeout(() => {
                levelup();
            }, 1000);
        }
      
    }
    else{
        h2.innerHTML=`gameover! your score was ${level} press any key to start again`;
        reset();
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(() => {
             body.style.backgroundColor="white";
        }, 1000);

     }




}

function btnpress (){
    let btn = this;
    btnflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)

}

function reset(){
started=false;
gameseq=[];
userseq=[];
level=0;

}