const fs = require('fs');
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname + '/read.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/write2.txt');
const transFormedStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 10000);
    }
});
const writeStream = process.stdout;
const outputSteam = readstream.pipe(transFormedStream);

outputSteam.pipe(writeStream);
outputSteam.pipe(fileWriteStream);