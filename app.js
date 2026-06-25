import fs from "fs"
 let data=fs.readFileSync('demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error");
        
    }else{
        console.log(data);
        
    }
 })
 console.log(data);
  let data1=fs.writeFileSync('vis.txt',"helllo vishnu")
