//Packges required for application
const inquirer = require("inquirer");
const fs = require("fs");

//Create array of questions
// inquirer.prompt = [
//   {
//     type: "input",
//     message: "What is your location?",
//     name: "location",
//     choice: "",
//   },
//   {
//     type: "input",
//     message: "What is your email address?",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "What is your Github URL?",
//     name: "github",
//   },
// ].then((data) => {
//   const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

//   fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
//     err ? console.log(err) : console.log("Success!")
//   );
// });

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your location?",
    },
    {

      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Github URL?",
      name: "github",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
