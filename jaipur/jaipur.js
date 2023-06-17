function removeall() {
    $(".cir_border").css("border", "none");
    $(".cir_border").removeClass("active");
  }
  $("#historyid").on("click", function () {
    removeall();
    $("#historyid").css("border", "2px solid whitesmoke");
    $("#historyid").css("border-radius", "20px");
  });
  $("#homeid").on("click", function () {
    removeall();
    $("#homeid").css("border", "2px solid whitesmoke");
    $("#homeid").css("border-radius", "20px");
  });
  $("#cultureid").on("click", function () {
    removeall();
    $("#cultureid").css("border", "2px solid whitesmoke");
    $("#cultureid").css("border-radius", "20px");
  });
  $("#cuisinesid").on("click", function () {
    removeall();
    $("#cuisinesid").css("border", "2px solid whitesmoke");
    $("#cuisinesid").css("border-radius", "20px");
  });
  $("#streetfoodid").on("click", function () {
    removeall();
    $("#streetfoodid").css("border", "2px solid whitesmoke");
    $("#streetfoodid").css("border-radius", "20px");
  });
 
  
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
        removeall();
        $("#streetfoodid").css("border", "2px solid whitesmoke");
        $("#streetfoodid").css("border-radius", "20px");
      }
      else if (document.body.scrollTop > 2050 || document.documentElement.scrollTop > 2050) {
        removeall();
        $("#cultureid").css("border", "2px solid whitesmoke");
        $("#cultureid").css("border-radius", "20px");
      }
      else if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        removeall();
        $("#cuisinesid").css("border", "2px solid whitesmoke");
        $("#cuisinesid").css("border-radius", "20px");
      }
      else if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
        removeall();
        $("#historyid").css("border", "2px solid whitesmoke");
        $("#historyid").css("border-radius", "20px");
      }
      else {
        removeall();
        $("#homeid").css("border", "2px solid whitesmoke");
        $("#homeid").css("border-radius", "20px");
      }
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }