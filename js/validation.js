function checkValid(taskState, info, dueDate, assignee) {
  let isValid = true;
  if(info === "") {
    isValid = false;
    qa('#task-content').className += " error-view";
  }
  if(dueDate === "") {
    isValid = false;
    qa('#due-date').className += " error-view";
  }
  if(assignee === "") {
    isValid = false;
    qa('#assignee').className += " error-view";
  }
  if(taskState === "") {
    isValid = false;
    qa('#tasks').className += " error-view";
  }
  return isValid
}