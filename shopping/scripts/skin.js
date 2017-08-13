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

