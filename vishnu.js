// import http from 'http'
import fs from 'fs'
//  const port=3000;
let data =http.createServer((req,res)=>{
    res.end("welcome to server");
    res.end(add())
})
data.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    
})


 async function add(){
    let b=await fs.readFile('./vis.txt','utf-8',(err,data)=>{
        if(err){
            console.log("error");
            
        }else{
            console.log(data);
            
        }
    })
 }

 
add();


 async function wrt(){
    try{
    let c=await fs.writeFile('./vis.txt','okay bye friends')
    console.log("text writed successfully");
    
    }catch(err){
        console.log("error");
        
    }  
 }
wrt();
