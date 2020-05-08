

/*============*/
function validName(){
var name = document.getElementById("name").value;
var error = document.getElementById("error-name");
var text;
if (name.length == 0) {
  text = "required name";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}

if (name.length < 5) {
  text = "invalid name";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}
else {
  text = "valid name";
  error.style.color = "#008000";
  error.innerHTML = text;
  return true;
}
}



function validMail(){
var mail = document.getElementById("gmail").value;
var error = document.getElementById("error-mail");
var text;

if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  text = "invalid mail";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}
else{
  text = "valid mail"
  error.style.color = "#008000";
  error.innerHTML = text;

 return true;
 }
}


function validPhone(){
  var phone = document.getElementById("phone").value;
  var error = document.getElementById("error-phone");
  var text;
  if (phone.length == 0) {
  text = "required phone";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}
  if (!phone.match(/^[0-9]{10}$/)){
    text = "invalid phone";
    error.style.color = "red";
    error.innerHTML = text;
  return false;
}
else{
    text = "valid phone"
  error.style.color = "#008000";
  error.innerHTML = text;

 return true;
}
}

function validComment(){
  var comment= document.getElementById("comment").value;
  var error = document.getElementById("error-comment");
  var text;
  if (comment.length == 0) {
  text = "required comment";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}
  if (comment.length < 10){
  text = "invalid comment";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}
else{
    text = "valid comment"
  error.style.color = "#008000";
  error.innerHTML = text;

 return true;
}
}

//validation
function validation(){
if(!validName() == true){
    swal("put the name", "", "error");
}
else if (!validMail() == true){
  swal("put the email", "", "error");
}
else if (!validPhone() == true) {
  swal("put the phone", "", "error");
}
else if (!validComment() == true) {
  swal("put the comment", "", "error");
}
else{
  swal("God job you have submitted your info succesfuly", "", "success");
}
}
//end validation







/*=========slider==========*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}