//Packges required for application
const inquirer = require("inquirer");
const fs = require("fs");


const genHTML = ({ name, description, contributing, tests, installation, usage }) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./styles.css" />
      <title>ReadMe Generator</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <!-- Heading -->
        <h1>Hi there, my name is ${name}</h1>
      </div>
  
      <section id="section-table-contents">
        <div class="row">
          <div class="col">
            <div id="container table-contents">
              <h2 id="table-of-contents-text">Table of Contents</h2>
            </div>
          </div>
        </div>
  
  
  
        <div class="row">
          <div class="col">
            <div class="container">
              <ul class="list-group">
                
                <li class="list-group-item"><a href="#desc-link">Description</a></li>
                <li class="list-group-item"><a href="#contrib-link">Contributing & Tests</a></li>
                <li class="list-group-item"><a href="#install-usage-link">Installation & Usage</a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="desc-section">
        <div class="row">
          <div class="col">
            <div class="container desc">
              <h2><a id="desc-link">Description</a></h2>
              <div>${description}</div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="contrib-section">
        <div class="row">
          <div class="col">
            <div class="container contribute">
              <h2><a id="contrib-link">Contributing</a></h2>
              <div>${contributing}</div>
            </div>
          </div>
  
          <div class="col">
            <div class="container tests">
              <h2>Tests</h2>
              <div>${tests}</div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="install-usage-sect">
        <div class="row">
          <div class="col">
            <div class="container install">
              <h2><a id="install-usage-link">Installation</a></h2>
              <div>${installation}</div>
              
            </div>
          </div>
  
          <div class="col">
            <div class="container usage">
              <h2>Usage</h2>
              <div>${usage}</div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
  `;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "Who contributed to your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "How can you test this project?",
      name: "usage",
    },
    {
      type: "input",
      message: "Describe installation instructions for your project",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use this project?",
      name: "usage",
    },
    
  ])
  .then((responses) => {
    const htmlPageContent = genHTML(responses);

    fs.writeFile("./src/index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
