// $(window).on('load',function() {
//     $("#preloader").delay(5000).fadeOut("slow");
// });


$(function() {
    if ($(document).height() <= $(window).height())
        $("footer.footer").addClass("navbar-fixed-bottom");


    if($('body').hasClass('home')){
        $(window).scroll(function () {
            var $this = $(this);
            var $thisEl = $('.counter-wrapper').offset().top-400;
            if ($this.scrollTop() >= $thisEl ) {
                $('.counter-item-info span').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },{
                        duration: 4000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
            }
            else {}
        });
    }
});

$('.testimonial-slider').slick({
    dots:true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    $('.bottom-bg').css({
        'transform': 'translateY(-'+ (st/3) +'px)'
    });
});
$('.btn-header ').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        $thisBody = $('body');
    if(($this).hasClass('btn-open')){
        $this.toggleClass('btn-open');
        $thisBody.toggleClass('body-open');
    }else{
        $this.toggleClass('btn-open');
        $thisBody.toggleClass('body-open');
    }
});
function wowAnimation() {
    new WOW().init();

    // var $body = $('body');
    // var $box = $('.box');
    // for (var i = 0; i < 20; i++) {
    //     $box.clone().appendTo($body);
    // }
    // WOW.prototype.addBox = function (element) {
    //     this.boxes.push(element);
    // };
    // var wow = new WOW();
    // wow.init();
    // $('.wow').on('scrollSpy:exit', function () {
    //     $(this).css({
    //         'visibility': 'hidden',
    //         'animation-name': 'none'
    //     }).removeClass('animated');
    //     wow.addBox(this);
    // }).scrollSpy();

}
$(window).on('resize', function(){
    var win = $(this).trigger('resize');
    if (win.width() <= 992) {
        $('.inner a').on("click",  function (e) {
            e.preventDefault();
            var $this = $(this),
                $thisItem = $this.closest('.inner'),
                $thisContent = $thisItem.find('ul');
            if($thisItem.hasClass('open')) {
                $thisItem.removeClass('open');
                $thisContent.stop(true, true).slideUp();
            } else {
                $thisItem.addClass('open').siblings().removeClass('open').find('ul').stop(true, true).slideUp();
                $thisContent.stop(true, true).slideDown();
            }
        });

    }else{
        wowAnimation();
    }
});
function checkResize() {
    var windowSize = $(window).width();
    if (windowSize <= 992) {
        $('.inner a').on("click",  function (e) {
            e.preventDefault();
            var $this = $(this),
                $thisItem = $this.closest('.inner'),
                $thisContent = $thisItem.find('ul');
            if($thisItem.hasClass('open')) {
                $thisItem.removeClass('open');
                $thisContent.stop(true, true).slideUp();
            } else {
                $thisItem.addClass('open').siblings().removeClass('open').find('ul').stop(true, true).slideUp();
                $thisContent.stop(true, true).slideDown();
            }
        });
    }else{
        wowAnimation();
    }
}
checkResize();
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    $('.bottom-bg').css({
        'transform': 'translateY(-'+ (st/3) +'px)'
    });
});
$(function() {
    (function quantityProducts() {
        var $quantityArrowMinus = $(".minus");
        var $quantityArrowPlus = $(".plus");
        var $quantityText = $('.calculator-price span');
        var $quantityVal = $('.calculator-price');
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            var $quantityNum = $(this).siblings('.sum');

            if ($quantityNum.val() >= 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
                $quantityText.text(+ $quantityNum.val() * 89 + ' €');
            }
        }
        function quantityPlus() {
            var $quantityNum = $(this).siblings('.sum');
            $quantityNum.val(+$quantityNum.val() + 1);
            $quantityText.text(+ $quantityNum.val() * 89 + ' €');
        }
    })();

});

setInterval(function(){
    $('img').attr({
        "ondrag":"return false",
        "ondragdrop":"return false",
        "ondragstart":"return false"
    })
}, 300);
$('.accordion .item-title').on("click",  function () {
    var $this = $(this),
        $thisItem = $this.closest('.accordion-item'),
        $thisContent = $thisItem.find('.item-content');
    if($thisItem.hasClass('open')) {
        $thisItem.removeClass('open');
        $thisContent.stop(true, true).slideUp();
    } else {
        $thisItem.addClass('open').siblings().removeClass('open').find('.item-content').stop(true, true).slideUp();
        $thisContent.stop(true, true).slideDown();
    }
});
$('.lear-more a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        $thisParent = $this.parents('.testimonial-center-block');
    $thisParent.addClass('testimonial-height')
});
