function removeall() {
  $(".cir_border").css("border", "none");
}
$("#sec").on("click", function () {
  removeall();
  $("#sec").css("border", "2px solid whitesmoke");
  $("#sec").css("border-radius", "20px");
});
$("#pri").on("click", function () {
  removeall();
  $("#pri").css("border", "2px solid whitesmoke");
  $("#pri").css("border-radius", "20px");
});
$("#tri").on("click", function () {
  removeall();
  $("#tri").css("border", "2px solid whitesmoke");
  $("#tri").css("border-radius", "20px");
});
$("#quad").on("click", function () {
  removeall();
  $("#quad").css("border", "2px solid whitesmoke");
  $("#quad").css("border-radius", "20px");
});
$("#quint").on("click", function () {
  removeall();
  $("#quint").css("border", "2px solid whitesmoke");
  $("#quint").css("border-radius", "20px");
});
$("#hex").on("click", function () {
  removeall();
  $("#hex").css("border", "2px solid whitesmoke");
  $("#hex").css("border-radius", "20px");
});

// Toggle between light and dark mode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})

// scroll button
let mybutton = document.getElementById("upbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    if (document.body.scrollTop > 4500 || document.documentElement.scrollTop > 4500) {
      removeall();
      $("#hex").css("border", "2px solid whitesmoke");
      $("#hex").css("border-radius", "20px");
    }
    else if (document.body.scrollTop > 3470 || document.documentElement.scrollTop > 3470) {
      removeall();
      $("#quint").css("border", "2px solid whitesmoke");
      $("#quint").css("border-radius", "20px");
    }
    else if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
      removeall();
      $("#quad").css("border", "2px solid whitesmoke");
      $("#quad").css("border-radius", "20px");
    }
    else if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
      removeall();
      $("#mv").css("border", "2px solid whitesmoke");
      $("#mv").css("border-radius", "20px");
    }
    else if (document.body.scrollTop > 1360 || document.documentElement.scrollTop > 1360) {
      removeall();
      $("#tri").css("border", "2px solid whitesmoke");
      $("#tri").css("border-radius", "20px");
    }
    else if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
      removeall();
      $("#sec").css("border", "2px solid whitesmoke");
      $("#sec").css("border-radius", "20px");
    }
    else {
      removeall();
      $("#pri").css("border", "2px solid whitesmoke");
      $("#pri").css("border-radius", "20px");
    }
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}