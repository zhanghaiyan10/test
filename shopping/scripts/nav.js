//导航效果兼容ie6
$(function(){
    $("#item li:has(ul)").hover(function(){
            $(this).children("ul").stop(true,true).slideDown(400);
    }, function(){
            $(this).children("ul").stop(true,true).slideUp("fast");
    })
});