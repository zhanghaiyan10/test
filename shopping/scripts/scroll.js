/**
 * Created by Administrator on 2017/7/4.
 */
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
