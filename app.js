import fs from "fs"
 let data=fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error");
        
    }else{
        console.log(data);
        
    }
 })
 console.log(data);
 
