$(document).ready(function(){
  $("form").on("submit",()=>{
    var info=$(' form input');
    var info1={info:info.val()};
    
  
    $.ajax({
        type:"POST",
        url:"/Rgistration",
        data:info1,

        success: function(data){
            location.reload();

        }
    });
});
return false;

});
