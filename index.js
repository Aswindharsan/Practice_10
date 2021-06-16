$("input").click("change", function (){

  if($("input").is(":checked")){
    $(".p1").text("$19.99");
    $(".p2").text("$24.99");
    $(".p3").text("$39.99");
  }else{
    $(".p1").text("$199.99");
    $(".p2").text("$249.99");
    $(".p3").text("$399.99");
  }

});
