function showBudget(eventName) {
  if (eventName === "Birthday Party") {
    document.getElementById("popup-birthday").style.display = "block";
  } else if (eventName === "Wedding") {
    document.getElementById("popup-wedding").style.display = "block";
  }
}

function hideBudget() {
  document.getElementById("popup-birthday").style.display = "none";
  document.getElementById("popup-wedding").style.display = "none";
}

function viewEvent(eventName) {
  window.location.href = `event.html?event=${encodeURIComponent(eventName)}`;
}
