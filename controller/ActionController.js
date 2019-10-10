
var bodyParser=require("body-parser");
urlencodedParser=bodyParser.urlencoded({extended:false});
var data=[]; 
module.exports=function(app){

    app.get("/student",(req,res)=>{
       res.render("index"); 
    });

    
    app.get("/StudentData",(req,res)=>{
        res.render("StudentData",{information:data}); 
     });

    app.get("/Rgistration",(req,res)=>{
        res.render("Rgistration",{information:data}); 
     });

     app.post("/Rgistration",urlencodedParser,(req,res)=>{
          StudentName=req.body.studname;
          StudentID=req.body.studID;
          StudCourse=req.body.studCourse;
          Hall=req.body.HALL;
          Campus=req.body.Campus;
          Level=req.body.LEVEL;
          Gender=req.body.gender;
          Room=req.body.room;

         data.push(req.body); 
         res.send(data);
    });





    app.post("/student",urlencodedParser,(req,res)=>{
        
        StudentPin=req.body.Pin;
        StudentID=req.body.Usme; 
        if(StudentPin=="12345"&&StudentID=="10677819"){
            res.render("Student");
        }
        
        else{
            res.json({message:"Invalid credentials"});
        }
    
    });

    

        

};