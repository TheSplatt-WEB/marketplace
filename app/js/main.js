$(function(){
    $('.popular__inner').slick({
        
    });
    $('.product__item-star').rateYo({
        starWidth: '15px',
        rating: '4.5',
        ratedFill: '#ffc000',
        readOnly: true,
        normalFill: 'transparent',
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>',
    });
    if($('div').is('.mix')){
        var mixer = mixitup('.relise__inner');
    };

    $('.followers__slider').slick({
        variableWidth: true,
    });

    $('.reviews__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 320,
        from: 30,
        to: 300,
        prefix: '$',
    });

    $('.category-page__aside-title').on('click', function(){
        $(this).even('.category-page__aside-title').toggleClass('disable');
        $(this).next('.aside-page__list').toggleClass('disable');
        $(this).next('.aside-page__form').toggleClass('disable');
    });

    $('.button-page').on('click', function(){
        $('.button-page').addClass('active');
        $('.button-page__list').removeClass('active');
        $('.product__item').removeClass('list');
    });

    $('.button-page__list').on('click', function(){
        $('.button-page__list').addClass('active');
        $('.button-page').removeClass('active');
        $('.product__item').addClass('list');
    });
    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').slideToggle();
    });
    $('.single-product__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.single-product__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });
    $('.blog-asaid__item-button').on('click', function(){
        $('.blog-asaid__item-button').toggleClass('active');
    });
});