
function startTime(){
            const adesso = new Date();
            let ora = adesso.getHours();
            let minuti = adesso.getMinutes();
            let secondi = adesso.getSeconds();
            minuti = dueCifre(minuti);
            secondi = dueCifre(secondi);
          document.getElementsByClassName('orologio')[0].innerHTML = ora + ":" + minuti + ":" + secondi;
          setTimeout(startTime, 1000); // 1000 è un secondo   
}
   function dueCifre(cifra){
            if (cifra < 10) { cifra = "0" + cifra}; 
            return cifra;
   }

function aprimenu(){
   let menu = document.getElementById("menu");
   if ( menu.style.visibility =="visible") menu.style.visibility= "hidden";
   else menu.style.visibility="visible";
}


      