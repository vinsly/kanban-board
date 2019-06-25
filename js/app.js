(function(){
  
  var onRender = function() {
    let cardList = window.localStorage.getItem('cardList');
    if(!cardList) {
      return false;
    }
    cardList = JSON.parse(cardList);
    cardList.forEach(card => {
      let cardInstance = new Card(card.taskState, card.info, card.dueDate, card.assignee, card.cardId);
      cardInstance.createCard();
      cardInstanceList.push(cardInstance);
    });
  }

  $on(createTask, 'click', showModal, false);

  $on(document, 'click', saveTaskHandler);

  $on(modalWindow, 'click', function(e){
    if(e.target.className === "overlay" || e.target.id === "cancel-task") {
      modalWindow.style.display = "none";
    }
  });
  
  onRender();

})();