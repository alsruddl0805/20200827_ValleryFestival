$("ul#mainMenu li").mouseover(function(){
    $(this).children("ul.subMenu").stop().fadeIn();
});

$("ul#mainMenu li").mouseout(function(){
    $(this).children("ul.subMenu").stop().fadeOut();
});

// GNB 메뉴 구현 끝


function fnSlide() {
$("#slideFrame").animate({"margin-left":"-800px"},3000,
                         function(){
                            $(this).css({"margin-left":"0"});
                            $("#slideFrame>a:first").insertAfter("#slideFrame>a:last");
                        }
                        );
}

setInterval(fnSlide,1000);

// 슬라이드쇼 구현 끝


$("#bbs table tr:first td").click(function(){
    $("#modal").css({"display":"block"});
});

$("#modal button").click(function(){
    $("#modal").css({"display":"none"});
});

// 모달 레이어 팝업 구현 끝








