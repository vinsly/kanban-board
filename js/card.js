function Card (taskState, info, dueDate, assignee, cardId) {
  this.taskState = taskState;
  this.info = info;
  this.dueDate = dueDate;
  this.assignee = assignee;
  this.cardId = cardId || Math.floor(Math.random()*10000000000);
}

Card.prototype.createCard = function () {
  let cardView = qa(`#${this.taskState}`).getElementsByClassName('card-view')[0]
  let div = createHtmlNode('div', 'card-container');
  div.setAttribute('data-id', this.cardId);
  let infoNode = createHtmlNode('span', 'span-card', this.info);
  div.appendChild(infoNode);
  let labNode = createHtmlNode('label', null, 'Due: ');
  div.appendChild(labNode);
  let dateNode = createHtmlNode('span', null, this.dueDate);
  div.appendChild(dateNode);
  let nameNode = createHtmlNode('span', 'span-card', this.assignee);
  div.appendChild(nameNode);
  $on(div, 'dblclick', editCardHandler);
  cardView.appendChild(div);
}

Card.prototype.populateDataOnModal = function () {
  qa('#task-content').value = this.info;
  qa('#due-date').value = this.dueDate;
  qa('#assignee').value = this.assignee;
  qa('#tasks').value = this.taskState;
  qa('#current-cardID').textContent = this.cardId;
}

Card.prototype.updateStore = function (task) {
  var {taskState, info, dueDate, assignee, cardId} = this;
  var todovalue = {taskState, info, dueDate, assignee, cardId}
  let cardList = window.localStorage.getItem('cardList');
  if (!cardList) {
    let arr = [];
    arr.push(todovalue);
    window.localStorage.setItem('cardList', JSON.stringify(arr));
  }
  else {
    cardList = JSON.parse(cardList);
    if (task === 'add') {
      cardList.push(todovalue)
    }
    else {
      for(let i=0;i<cardList.length;i++){
        if(Number(cardList[i].cardId) === Number(this.cardId)){
          cardList[i] = todovalue;
          break;
        }
      }
    }
    
    window.localStorage.setItem('cardList', JSON.stringify(cardList));
  }
}

Card.prototype.edit = function(taskState, info, dueDate, assignee){
  this.info = info;
  this.assignee = assignee;
  this.dueDate = dueDate;
  let targetNode = document.querySelectorAll(`[data-id="${this.cardId}"]`)[0];
  if (this.taskState === taskState) {
    let updatedNodeList = targetNode.childNodes;
    updatedNodeList[0].textContent = this.info;
    updatedNodeList[2].textContent = this.dueDate;
    updatedNodeList[3].textContent = this.assignee;
  }
  else {
    this.taskState = taskState;
    targetNode.parentNode.removeChild(targetNode);
    this.createCard();
  }
}