/**
 * Created by Administrator on 2017/7/6.
 */
$(function(){
    $(".img_list").livequery("click", function(event){
            if(event.target.nodeName=="IMG"){
                var imgValue=$(event.target).attr("src");
                var key=imgValue.slice(0,-4);
                $(event.target).parent().addClass("selected").siblings().removeClass("selected");
                $(".jqzoom>img").attr("src", key+"_small.jpg");
                $(".jqzoom>img").attr("jqImg", key+"_big.jpg");
                $("#thickImg").attr("href",key+"_big.jpg");
            }
        });

    $(".img_list li").hover(function(event){
        $(this).addClass("selected");
    }, function(){
        $(this).removeClass("selected");
    })

})