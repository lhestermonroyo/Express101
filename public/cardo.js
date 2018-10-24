// IIFE - Immediately Invoked Function Expression
// Read More: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
  let pageTitle = document.getElementById("pageTitle");
  console.log(pageTitle);
})();

var clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function(e) {
  let inputs = document.getElementsByClassName("form-control");
  console.log(typeof inputs);

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
});
