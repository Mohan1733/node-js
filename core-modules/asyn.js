const a=require('fs')

// write file asynchronous
a.writeFile('asyntext.txt',"hello world",(err)=>{
    if(err) throw err;
    console.log("file written")
})
console.log("file processing")

// read file
const data=a.readFile('asyntext.txt',{encoding: 'utf-8'},(err,data)=>{
    if(err) throw err;
    console.log("file readed",data)
})
console.log("file processing")

// append file
a.appendFile('asyntext.txt','\nadd content to file',(err)=>{
    if(err) throw err;
    console.log("file updated")
})

// delete file
// a.unlink('asyntext.txt',(err)=>{
//     if(err) throw err;
//     console.log("file deleted");
// })

// create folder
// a.mkdir('folder',(err)=>{
//     if(err) throw err;
//     console.log("create folder");
// })

// delete folder
// a.rmdir('folder',(err)=>{
//     if(err) throw err;
//     console.log("folder deleted");
// })

// // exists
// a.access('asyntext.txt',(err)=>{
//     if(err) throw err;
//     console.log("file exists");
// })


