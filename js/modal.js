document.querySelectorAll('.modal-show').forEach(elem => {
   elem.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(elem => {
   elem.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(elem => {
   elem.onclick = closeModal;
});


function showModal() {
   let modalId = this.dataset.modal;
   document.querySelector(modalId).classList.remove('hide');
   document.onkeydown = function (e) {
      if (e.keyCode == 27) closeModal();
   }
}

function closeModal() {
   document.querySelectorAll('.modal-wrap').forEach(elem => {
      elem.classList.add('hide');
   });
   document.onkeydown = null;
}

