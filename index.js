// const fs = require("fs");
import fs from "fs";
import inquirer from 'inquirer';
import qr from "qr-image"

// https://www.google.com/
inquirer
  .prompt([
    {
        message: "Type in your URL",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

  })


// const generateName = require("sillyname");

// fs.writeFile("message.txt", "hello from node.js", err =>{
//     if (err) throw err;
//     console.log("the file has been saved");
// })

// fs.readFile("./message.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// var sillyname = generateName();

// console.log(sillyname);