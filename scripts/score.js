/**
 * Created by Administrator on 2017/7/8.
 */
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
