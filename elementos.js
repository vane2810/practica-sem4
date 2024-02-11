document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("box1").addEventListener("click", function() {
        alert("Has hecho clic en el cuadro 1");
    });

    document.getElementById("box2").addEventListener("click", function() {
        alert("Has hecho clic en el cuadro 2");
    });

    document.getElementById("box3").addEventListener("click", function() {
        alert("Has hecho clic en el cuadro 3");
    });

    
    document.getElementById("input1").addEventListener("focus", function() {
        console.log("Input 1 enfocado");
    });

    document.getElementById("input2").addEventListener("focus", function() {
        console.log("Input 2 enfocado");
    });

    document.getElementById("input3").addEventListener("focus", function() {
        console.log("Input 3 enfocado");
    });


    document.getElementById("box4").addEventListener("mouseover", function() {
        console.log("Mouse sobre el cuadro 4");
    });

    document.getElementById("box5").addEventListener("mouseover", function() {
        console.log("Mouse sobre el cuadro 5");
    });

    document.getElementById("box6").addEventListener("mouseover", function() {
        console.log("Mouse sobre el cuadro 6");
    });
});
