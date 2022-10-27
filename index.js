//Packges required for application
const inquirer = require("inquirer");
const fs = require("fs");

const genHTML = ({ location, email, github, }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    
  </div>
</div>
</body>
</html>`;

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
