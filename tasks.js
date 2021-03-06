#!/usr/bin/env node

function tasks(){
  const fs = require('fs');
  const command = process.argv[2];
  const string = process.argv[3];
  const add = require("./commands/add.js");
  const complete = require("./commands/complete.js");
  const del = require("./commands/delete.js");
  const list = require("./commands/list.js");

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

  function writeData(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile("todo.json", JSON.stringify(data), 'utf8', function(error){
        if(error){
          reject(error);
        }
        resolve(data);
      });
    });
  }
  getData().then(objArr => {
    objArr = JSON.parse(objArr);
    if(command === "test"){
    } else if (command === "add") {
      objArr = add.add(data, string);
      writeData(objArr);
    } else if (command === "complete") {
      objArr = complete.complete(objArr, string);
      writeData(objArr);
    } else if (command === "delete") {
      objArr = del.del(objArr, string);
      if(objArr === undefined){
        writeData([{}]);
      } else {
        writeData(objArr);
      }
    } else if (command === "list") {
      list.list(objArr, string);
    } else if (command === "reset") {
      writeData([
        {
          "id": 0,
          "task": "work work",
          "complete": false
        }
      ])
    } else {
      throw new Error("Command is not one of the listed commands being add, complete, delete, or list.")
    }
  })
}

tasks();
