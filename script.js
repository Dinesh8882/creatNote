const deletBtn = document.querySelector('#delet');
const creatNotes = document.querySelector('#creatNote');
let notesBox = document.querySelector('.notes-container');
let notes = document.querySelector('.notes');

let clutter = '';


creatNotes.addEventListener('click', function () {
    clutter = `<div class="box">
                     <p contenteditable="true" class="notes">
                     </p>
                     <i class="ri-close-circle-fill" id="delet"></i>
                </div>`;


    notesBox.innerHTML += clutter
})


notesBox.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
            e.target.parentElement.remove();
    }
})
