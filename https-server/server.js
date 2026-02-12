const n = require("http");
const a = require("fs");


const server=n.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("homepage")
    }else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("aboutpage")
    }else if (req.url === '/youtube') {
        res.writeHead(302, { 'Location': 'https://www.youtube.com' });
        res.end();
    }
    else if(req.url==='/file'){
        const readStream=a.createReadStream('./your name.mp4');
        res.writeHead(200,{'content-type':'video/mp4'});
        readStream.pipe(res);

    } else {
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("404 page found")
    }
})


server.listen(3000,()=>{
    console.log("server listening http://localhost:3000")
})

