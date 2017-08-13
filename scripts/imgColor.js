/**
 * Created by Administrator on 2017/7/7.
 */
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
