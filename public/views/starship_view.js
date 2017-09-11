var StarshipView = function(element, starshipData) {
  this.element = element;
  this.starshipData = starshipData;
  this.starshipData.onUpdate = this.render.bind(this); 
}


StarshipView.prototype.render = function(data) {
  // console.log(data);
  var select = document.getElementById("starship-dropdown")
  data.results.forEach(function(data){
    var option = document.createElement("option");
    option.innerText = data.name
    option.className = "starship"
    select.appendChild(option);
  })
}

  StarshipView.prototype.onChange = function(data) {
    console.log(data);
    var select = document.getElementById("starship-dropdown")
    data.results.forEach(function(data){
      var pTag = document.createElement("pTag")
      pTag.innerText = select.addEventListener("change", function() {
       debugger
       var selectedStarship = data.name[this.value];
       debugger
      select.appendChild(ptag);
     
        countryInfo(selectedStarship);

      })
    })
  }

// StarshipView.prototype.onButtonClick = function(data){
//   var select = document.getElementById('starship-dropdown');
// 


// }
  





