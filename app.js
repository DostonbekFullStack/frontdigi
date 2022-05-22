var header = document.getElementById('myHeader');
var sticky = header.offsetTop;
var mybutton = document.getElementById("myBtn");


window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = () => myFunction()


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove('auto_container')
  } else {
      header.classList.remove("sticky");
    header.classList.add('auto_container')
  }
}