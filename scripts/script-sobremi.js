var img1='img/k1.png';
var img2='img/k2.png';
var booleano=true;
setInterval(() => {
    if (booleano) {
        document.getElementById("fotok").style.backgroundImage = "url("+img2+")"
        booleano=false;    
    } else {
        document.getElementById("fotok").style.backgroundImage = "url("+img1+")"
        booleano=true;  
    }
        
}, 5000);