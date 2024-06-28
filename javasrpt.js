let options=document.querySelectorAll(".game");
let ucnt=0;
let ccnt=0;
let result=document.querySelector(".result");
let cscore=document.querySelector(".compscore");
let uscore=document.querySelector(".userscore")
const getcompopt=()=>{
    let option=options[Math.floor(Math.random()*3)];
    return option.getAttribute("id");
}
const checkwinner=(useroption)=>{
    let compoption=getcompopt();
    if(compoption===useroption){
        result.innerText=`draw you both choose ${compoption}`;
        result.style.backgroundColor="black";
    }
    if(compoption==="rock" && useroption==="paper"){
        result.innerText=`You win comp choose ${compoption}`;
        result.style.backgroundColor="green";
        ucnt++;
        uscore.innerText=ucnt;
    }
    if(compoption==="rock" && useroption==="sessior")
    {
        result.innerText=`You lose comp choose ${compoption}`;
        result.style.backgroundColor="red"
        ccnt++;
        cscore.innerText=ccnt;
    }
    if(compoption==="paper" && useroption==="sessior"){
        result.innerText=`You win comp choose ${compoption}`;
        result.style.backgroundColor="green";
        ucnt++;
        uscore.innerText=ucnt;
    }
    if(compoption==="paper" && useroption==="rock"){
        result.innerText=`You lose comp choose ${compoption}`;
        result.style.backgroundColor="red";
        ccnt++;
        cscore.innerText=ccnt;
    } 
    if(compoption==="sessior" && useroption==="rock"){
        result.innerText=`You win comp choose ${compoption}`;
        result.style.backgroundColor="green";
        ucnt++;
        uscore.innerText=ucnt;
    }
    if(compoption==="sessior" && useroption==="paper"){
        result.innerText=`You lose comp choose ${compoption}`;
        result.style.backgroundColor="red";
        ccnt++;
        cscore.innerText=ccnt;
    }
}
options.forEach((option)=>{
    option.addEventListener("click", ()=>{
        let useroption=option.getAttribute("id");
        checkwinner(useroption);
    })
})

