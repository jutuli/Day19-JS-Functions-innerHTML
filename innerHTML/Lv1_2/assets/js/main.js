let divContainer = document.getElementById("info");

divContainer.innerHTML = "<h1>Hello World</h1>";
divContainer.innerHTML += "<h2>How are you</h2>";

document.write("<div id='container'></div>");

let secondContainer = document.getElementById("container");
secondContainer.innerHTML = "<p>start of the element</p>";

document.write("end of the element");
