var current;
// Get the modal
var modal = document.getElementById("popup");

// Get the magnified image
var display = document.getElementById("display");

var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow')

function showArrow(){
  if (current == 0 || current == last){
    if (current == 0){
      leftArrow.style.display = "none";
      rightArrow.style.display = "inline-block";
    }
    else{
      rightArrow.style.display = "none";
      leftArrow.style.display = "inline-block";
    }
  }
  else{
    leftArrow.style.display = "inline-block";
    rightArrow.style.display = "inline-block";
  }
}

function show(image){
  var imgIn = image.getElementsByTagName("img")[0];
  imgInSrc = imgIn.src;
  display.src = maximize(imgInSrc);
  modal.style.display = "block";
  current = parseInt(imgIn.id.slice(5));
  showArrow();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    display.src = "";
  }
}
//////////////////////////////////////////////////////////////////////////////
function prev(){
  var previous = current - 1;
  var prevImg = document.getElementById("image" + previous.toString());
  var prevImgSrc = prevImg.src;
  display.src = maximize(prevImgSrc);
  current = parseInt(prevImg.id.slice(5));
  showArrow();
}

function next(){
  var next = current + 1;
  var nextImg = document.getElementById("image" + next.toString());
  var nextImgSrc = nextImg.src;
  display.src = maximize(nextImgSrc);
  current = parseInt(nextImg.id.slice(5));
  showArrow();
}

function maximize(imgSrc){
  var imgMaxSrc = imgSrc.replace('minified/','');
  return imgMaxSrc;
}
