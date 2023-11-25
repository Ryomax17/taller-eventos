var buttonDiv = document.getElementById("buttonDiv");
var holaButton = document.getElementById("holaButton");

holaButton.addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation();
});

buttonDiv.addEventListener("click", function(event) {
    alert("Hola! Soy el div");
    event.stopPropagation();
});