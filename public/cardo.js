// IIFE - Immediately Invoked Function Expression
// Read More: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
  let pageTitle = document.getElementById("pageTitle");
  console.log(pageTitle);
})();

let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function(e) {
  let inputs = document.getElementsByClassName("form-control");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
});

let addNoteForm = document.getElementById("add-note-form");
addNoteForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let id = 0;
  let payLoad = {
    id: (id += 1),
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
    author: document.getElementById("author").value
  };

  let notesTable = document.getElementById("notes-table");
  axios
    .get("http://localhost:3300/api/notes", payLoad)
    .then(res => {
      notes = res.data;
      renderNotes(notes);
      notes = res.data;
      notes.forEach(note => {
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdTitle = document.createElement("td");
        let tdContent = document.createElement("td");
        let tdAuthor = document.createElement("td");

        tdId.textContent = note.id;
        tdTitle.textContent = note.title;
        tdContent.textContent = note.content;
        tdAuthor.textContent = note.author;

        tr.append(tdId);
        tr.append(tdTitle);
        tr.append(tdContent);
        tr.append(tdAuthor);
        notesTable.append(tr);
      });
    })
    .catch(err => {
      console.log(err);
      notes = [];
    });
});
