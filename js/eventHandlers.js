function editCardHandler(e){
  console.log('double click', cardInstanceList);
  let id = this.getAttribute('data-id');
  for(let i=0;i<cardInstanceList.length;i++) {
    if(Number(id) === Number(cardInstanceList[i].cardId)) {
      cardInstanceList[i].populateDataOnModal();
      break;
    }
  }
  modalWindow.style.display = "block";
}

function showModal(e) {
  modalWindow.style.display = "block";
  clearModal();
};

function saveTaskHandler(e) {
  if(e.target.id === "save-task"){
    let info = qa('#task-content').value;
    let dueDate = qa('#due-date').value;
    let assignee = qa('#assignee').value;
    let taskState = qa('#tasks').value;
    let currentCardID = qa('#current-cardID').innerText;
    let isRemoveModal = currentCardID ? editExistingCard(taskState, info, dueDate, assignee, currentCardID) : saveNewCard(taskState, info, dueDate, assignee);
    if(isRemoveModal) {
      modalWindow.style.display = "none";
    }
  }
}