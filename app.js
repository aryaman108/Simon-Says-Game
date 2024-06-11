let gameseq=[];
let userseq=[];

let start=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];

let highScores=[];

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }

})

function buttonflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let r= Math.floor(Math.random()*4);
    let random_color=btns[r];
    let r_button=document.querySelector(`.${random_color}`);
    // console.log(r,random_color,r_button);
    gameseq.push(random_color);
    console.log(gameseq);
    buttonflash(r_button);
}

let h3=document.querySelector("h3");

function checkanswer(index){
    // console.log(level);
    // let index=level-1;

    if(userseq[index]===gameseq[index]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        // console.log("same");
    }else{
        // l+=level;
        // let max=0;
        // for(let i=0;i<l.length;i++){
        //     if(l[i]>max){
        //         max=l[i];
        //     }
        // }

        highScores.push(level);
        let maxScore = Math.max(...highScores);

        h3.innerText = `Highest Score: ${maxScore}`;

        // h3.innerText=`Highest Score is : ${max}`;

        h2.innerHTML=`Score = ${level} Game Over! Press any key to start!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    uc=btn.getAttribute("id");
    userseq.push(uc);
    // console.log(userseq);
    checkanswer(userseq.length - 1);
}


let allbtn=document.querySelectorAll(".btn");
allbtn.forEach(function(btn) {
    btn.addEventListener("click", btnpress);
});


function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

}
