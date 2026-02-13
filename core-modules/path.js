const p = require("path");

const filePath = "user/folder/project/file.txt";

console.log("base name:", p.basename(filePath));
console.log("directory name:", p.dirname(filePath));
console.log("extension name:", p.extname(filePath));
console.log("current file:", __dirname);
console.log("file name:", __filename);
console.log(p.resolve("text.txt"));
console.log("joined path:", p.join(__dirname, "file", "text.txt"));
