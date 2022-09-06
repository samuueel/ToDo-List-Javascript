var list = document.getElementsByTagName("LI");
var i;

for (i = 0; i < list.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("!ERRO! Campo vazio");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}