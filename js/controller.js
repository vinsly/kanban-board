

function clearModal(){
  let info = qa('#task-content');
  let date = qa('#due-date');
  let assignee = qa('#assignee');
  let task = qa('#tasks');
  info.value = "";
  info.classList.remove('error-view');
  date.value = "";
  date.classList.remove('error-view');
  assignee.value = "";
  assignee.classList.remove('error-view');
  task.value = "";
  task.classList.remove('error-view');
}

function saveNewCard(taskState, info, dueDate, assignee) {
  if (!checkValid(taskState, info, dueDate, assignee)) {
    return false;
  }
  let cardInstance = new Card(taskState, info, dueDate, assignee);
  cardInstance.createCard();
  cardInstanceList.push(cardInstance);
  cardInstance.updateStore('add');
  return true;
}

function editExistingCard(taskState, info, dueDate, assignee, currentCardID) {
  if (!checkValid(taskState, info, dueDate, assignee)) {
    return false;
  }
  qa('#current-cardID').innerText = "";
  for(let i=0;i<cardInstanceList.length;i++) {
    if(Number(currentCardID) === Number(cardInstanceList[i].cardId)) {
      cardInstanceList[i].edit(taskState, info, dueDate, assignee);
      cardInstanceList[i].updateStore();
      return true;
    }
  }
}