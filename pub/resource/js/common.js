$(window).ready(function(){
     // 메인 그래프 호출
    draw(80, '#piechart1', '#2f2fd3');
    draw(56, '#piechart2', '#2f2fd3');


    // 슬라이드토글
    $('.list_slide .btn_slide').on('click',function(){
		$(this).toggleClass('on').siblings().stop().slideToggle();
    });
 });
 
 // 메인 그래프
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
  // 메인 그래프 숫자
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, transparent "+i+"% 100%)"
    });
    $(classname).siblings().html(++i + "%");
 }
 
  // 팝업 띄우기
openPopup = function(id, url, options){
  $('html').addClass("openpop");
  if('.header a'){
    $('.header').append("<div class='dim'></div>");
  }else{
    $('body').append("<div class='dim'></div>");
  }
	
	$('#popTest').show();
 
	$(".dim").on("click", function(){
		$(this).remove();
		$('html').removeClass("openpop");
		$('#popTest').hide();
  });

  // menu close
  $('.header .btn_close').on("click", function(){
    $('.header .dim').remove();
    $('html').removeClass("openpop");
  });
}

