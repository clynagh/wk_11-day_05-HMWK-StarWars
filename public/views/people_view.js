var PeopleView = function(element, peopleData) {
  this.element = element;
  this.peopleData = peopleData;
  this.peopleData.onUpdate = this.render.bind(this); 
}


PeopleView.prototype.render = function(data) {
  // console.log(data);
  var ul = document.getElementById("people-list")
data.results.forEach(function(data){
    var li = document.createElement("li");
    li.innerText = "Name: " + data.name
    li.className = "characters"
    ul.appendChild(li);
  })
}




