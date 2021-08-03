window.onload=function(){
    this.document.getElementById("btnPosalji").addEventListener("click",provera);
  /*  document.getElementById("ddlista").addEventListener("change", proveraddliste);  */

  //dinamicki ispis menija
var meni=document.getElementById("meni");
 var nizMeni=["O nama","Tipovi kože","Brendovi","Naš prostor","Kontakt"];
 var ispisMenija='';
 ispisMenija+="<ul>";
 for(var i=0;i<nizMeni.length;i++){
      var nizHref=["#prviclanak","#drugiclanak","#brendovi","#nasprostor","#forma"];
      for(var h=0;h<nizHref.length;h++){
          if(i==h){
              ispisMenija+='<li><a id="'+nizMeni[i]+'" href="'+nizHref[h]+'">'+nizMeni[i]+'</a></li>'
            }
       
      }
     
 }
 ispisMenija+="</ul>";
 meni.innerHTML=ispisMenija;


 //dinamicki ispis brendova

 var slikebrenda=["images/12a.jpg",
 "images/a3.png",
 "images/a4.jpg","images/a11.jpg","images/a6.png",
 "images/a7.jpg","images/a8.png","images/a9.jpg"];
 
 for(var i=0;i<slikebrenda.length;i++){

    
    var img= document.createElement("img"); 
    img.setAttribute('alt',"logo brenda"); 
    img.setAttribute('src',slikebrenda[i]); 
    img.setAttribute('class',"logobrenda");
    document.getElementById('drzaclogo').appendChild(img);
    
 }

 

    
    var radio=document.getElementById("radio");
    var nizStarost = ["25-35","35-45","45-55","55+"];
    var ispisGodina=``;
    for(let i of nizStarost){
        ispisGodina+=`<li><input type="radio" name="radio" value="${i}"/>${i}</li>`;
    }
    radio.innerHTML =ispisGodina; 

 


    var nizTipKoze=["Suva koza","Masna koza","Kombinovana koza","Osetljiva koza","Normalna koza"];
    let ispis=`<option value="0" class="drop">Izaberite...</option>`; 
        for(let i of nizTipKoze){
            ispis += `<option value="${i}"class="drop">${i}</option>`;
        }
 document.getElementById("ddlista").innerHTML=ispis;
}


 var brisanje=document.getElementsByClassName("obrisi");
var uspesnaPoruka=document.getElementById("ispisTacnePoruke");

function provera(){



    var ispravno = true;
    var uspesnaPoruka=document.getElementById("ispisTacnePoruke");
    uspesnaPoruka.innerHTML="";
    var reIme = /^[A-ZŽŠĐČĆ][a-zšđčćž]{2,11}$/;
    var rePrezime = /^([A-ZŽŠĐČĆ][a-zšđčćž]{2,15})(\s[AZŽŠĐČĆ][a-zšđčćž]{2,15})*$/;
    var reEmail = /^\w+([\.\-]\w+)*@\w+([\.\-]\w+)*(\.\w{2,4})+$/;

    var ime = document.querySelector("#ime").value.trim();
    var prezime =document.querySelector("#prezime").value.trim();
    var email = document.querySelector("#email").value.trim();
    var poruka = document.querySelector("#poruka").value.trim();
    var starost = document.querySelector("#starost");

    if(!reIme.test(ime)) {
        document.querySelector("#ime").classList.add("border");
        ispravno = false;
        } else{
            document.querySelector("#ime").classList.remove("border");
        }

    if(!rePrezime.test(prezime)) {
        document.querySelector("#prezime").classList.add("border");
        ispravno = false;
        } else{
            document.querySelector("#prezime").classList.remove("border");
            }

    if(!reEmail.test(email)) {
        document.querySelector("#email").classList.add("border");
        ispravno = false;
        } else{
            document.querySelector("#email").classList.remove("border");
            }
            
    if(poruka == "") {
        document.querySelector("#poruka").classList.add("border");
        ispravno = false;
        } else{
            document.querySelector("#poruka").classList.remove("border");
                }


     var ddlista=document.getElementById("ddlista");
         if(ddlista.value=="0"){
            ddlista.classList.add("greska");
            ispravno=false;
                }else{
                   ddlista.classList.remove("greska");
                   ispravno=true;
                }


let izborStarost = "";
    for(let i = 0; i < nizStarost.length; i++){
        if(nizStarost[i].checked){
             izborStrost = nizStarost[i].value;
                        break;
                    }
                }
            
        if(izborStarost == ""){
             document.querySelector("#listaradio").classList.add("greska1");
                ispravno=false;
                }
                else{
                    document.querySelector("#listaradio").classList.remove("greska1");
                    ispravno=true;
                }

} 


var slikaslajder=['images/13.jpg','images/14.jpg']; 
 
function promeniSliku(){ 
 
 for (var i=0; i < slikaslajder.length; i++) { 
  (function(ind) { 
      setTimeout(function(){ 
        
    document.getElementById("slika").style.backgroundImage="url('" + slikaslajder[ind] + "')" 
    document.getElementsByClassName("next") 
 
   }, 3000*ind); 
     })(i); 
 } 
} 
promeniSliku() 
 setInterval(function(){ 
    promeniSliku() 
},3000*slikaslajder.length)  


var slikaprostor=['images/q1.jpg','images/q2.jpg','images/q3.jpg','images/q5.jpg'
,'images/q6.jpg','images/q6.jpg'
,'images/q12.jpg']; 
 
function promeniProstor(){ 
 
 for (var s=0; s < slikaprostor.length; s++) { 
  (function(ind) { 
      setTimeout(function(){ 
        
    document.getElementById("leviprostor").style.backgroundImage="url('" + slikaprostor[ind] + "')" 
    document.getElementById("leviprostor").style.backgroundSize="contain";
    document.getElementById("leviprostor").style.backgroundRepeat="no-repeat";
    document.getElementsByClassName("next") 
 
   }, 1000*ind); 
     })(s); 
 } 
} 
promeniProstor() 
 setInterval(function(){ 
    promeniProstor() 
},1000*slikaprostor.length) 



















/*function proveraddliste(){
 
    var ddlista=document.getElementById("ddlista");
    if(ddlista.value=="0"){
       ddlista.classList.add("greska");
       ispravno=false;
    }else{
       ddlista.classList.remove("greska");
       ispravno=true;
    }

} */

