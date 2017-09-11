var FilmView = function(element, filmData) {
  this.element = element;
  this.filmData = filmData;
  this.filmData.onUpdate = this.render.bind(this);
}


FilmView.prototype.render = function(data) {
  // console.log(data);
  var ul = document.getElementById("film-list")
data.results.forEach(function(data){
    var li = document.createElement("li");
    li.innerText = "Film Title: " + data.title
    li.className = "films"
    ul.appendChild(li);
  })
}