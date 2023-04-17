import {readFile,writeFile} from 'fs/promises';

console.log(import.meta.url);// It gives same output as __dirname in  CJS.
const filePath=new URL('./demo.txt',import.meta.url)
let contents=await readFile(filePath,{encoding:'utf-8'})
console.log("contents",contents);

const data={
    name:"Amar Jyoti Patra",
    collage:"Indira Gandhi Institute Of Technology",
    age:27
}

for(const [key,value] of Object.entries(data)){
    contents=contents.replace(`{${key}}`,value)
}
console.log(contents);
await writeFile(new URL('./demo2.txt',import.meta.url),contents)
await writeFile(new URL('./demo2.txt',import.meta.url),"My nickname is Chiku")