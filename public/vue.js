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
    }
  });
  console.log(vue);
})();
