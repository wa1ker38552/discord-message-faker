window.onload = function() {
  document.querySelector("#usernameInput").addEventListener("input", changeUsername);
  document.querySelector("#contentInput").addEventListener("input", changeContent);
  document.querySelector("#timestampInput").addEventListener("input", changeTimestamp);
  document.querySelector("#profileInput").addEventListener("input", changeProfile);
}

function changeUsername(e) {
  var targetElement = document.getElementById("username")
  var targetText = document.getElementById('usernameInput')
  targetElement.innerHTML = targetText.value;
}

function changeContent(e) {
  var targetElement = document.getElementById("content")
  var targetText = document.getElementById('contentInput')

  if (targetText.value != "") {
    targetElement.innerHTML = targetText.value;
  } else {
    targetElement.innerHTML = "‎"
  }
}

function changeTimestamp(e) {
  var targetElement = document.getElementById("timestamp")
  var targetText = document.getElementById('timestampInput')
  targetElement.innerHTML = targetText.value;
}

function changeProfile(e) {
  var targetElement = document.getElementById("profile")
  var targetText = document.getElementById('profileInput')
  targetElement.src = targetText.value;
}
