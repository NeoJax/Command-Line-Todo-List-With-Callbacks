let del = function(objArr, num){
  console.log("Deleted task", num + ": \'" + objArr[num].task + "\'");
  objArr.splice(num, 1);
}

module.exports.del = del;
