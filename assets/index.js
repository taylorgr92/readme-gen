//Packges required for application
const inquirer = require("inquirer");
const fs = require("fs");


const genHTML = ({ name, location, github, linkedin }) =>
  `"`;

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
  .then((responses) => {
    const htmlPageContent = genHTML(responses);

    fs.writeFile("./src/index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
