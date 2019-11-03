$(window).ready(function(){
     // 메인 그래프 호출
    draw(80, '#piechart1', '#2f2fd3');
    draw(56, '#piechart2', '#2f2fd3');


    // 슬라이드토글
    $('.list_slide .btn_slide').on('click',function(){
		$(this).toggleClass('on').siblings().stop().slideToggle();
    });

    //셀렉트박스
    $('.select > button').on("click", function(){{

      if($(this).parent().hasClass("open")){
        $(this).siblings('ul').stop().slideUp(function(){
          $(this).parent().stop().removeClass("open");});
      }else{
        $(this).parent().stop().addClass("open");
        $(this).siblings('ul').stop().slideDown();
      }
      // $(this).parent().stop().toggleClass("open");
      // $(this).siblings('ul').stop().slideToggle();
    }})

    // btn_toggle
    $('.btn_toggle').on('click',function(){
      $(this).toggleClass('on');
    });

    // radio_btnty
    $('.radio_btnty button').on('click',function(){
      var radioIdx = $(this).index()*78;
      $(this).parent().children().removeClass("on");
      $(this).addClass('on');
      $(this).parent().children("span").css('left',radioIdx);
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
 
  // 메뉴 띄우기
openMenu = function(id, url, options){
  $('html').addClass("openmenu");
  var dimFlag = $('body').find(".header").length;

  if(dimFlag){
    $('.header').append("<div class='dim'></div>");
  }else{
    $('body').append("<div class='dim'></div>");
  }

  // menu close
  $('.header .btn_close').on("click", function(){
    $('.header .dim').remove();
    $('html').removeClass("openmenu");
  });


  // 테스트 팝업 띄우기
	$('#popTest').show();
  
  //dim 클릭
	$(".dim").on("click", function(){
		$(this).remove();
		$('html').removeClass("openmenu");
		$('#popTest').hide();
  });
}

  // 찾기 서브 팝업 띄우기  ---- 오류
  openSubPopup = function(id, url, options){
    $('html').addClass("opensubpop");

    $('#popsubTest').addClass("on");
    
    // menu close
    $('.btn_back').on("click", function(){
      $('html').removeClass("opensubpop");
      $('#popsubTest').removeClass("on");
    });

  }
  