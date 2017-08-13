/**
 * Created by Administrator on 2017/7/8.
 */
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
