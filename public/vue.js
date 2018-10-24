(function() {
  let vue = new Vue({
    el: "#vue-table",
    data: {
      id: null,
      title: null,
      content: null,
      author: null,
      notes: []
    },
    created: function() {
      let self = this;
      axios
        .get("http://localhost:3300/api/notes")
        .then(res => {
          self.notes = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    methods: {
      addNote: function() {
        let self = this;
        let payload = {
          title: self.title,
          content: self.content,
          author: self.author
        };
        axios
          .post("/api/notes", payload)
          .then(res => {
            self.notes = res.data;
            // self.notes.push({
            //   id: 99,
            //   title: self.title,
            //   content: self.content,
            //   author: self.author
            // });
          })
          .catch(err => {
            console.log(err);
          });
      },
      clear: function() {
        this.title = null;
        this.content = null;
        this.author = null;
      },
      delete: function(note) {
        axios
          .delete("/api/notes" + note.id)
          .then(res => {
            self.notes = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  });
  console.log(vue);
})();
