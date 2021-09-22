let fileSystem = require("fs");
let axios = require("axios");
let myInput = process.argv;
let arg1 = myInput[2];
let arg2 = myInput[3];
let arg2 = myInput[4];
let isURL = /http/i


const cat = () => {
fileSystem.readFile(arg1,"utf8",(err,data)=>{
    if (err){
        console.log(err);
        process.exit(1);
    } else {
        if(arg2 == "--out"){fileSystem.writeFile(arg3),data,(err)=>{if(err){
            console.log(err);
            process.exit(1)}
        }
    }else {
        console.log(data);
    }
}
}
}

const webCat = () => {
    axios.get(arg1)
  .then(function (response) {
    // handle success
    
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    process.exit(1)
  });

}



if(isURL){webCat()}else{cat}
