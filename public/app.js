window.addEventListener('load', function(){
  console.log("Up and running");

  var peopleData = new AjaxRequest("https://swapi.co/api/people/");
  var peopleView = new PeopleView(document.querySelector("#people-list"), peopleData);
  peopleData.getData();

  var filmData = new AjaxRequest("https://swapi.co/api/films/");
  var filmView = new FilmView(document.querySelector("#film-list"), filmData);
  filmData.getData();

  var starshipData = new AjaxRequest("https://swapi.co/api/starships/");
  var starshipView = new StarshipView(document.querySelector("#starship-dropdown"), starshipData);
  starshipData.getData();

})




