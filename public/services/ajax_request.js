var AjaxRequest = function(url) {
  this.url = url;
  this.data = [];
  this.onUpdate = null;
}

AjaxRequest.prototype.getData = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);

  xhr.addEventListener('load', function() {
    console.log("hello");
    if( xhr.status !== 200 ) return;

    var jsonString = xhr.responseText;
    this.data = JSON.parse(jsonString);
    this.onUpdate(this.data);

  }.bind(this));

  xhr.send();

}