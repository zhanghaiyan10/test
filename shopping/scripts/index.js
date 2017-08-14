/**
 * Created by Administrator on 2017/8/14.
 */
//导航效果兼容ie6,nav.js
$(function(){
    $("#item li:has(ul)").hover(function(){
        $(this).children("ul").stop(true,true).slideDown(400);
    }, function(){
        $(this).children("ul").stop(true,true).slideUp("fast");
    })
});
//skin.js
$(function(){
    $("#skin li").click(function(){
        switchSkin(this.id);
    });
    var cookieSkin;
    if($.cookie("cookieSkin")){
        switchSkin($.cookie("cookieSkin"));
    }

});

function switchSkin(skinName){
    $("#"+skinName).addClass("selected").siblings().removeClass("selected");
    $("#link").attr("href","style/"+skinName+".css");
    $.cookie("cookieSkin", skinName, {path:"/",expires:10});
}
//scroll.js
$(function() {
    var timer;
    var $this=$("#news_container");
    $this.hover(function(){
        clearInterval(timer);
    }, function(){
        timer=setInterval(function(){
            scrollNews($this);
        },3000);
    }).trigger("mouseleave");
});

function scrollNews(obj){
    var $self=obj.find("div:first");
    var lineHeight = $self.find("p:first").height();
    $self.animate({
        "top": -lineHeight + "px"
    }, 600, function () {
        $self.css({"top": 0}).find("p:first").appendTo($self);
    });
}
//slide.js
$(function(){
    $("p.module_up_down").click(function(){
        $(this).siblings("div").slideToggle(300);
    })
    $("#product_catalog>a").click(function(){
        $(this).toggleClass( "collapse").next("ul").slideToggle(300);
    })
})
//ad.js
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
//slideImg.js
$(function(){
    var pageLen=$("#product_list_content").find("dl").length;
    var countSum=Math.ceil(pageLen/4);
    var countWidth=$("#product_list").width();
    var pageCount=1;
    $(".module_left_right").find("img:last").click(function(){
        if(!$("#product_list_content").is(":animated")){
            if(pageCount===countSum){
                $("#product_list_content").animate({"left":0},800);
                pageCount=1;
            }else{
                $("#product_list_content").animate({"left":"-="+countWidth+"px"},800);
                pageCount++;}}});

    $(".module_left_right").find("img:first").click(function(){
        if(!$("#product_list_content").is("animated")){
            if(pageCount===1){
                $("#product_list_content").animate({"left":-(countSum-1)*countWidth},800);
                pageCount=countSum;
            }else{
                $("#product_list_content").animate({"left":"+="+countWidth+"px"},800);
                pageCount--;
            }
        }
    })
})
//imgHover.js
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
//chageImg.js
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


