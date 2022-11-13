//Packages required for application
const inquirer = require("inquirer");
const fs = require("fs");

const genHTML = ({
  project,

  description,
  contributing,
  tests,
  installation,
  github,
  email,
  usage,
}) =>
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
        <h1 #="heading-title">${project}</h1>
      
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
                <li class="list-group-item">
                  <a href="#desc-section">Description</a>
                </li>
                <li class="list-group-item">
                  <a href="#contrib-section">Contributing & Tests</a>
                </li>
                <li class="list-group-item">
                  <a href="#install-usage-sect">Installation & Usage</a>
                </li>
                <li class="list-group-item">
                  <a href="#questions-section">Questions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="desc-section">
        <div class="row desc-section">
          <div class="col">
            <h2 id="desc-title">Description</h2>
          </div>
        </div>
  
        <div class="row">
          <div class="col">
            <div class="container container-desc">
              <div>${description}</div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="contrib-section">
   
  
        <div class="row row-contribute">
          <div class="col">
            <h2 id="contrib-title">Contributing</h2>
            <div class="container-contribute">
              <div>${contributing}</div>
            </div>
          </div>
  
          <div class="col">
            <h2 id="test-title">Tests</h2>
            <div class="container container-tests">
              <div>${tests}</div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="install-usage-sect">
        <div class="row">
          <div class="col">
            <h2 id="install-title">Installation</h2>
            <div class="container install">
              <div>${installation}</div>
            </div>
          </div>
  
          <div class="col">
            <h2 id="usage-title">Usage</h2>
            <div class="container usage">
             
              <div>${usage}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions-section">
        <div class="row questions-section">
          <div class="col">
            <h2 id="questions-title">Questions</h2>

       

            <div class="container container-questions">
              <div>My github profile : <a href="${github}">${github}</a></div>
              <br>
              <div>If you have further questions regarding this project your can contact me at <a href="${email}">${email}</a></div>
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
      message: "What is the name of your project?",
      name: "project",
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
      message: "How can you perform tests for this project?",
      name: "tests",
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
    {
      type: "input",
      message: "Please enter your github profile link",
      name: "github",
    },
    {
      type: "input",
      message: "Please enter your email address",
      name: "email",
    },
  ])
  .then((responses) => {
    const htmlPageContent = genHTML(responses);

    fs.writeFile("./src/index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
