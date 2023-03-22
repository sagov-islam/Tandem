'use strict'


$(() => {

    // Modal --->
    $(".vacancie-btn").on('click', () => {
        $('#vacancie-modal').removeClass('modal--hide');
    })
    $(".modal .btn-close").on('click', function() {
        $(this).parent().parent().parent().parent().addClass('modal--hide');
    })
    $(".modal__bg").on('click', function(event) {
        if (event.target.classList.contains('modal__bg')) {
            $('.modal').addClass('modal--hide');
        } 
    })
    $(".input-file input[type='file']").on('change', function() {
        if ($(this).prop('files')[0]) {
            $('.input-file__button', $(this).parent()).removeClass('error');
            $('.input-file__button', $(this).parent()).addClass('success');
        };
    })


    const mb = 1048576 * 10;
    $('#vacancie-modal form').submit((event) => {
        event.preventDefault();
     
        const fileData = $('#vacancie-modal form input[type="file"]').prop('files')[0];
        const fileBtn =  $('#vacancie-modal .input-file__button');
        const modalForm = $('#vacancie-modal form');
        if (!fileData) {
            fileBtn.text('Вы не выбрали резюме');
            fileBtn.removeClass('success');
            fileBtn.addClass('error');
            return
        }
        
        if (fileData.size > (mb * 10)) {
            fileBtn.text('Файл весит больше 10 Мб');
            fileBtn.removeClass('success');
            fileBtn.addClass('error');
            return
        }

        fileBtn.text('Резюме');
        fileBtn.removeClass('error');
        fileBtn.removeClass('success');
        $(modalForm)[0].reset();

        $('#vacancie-modal').addClass('modal--hide');
        $('#success-modal').removeClass('modal--hide');
        
        setTimeout(() => {
            $('#success-modal').addClass('modal--hide');
        }, 3000) 
    })

    $('#vacancie-modal .input-file__button').on('click', function() {
        $(this).text('Резюме');
        $(this).removeClass('error');
    })

    $("#tel").mask("9 (999) 999 99-99");
  

    // Burger --->
    $('.burger__btn').on('click', function() {
        $(this).parent().toggleClass('opened');
    })


    // СТРАНИЦА: index --->
    // Слайдер партнеров
    $('#slider-companies').slick({
        prevArrow: $('.information__footer .btn-prev'),
        nextArrow: $('.information__footer .btn-next'),
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // Слайдер новостей
    $('#slider-news').slick({
        prevArrow: $('.news .btn-prev'),
        nextArrow: $('.news .btn-next'),
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });

    // Класс для хедера при скролле
    function addClassToTheHeaderOnScroll() {
        if ($('body').scrollTop() > 140) {
            $('.header').addClass('header--scrolling');
            return
        }
        $('.header').removeClass('header--scrolling'); 
    }
    addClassToTheHeaderOnScroll();
    $('body').on('scroll', addClassToTheHeaderOnScroll);

    // Всплывающий поп-ап при наведении на отдельные регионы России
    const locations = {
        'M404.982': 'Иркуртск', 
        'M313.003': 'Томск', 
        'M222.545': 'Ханты-Мансийск',
        'M245.178': 'Тюмень',
        'M268.078': 'Ямало-Ненецкий автономный округ',
        'M253.74': 'Архангельск',
        'M196.325': 'Пермь',
        'M149.198': 'Самара',
        'M149.004': 'Оренбург',
        'M128.622': 'Саратов',
    }
    $('.geography__img-container path[fill="#6DF2E5"]').on('mouseover', function() {
        const id = $(this).attr('d').slice(0, 8).trim();
        mousePopUp(true, locations[id]);
    })
    $('.geography__img-container path[fill="#6DF2E5"]').on('mouseout', function() {
        mousePopUp(false);
    })

    function mousePopUp(turnOn, text) {
        if (turnOn === false) {
            $('body').off("mousemove");
            $('.mouse-pop-up').css({ top: 0, left:-100 });
            return
        }
        
        $('body').on('mousemove', (event) => {
            $('.mouse-pop-up').text(text);
            $('.mouse-pop-up').css({ top: event.pageY - 70, left: event.pageX - ($('.mouse-pop-up').width() / 2) - 17 });
        })
    }



    // СТРАНИЦА: activities --->
    // Слайдер деятельностей
    $('.activity__slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
    });
    
    // Плавный скролл
    $('.activities__link[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        console.log(document.querySelector(id));
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });



    // СТРАНИЦА: about-company --->
    // Слайдер команд
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: false,
        adaptiveHeight: false,
        prevArrow: $('.team__slider-container .btn-prev'),
        nextArrow: $('.team__slider-container .btn-next'),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerMode: false,
                    
                }
            },
            {
                breakpoint: 800,
                settings: {
                    centerMode: false,
                    adaptiveHeight: true,
                    
                }
            }
        ]
    });
    $('.projects__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots slider__dots',
        prevArrow: $('.projects .btns-cont .btn-prev'),
        nextArrow: $('.projects .btns-cont .btn-next'),
        // responsive: [
        //     {
        //         breakpoint: 800,
        //         settings: {
        //             adaptiveHeight: true,
        //         }
        //     }
        // ]
    });

    // $('.projects__item-text').each(function(index, item) {
    //     const height = Math.round($(item).height());
    //     const scrollHeight = $(item).prop('scrollHeight');
    //     if (scrollHeight > height) $('.canScroll', item).css({ display: 'inline-block' });
    // })


    // СТРАНИЦА: career --->
    // Слайдер школы
    $('.school__slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
    });
    

    // Слайдер работников
    $('.workers__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        prevArrow: $('.workers__btns .btn-prev'),
        nextArrow: $('.workers__btns .btn-next'),
        adaptiveHeight: true,
    });

    // Аккордеон
    const accordionButtons = $('.vacancies__accordion-btn');
    const accordionTexts = $('.vacancies__accordion-text');
  
    function RunAccordion(buttons, texts) {
        for (let i = 0; i < $(buttons).length; i++) {
            const button = $(buttons)[i];
            const text = $(texts)[i];

            $(button).on('click', () => {
                
                $(button).toggleClass('hide');
                $(button).parent().toggleClass('dark');
                const textClosed = $(button).hasClass('hide');
                
                $(text).css('height', textClosed ? '0px' : `${text.scrollHeight + 30}px`)
            }) 
        }
    }
    RunAccordion(accordionButtons, accordionTexts);

    // СТРАНИЦА: news --->
    function updateButtons(parent) {
        const btnShowMore = $('.btn[data-news-btn="showMore"]', parent);
        const btnShowLess = $('.btn[data-news-btn="showLess"]', parent);
        $(btnShowLess).toggleClass('d-none');
        $(btnShowMore).toggleClass('d-none');
    }
    

    $('.news-block__item-text-container').each((index, item) => {
        // $('p:first-child, p:last-child', item).remove();

        const btn = $('.btn[data-news-btn="showMore"]', $(item).parent());
        const height = Math.round($(item).height());
        const scrollHeight = $(item).prop('scrollHeight');
        
        if (height == scrollHeight) {
           $(btn).remove();
        }
       
    })

    $('.news-block__item .btn[data-news-btn="showMore"]').on('click', function() {
        const parent = $(this).parent();
        const textContainer = $('.news-block__item-text-container', parent);
        const height = Math.round((textContainer).height());
        const scrollHeight = textContainer[0].scrollHeight;
        if (height !== scrollHeight && scrollHeight > height) {
           $(textContainer).css({
            height: scrollHeight,
           })
           updateButtons(parent);
        }
     
    })

    $('.news-block__item .btn[data-news-btn="showLess"]').on('click', function() {
        const parent = $(this).parent();
        const textContainer = $('.news-block__item-text-container', parent);
        $(textContainer).css({
            height: '90px',
        })
        updateButtons(parent);
    })
})