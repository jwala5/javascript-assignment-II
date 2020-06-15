function createDiv() {
    var div = document.createElement('div');
    div.className = "do"
    // div.addEventListener("mouseover", div.style.backgroundColor = newColor);
    document.body.appendChild(div);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor();

// document.getElementsByClassName("do").style.backgroundColor = "lightblue";

// div.addEventListener("mouseover", div.backgroundColor = newColor);


var array = ["Diego", "Gabriel", "Lucas"]
var str = '<ul>'

array.forEach(function (arrays) {
    str += '<li>' + arrays + '</li>';
});

str += '</ul>';
document.getElementById("arrayContainer").innerHTML = str;