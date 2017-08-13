
$(function(){
    $("#product_list_content dt span").hover(function(){
     $(this).siblings("a").show(function(){
         $(this).click(function(){
             $(this).siblings("a").trigger("click");
         })
     });
    }, function(){
        $(this).siblings("a").hide();
       })
})
