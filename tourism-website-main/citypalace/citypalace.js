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
  $("#feesid").on("click", function () {
    removeall();
    $("#feesid").css("border", "2px solid whitesmoke");
    $("#feesid").css("border-radius", "20px");
  });
  $("#locationid").on("click", function () {
    removeall();
    $("#locationid").css("border", "2px solid whitesmoke");
    $("#locationid").css("border-radius", "20px");
  });
  $("#visitinghourid").on("click", function () {
    removeall();
    $("#visitinghourid").css("border", "2px solid whitesmoke");
    $("#visitinghourid").css("border-radius", "20px");
  });
 
  
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 2650 || document.documentElement.scrollTop > 2650) {
        removeall();
        $("#locationid").css("border", "2px solid whitesmoke");
        $("#locationid").css("border-radius", "20px");
      }
      else if (document.body.scrollTop > 2250 || document.documentElement.scrollTop > 2250) {
        removeall();
        $("#feesid").css("border", "2px solid whitesmoke");
        $("#feesid").css("border-radius", "20px");
      }
      else if (document.body.scrollTop > 1750 || document.documentElement.scrollTop > 1750) {
        removeall();
        $("#visitinghourid").css("border", "2px solid whitesmoke");
        $("#visitinghourid").css("border-radius", "20px");
      }
      else if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        removeall();
        $("#architectureid").css("border", "2px solid whitesmoke");
        $("#architectureid").css("border-radius", "20px");
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
  }  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }