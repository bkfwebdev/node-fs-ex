let fileSystem = require("fs");
let myInput = process.argv;
let arg1 = myInput[2];
let isURL = /http/i

const cat = () => {
fileSystem.readFile(arg1,"utf8",(err,data)=>{
    if (err){
        console.log(err);
        process.exit(1);
    } else {
        console.log(data)
    }
})
}

cat()
