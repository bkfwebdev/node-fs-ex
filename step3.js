let fileSystem = require("fs");
let axios = require("axios");
let myInput = process.argv;
let arg1 = myInput[2];
let arg2 = myInput[3];
let arg2 = myInput[4];
let isURL = /http/i;
let isWriteFlag = /--out/i;
let isFileName = /^[-\w^&'@{}[\],$=!#().%+~ ]+$/;

const processInput = (firstArg, secondArg, thirdArg) => {
  if (isURL.test(firstArg)) {
    /* write contents of url to console */
  }

  if (isWriteFlag.test(firstArg) && isURL.test(secondArg)) {
    /* write url contents to a file name given in thirdArg */
  }

  if (isFileName.test(firstArg)) {
    /* write data to console */
  }

  if (isWriteFlag.test(firstArg) && isFileName.test(secondArg)) {
    /* write data to file file name given in thirdArg */
  }
};

const cat = (arg) => {
  fileSystem.readFile(arg, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      return data;
    }
  });
};

const webCat = () => {
  axios
    .get(arg)
    .then(function (response) {
      // handle success

      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      process.exit(1);
    });
};
