/*Show Passwod*/
$(document).ready(function(){
    $('.fa-eye').on('click', function(){
       var passInput=$(".password");
       if(passInput.attr('type')==='password')
         {
           passInput.attr('type','text');
       }
       else{
          passInput.attr('type','password');
       }
   })
})



