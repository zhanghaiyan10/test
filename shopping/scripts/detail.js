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
//magnify.js
$(function(){
    $(".jqzoom").jqueryzoom(
        {
            xzoom:300,
            yzoom:300,
            offset:10,
            position:"right",
            preload:1
        }
    )
})

//imgColor.js
$(function(){
    $(".color_list li").click(function(){
        var key1=$(this).css("background-image");
        console.log(key1);
        var start=$(this).css("background-image").lastIndexOf("/");
        var key=$(this).css("background-image").slice(start+1,-6);
        $(".jqzoom>img").attr("src", "images/pro_img/"+key+"_one_small.jpg");
        $(".jqzoom>img").attr("jqImg","images/pro_img/"+key+"_one_big.jpg");
        $("#thickImg").attr("href", "images/pro_img/"+key+"_one_big.jpg");
        $(".img_list_container ul.img_list").empty().load(key+".html");
        $(".color span:last").text($(this).text());
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
//tab.js
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
//price.js
$(function(){
    $(".size_list li").hover(function(){
        $(this).css({"backgroundColor":"#ccc"});
    }, function(){
        $(this).css({"backgroundColor":"#fff"});
    }).click(function(){
        var content=$(this).text();
        $(".size span:last").text(content);
    });

    $(".num select").change(function(){
        var num=$(this).val();
        $(".sum span:last").text(num*200);
    }).change();
})

//score.js
$(function(){
    $(".score_list li").hover(function(){
        console.log(1);
        var score=parseInt($(this).attr("title"));
        $(".score_list").addClass("hoverScore_"+score);
    }, function(){
        var score=parseInt($(this).attr("title"));
        $(".score_list").removeClass("hoverScore_"+score);
    }).click(function(){
        var score=parseInt($(this).attr("title"));
        alert("您给此商品的评分是："+score+"分");
        $(".score_list").removeClass("hoverScore_"+score);
        $(".score_list").addClass("clickScore_"+score);



    })
})

//finish.js
$(function(){
    $(".finish img").click(function(){
        var template="感谢你的购买\n您购买的 \n"+
            "产品是："+$('.name').text()+";\n" +
            "尺寸是："+$('.size span:last').text()+";\n" +
            "颜色是："+$('.color span:last').text()+";\n" +
            "数量是："+$('.num select').val()+";\n" +
            "总价支："+$('.sum span:last').text()+"\n";
        if(confirm(template)){
            alert("您已下单！");
        }
        return false;

    })
})