
function  Login(){
    var Usme=document.getElementById("Username").value;
    var Pin=document.getElementById("Pin").value;

    if(Usme=="10677819"&& Pin=="94247" ){
       window.open("Student.html")
        window.close("index.ejs")
    
    }
   else if(Usme==""){
        Username.style.border="3px solid red";
        Username.textContent="Username is required";
        Username.focus();
        return false;

    }
    else if(Pin==""){
        Pin.style.border="3px solid red";
        Pin.textContent="Password is required";
        Pin.focus();
        

    }

    else{
        alert("Invalid Credentials")
    
    }


}
