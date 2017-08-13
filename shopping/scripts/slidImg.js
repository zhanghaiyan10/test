/**
 * Created by Administrator on 2017/7/5.
 */
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
