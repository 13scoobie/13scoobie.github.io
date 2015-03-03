$(document).ready(function(){
   $(".offcanvas li a").click(function(){
     //slide up all the link lists
     $(".offcanvas ul ul").slideUp();
     //slide down the link list below the h3 clicked - only if its closed
     if(!$(this).next().is(":visible"))
     {
       $(this).next().slideDown();
     }
   })
});