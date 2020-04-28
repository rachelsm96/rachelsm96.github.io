//javascirpt function will go in this file

document.getElementById("github").addEventListener("mouseover", function () {
    document.getElementById("body").style.backgroundColor = "limegreen";
    document.getElementById("jumbotron").style.color = "black";
    Array.from(document.getElementsByClassName("icon")).forEach(
        function (element, index, array) {
            element.style.color = "black";
        }
    );
});

document.getElementById("resume").addEventListener("mouseover", function () {
    document.getElementById("body").style.backgroundColor = "orchid";
    document.getElementById("jumbotron").style.color = "black";
    Array.from(document.getElementsByClassName("icon")).forEach(
        function (element, index, array) {
            element.style.color = "white";
        }
    );
});


document.getElementById("welcome").addEventListener("mouseover", function () {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("jumbotron").style.color = "purple";
    Array.from(document.getElementsByClassName("icon")).forEach(
        function (element, index, array) {
            element.style.color = "purple";
        }
    );
});


document.getElementById("linkedin").addEventListener("mouseover", function () {
    document.getElementById("body").style.backgroundColor = "CornflowerBlue";
    document.getElementById("jumbotron").style.color = "white";
    Array.from(document.getElementsByClassName("icon")).forEach(
        function (element, index, array) {
            element.style.color = "white";
        }
    );
});

/*document.getElementById("github").addEventListener("mouseout", function() {
    console.log("Line 9");
    document.getElementById("body").style.backgroundColor = "black";
});*/

