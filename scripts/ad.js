/**
 * Created by Administrator on 2017/7/4.
 */
$(function() {
    var adTimer;
    var index = 0;
    var len = $("#anchor li").length;
    $("#anchor>li").mouseover(function () {
        var index = $("#anchor>li").index(this);
        scrollBanner(index);
    });
    $("#banner").hover(function () {
        clearInterval(adTimer);
    }, function () {
            adTimer=setInterval(function () {
            scrollBanner(index);
            index++;
            if (index === len) {
                index = 0;
            }
        }, 3000)
    }).trigger("mouseleave");
});

function scrollBanner(index){
    var per_height=$("#banner").height();
    $("#banner_list").stop(true,false).animate({"top":-index*per_height+"px"},1000);
    $("#anchor>li").removeClass("active").eq(index).addClass("active");
}