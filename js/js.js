$('#header-slider').slick({
    arrows: false,
    dots:true,
});
$('#sale-slider').slick({
    arrows: true,
});
$('.slick-next').html('<i class="fa fa-angle-right">');
$('.slick-prev').html('<i class="fa fa-angle-left">');
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        console.log(top);
        if(top != 0)
        {
            $('.menu').addClass('menu-flexible')
        }
        else{
            $('.menu').removeClass('menu-flexible');
            
        }
    })
})