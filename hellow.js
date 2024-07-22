
window.onload = function () {
    click();
}
//חלונית הצטרפות 
let body=document.querySelector("#hellow1");
let mytimmer;
 mytimmer= setTimeout(function (){
    body.innerHTML=`<div id="hellow">
    <div><h1>חיכינו לך!</h1><p>מוזמן להצטרך למועדון הלקוחות שלנו
    ולקבל מתנות שוות!</p></div></div>`;
    
},500);  
//בלחיצה על הדף החלון יעלם
function click(){
    document.querySelector("body").addEventListener('click',stop);
}
//עצירת הטיימר
function stop(){
    clearInterval(mytimmer);
    document.querySelector("#hellow").style.display="none";
}


    




