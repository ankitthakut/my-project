let btn=document.querySelector("#no");
btn.onmouseenter=function(){
    let btn=document.querySelector("#no");
    let ranx=Math.floor(Math.random()*400)+1;
   let rany=Math.floor(Math.random()*400)+1;    
     
    btn.style.position="absolute";
    btn.style.left=ranx+"px";
    btn.style.top=rany+"px";
};
let btn1=document.querySelector("#yes");
btn1.onclick=function(){
    let div=document.querySelector('div');
    let h1=document.querySelector('h1');
     div.style.backgroundImage="url('pexels-picjumbo-com-55570-196664.jpg')";
     h1.innerText="I LOVE YOU TOO!!!";
     btn.remove();
     btn1.remove();
};