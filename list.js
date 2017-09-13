let list = function(objArr){
  let currentTasks = [];
  console.log('ID Description');
  console.log('-- -----------');
  for(let i = 0; i < objArr.length; i++){
    if(objArr[i].complete === false){
      currentTasks.push(objArr[i]);
    }
  }
  for(let i = 0; i < currentTasks.length; i++){
    console.log(currentTasks[i].id, currentTasks[i].task);
  }
  console.log("You have", currentTasks.length, "tasks");
}

module.exports.list = list;
