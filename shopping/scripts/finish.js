/**
 * Created by Administrator on 2017/7/8.
 */
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
