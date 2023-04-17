const fs=require('fs')
console.log(__dirname);
const readStream=fs.createReadStream(__dirname+"/read.txt")
const writeStream=fs.createWriteStream(__dirname+"/write.txt")
readStream.pipe(writeStream)