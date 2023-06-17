const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav .nav-links ul li a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - (sectionHeight / 3)) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSectionId) {
      link.classList.add('active');
    }
  });
});


function removeall() {
    $(".cir_border").css("border", "none");
    $(".cir_border").removeClass("active");
}
  $("#hiddengemid").on("click", function () {
    removeall();
    $("#hiddengemid").css("border", "2px solid whitesmoke");
    $("#hiddengemid").css("border-radius", "20px");
  });
  $("#festivalsid").on("click", function () {
    removeall();
    $("#festivalsid").css("border", "2px solid whitesmoke");
    $("#festivalsid").css("border-radius", "20px");
  });
  $("#folkloreid").on("click", function () {
    removeall();
    $("#folkloreid").css("border", "2px solid whitesmoke");
    $("#folkloreid").css("border-radius", "20px");
  });
  $("#nightlifeid").on("click", function () {
    removeall();
    $("#nightlifeid").css("border", "2px solid whitesmoke");
    $("#nightlifeid").css("border-radius", "20px");
  });
  $("#authenticfoodid").on("click", function () {
    removeall();
    $("#authenticfoodid").css("border", "2px solid whitesmoke");
    $("#authenticfoodid").css("border-radius", "20px");
  });
  $("#shoppingid").on("click", function () {
    removeall();
    $("#shoppingid").css("border", "2px solid whitesmoke");
    $("#shoppingid").css("border-radius", "20px");
  });
 
  