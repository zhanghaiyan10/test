/**
 * Created by Administrator on 2017/7/4.
 */
$(function(){
    $("p.module_up_down").click(function(){
        $(this).siblings("div").slideToggle(300);
    })
    $("#product_catalog>a").click(function(){
        $(this).toggleClass( "collapse").next("ul").slideToggle(300);
    })
})
