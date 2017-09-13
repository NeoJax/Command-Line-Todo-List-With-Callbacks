function tasks(){
  const fs = require('fs');
  const command = process.argv[2];
  const string = process.argv[3];
  const add = require("./add.js");
  const complete = require("./complete.js");
  const del = require("./delete.js");
  const list = require("./list.js");

  function getData() {
    return new Promise((resolve, reject) => {
      fs.readFile("todo.json", 'utf8', function(error, data){
        if(error){
          reject(error);
        }
        resolve(data);
      });
    });
  }

  function writeData() {
    return new Promise((resolve, reject) => {
      fs.writeFile("todo.json", 'utf8', function(error, data){
        if(error){
          reject(error);
        }
        resolve(data);
      });
    });
  }

  if(command === "test"){
    getData().then(data => {
      data = JSON.parse(data);
      console.log(data);
    })
  } else if (command === "add") {

  } else if (command === "complete") {

  } else if (command === "delete") {

  } else if (command === "list") {

  }
}

tasks();
