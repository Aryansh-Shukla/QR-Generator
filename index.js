
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
    message:'enter URL to convert',
    name:'URL',
}])
.then((answers)=>{
    const url=answers.URL;
    var qr_cd=qr.image(url);
    qr_cd.pipe(fs.createWriteStream("qr-cd.png"));

    fs.writeFile("link.txt",url,(err)=>{
        if(err) throw err;
        console.log("file saved");
    })
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });