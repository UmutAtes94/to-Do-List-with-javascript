//delete element with close button
var close = document.getElementsByClassName('close');
for (var i=0; i<close.length; i++){
    close[i].onclick = function(){
        var li =this.parentElement;
        li.style.display='none';
    }
}

//checked
var list = document.querySelector('ul');
list.addEventListener('click', function(item){
    if(item.target.tagName = 'li'){
        item.target.classList.toggle('checked');
    }
    
});

/* add element with add butonu */

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
      return;
  }
    
document.getElementById("list").appendChild(li);
document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
