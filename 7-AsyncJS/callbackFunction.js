function ask(question, yes, no) {
  return confirm(question) ? yes() : no();
}

function showOk() {
  alert("You agreed.");
}

function showCancle() {
  alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancle);
