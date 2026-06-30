import fs from "fs"
 let data=fs.readFileSync('demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error");
        
    }else{
        console.log(data);
        
    }
 })
 console.log(data);
//   let data1=fs.writeFileSync('vis.txt',"helllo vishnu")
//  let data2=fs.appendFile("vis.txt","\ngood morning",(err)=>{
//     if(err){
//         console.log("error");
        
//     }else{
//         console.log("data append successfully");
        
//     }
//  })

async function write(){
    let d=await fs.readFile('vis.txt','utf-8',(err,data)=>{
        if(err){
            console.log("error")
            
        }else{
            console.log(data);
            
        }
    })
}
write()

