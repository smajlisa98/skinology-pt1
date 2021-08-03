$(document).ready(function(){
    
    $('#O nama').click(function() {
        $('html, body').animate({
        scrollTop: $("#prviclanak").offset().top
        }, 1000);});
        
        $('#Tipovi kože').click(function() {
         $('html, body').animate({
        scrollTop: $("drugiclanak").offset().top
        }, 1000);});
        
        $('#Brendovi').click(function() {
        $('html, body').animate({
        scrollTop: $("#brendovi").offset().top
        }, 1000);});
        
        
        $('#Naš prostor').click(function() {
        $('html, body').animate({
        scrollTop: $("#nasprostor").offset().top
        }, 1000);});
       
        $('#Kontakt').click(function() {
        $('html, body').animate({
        scrollTop: $("#forma").offset().top
        }, 1000);
    });


   

       

    $('.tip').hover( 
       function(){ 
        $(this).addClass('pop'); 
         
       }, 
        
       function(){ 
        $(this).removeClass('pop'); 
       
    }); 

       $('#tekstostrani').hover( 
        function(){ 
         $(this).addClass('okvirzatekst'); 
          
        }, 
         
        function(){ 
         $(this).removeClass('okvirzatekst'); 
        
        }); 

     



       $('#strelica i').click(function(){
           $.scrollTo(0,'slow');
           return false;
       });


     /*  $('#okvirsnizeno2').hide()
       var secHidden=true;

       $("#sledeca").click(function() { 
 
        if( secHidden == true) { 
         $("#okvirsnizeno1").hide("slow"); 
         $("#okvirsnizeno2").show("slow"); 
         secHidden = false ;
        } else {  
            secHidden = true ;
        $("#okvirsnizeno2").hide("slow"); 
        $("#okvirsnizeno1").show("slow"); 
          
 
        }  */

         
}); 
   
