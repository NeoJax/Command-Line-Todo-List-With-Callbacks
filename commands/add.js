let add = function(objArr, string){
  let task =
  {
    "id": objArr.length,
    "task": string,
    "complete": false
  };
  objArr.push(task);
  return objArr;
}

module.exports.add = add;
