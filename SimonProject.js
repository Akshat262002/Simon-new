let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

 
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
})
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
  gameflash(randbtn);
}
function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
},250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
    }

function btnPress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);
    checkans(userseq.length-1)
}

let albtns=document.querySelectorAll(".btn");
for(btn of albtns){
    btn.addEventListener("click",btnPress);
}


function checkans(idx){
//console.log("curr level:",level);

if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
    }
}
else{
    h2.innerHTML=`Game over! your score was <b>${level}</b><br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
}
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}




