var buttonDiv = document.getElementById("buttonDiv");

buttonDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
    event.stopPropagation();
});