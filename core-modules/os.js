const p=require('os');

console.log("userinfo:",p.userInfo())
console.log("platform:",p.platform())
console.log("host name:",p.hostname())
console.log("architecture:",p.arch())
console.log("home directory:",p.homedir())
console.log("cpu cores:",p.cpus().length)
console.log("os uptime:",p.uptime())
console.log("total memory:",Math.round(p.totalmem()/1024**3),'GB');
console.log("free memory:",Math.round(p.freemem()/1024**3),'GB');

