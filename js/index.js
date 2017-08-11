/*Created by Administrator on 2017-07-15.*/
$(function () {
    banner();
});
var banner = function () {
    var $banner = $('.sn_banner');
    var width=$banner.width();
    var $imgBox=$banner.find('ul:first');
    var $pointBox=$banner.find('ul:last');
    var index=1;
    var animateFuc= function () {
      $imgBox.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear', function () {
          if(index>=9){
              index=1;
              $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
          } else if(index<=0){
              index=8;
              $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
          }
          $pointBox.find('li').removeClass('now').eq(index-1).addClass('now');
      });
    };
    var timer=setInterval(function () {
        index++;
        animateFuc();
    },1000);
    //手势切换
    $imgBox.on('swipeLeft', function () {
        //切换下一张
        index++;
        animateFuc();
        //console.log(index);
    });
    $imgBox.on('swipeRight', function () {
        //切换上一张
        index--;
        animateFuc();
    });




};
