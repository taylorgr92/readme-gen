//Packges required for application
const inquirer = require("inquirer");
const fs = require("fs");

//Create array of questions
inquirer
.prompt = ([
//   {
//     type: "input",
//     message: "Choose a license for you application",
//     licenses: {
//       license: "",
//     },
//     name: "license",
//   },
  {
    type: "input",
    message: "What is your location?",
    name: "location",
  },
  {
    type: "input",
    message: "Enter your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Github URL?",
    name: "github",
  },

]);
