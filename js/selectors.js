// declare your functions here...
function paragraphSelector() {
  var paragraph = $("p");
  return paragraph;
}

function lastImageSelector() {
  var images = $("img:last");
  return images;
}

function ninjaBabySelector() {
  var ninja = $('#baby-ninja');
  return ninja;
}

function divSelector() {
  var classP = $('.pics');
  return classP;
}

function firstListItem() {
  var firstchild = $('parent-tag child-tag:first-child');
  return firstchild;
}