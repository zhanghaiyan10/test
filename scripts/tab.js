/**
 * Created by Administrator on 2017/7/7.
 */
$(function(){
        $(".tab_menu li").hover(function(){
            $(this).css({"backgroundColor":"#ccc"})}, function(){
            $(this).css({"backgroundColor":"#f1f1f1"})
        }).click(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
            var index=$(".tab_menu li").index(this);
            $(".tab_box div").eq(index).addClass("selected").siblings().removeClass("selected");
        })
})
