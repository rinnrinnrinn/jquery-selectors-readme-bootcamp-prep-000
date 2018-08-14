// declare your functions here...
function paragraphSelector() {
  var paragraph = document.getElementsByTagName("p");
  return paragraph;
}

function lastImageSelector() {
  var images = document.getElementsByTagName("img:last");
  return images[0]
}