/**
 * Created by Administrator on 2017/7/9.
 */
$(function(){
    $("#product_list_content dl dt").each(function(){
        var position=$(this).position();
        var left=position.left;
        var top=position.top;
        var src=$("#product_list_content dl").find("img.init").attr("src");
        var spanHtml="<span style='position: absolute; left:"+left+"px; top:"+top+"px; width:124px; height:124px;' title='点击查看详情' class='imgMask'></span>";
        $(spanHtml).appendTo($(this).find("a")).hover(function(){
            $(this).addClass("imgHover");
        }, function(){
            $(this).removeClass("imgHover");
        });

    })
})