let complete = function(objArr, num){
  objArr[num].complete = true;
  console.log("Completed task", num + ": \'" + objArr[num].task + "\'");
}

module.exports.complete = complete;
