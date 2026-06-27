import http from 'http'
 const port=3000;
let data =http.createServer((req,res)=>{
    res.end("welcome to server");
})
data.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    
})

