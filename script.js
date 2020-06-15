$(document).ready(function() {

    var mainSlider = 1;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var isScrolled = false;
    var BlocSizeTrigger = true;
    var BlockSection1 = false;
    var BlockSection2 = false;
    var BlockSection3 = false;
    var BlockSection4 = false;
    var BlockSection5 = false;
    var langClick = false;
    var headerFixedStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "fixed",
        height: "100px"
    };
    var headerDefaultStyle = {
        backgroundColor: "transparent",
        position: "absolute",
        height: "150px"
    };
    var mainBlockHeight = $('#main-bgSlider').height()
    var sectionHeight = $('.section-Rooms').height()

    $('#main-section_slideicon').click(function() {
        scrollDown();
    });

    function scrollDown() {
        $('html, body').animate({ scrollTop: mainBlockHeight }, 500);
        isScrolled = true
    }

    function imageGridAnim() {
        var Grid = document.getElementById('imageGrid')
        console.log(Grid)
        for (let index = 0; index < Grid.children.length; index++) {
            $(".imageGrid-img" + (index + 1)).animate({ opacity: '1' }, 700);
        }
    }

    function imageGridEvent() {
        var Grid = document.getElementById('imageGrid')
        console.log(Grid)
        for (let index = 0; index < Grid.children.length; index++) {

            Grid.children[index].addEventListener("click", function() {
                var bg = $((".imageGrid-img" + (index + 1))).css('background');
                $('#OpenImage').css('display', 'flex');
                $('#OpenImage-img').css('background', bg);
            });
        }

        $('#OpenImage-img').click(function() {
            $('#OpenImage').css('display', 'none');
        });
    }

    // FIRST LAUNCH
    function headerPosition() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (document.body.clientWidth > 1400) {
            if (scrollTop < 150) {
                $('#header').css(headerDefaultStyle);
                $('.header-top').css('height', '100%');
            } else {
                $('#header').css(headerFixedStyle);
                $('.header-top').css('height', '50%');
            }
        } else if (document.body.clientWidth < 1400) {
            if (scrollTop < 150) {
                $('#header').css(headerDefaultStyle);
                $('#header').css('height', '80px');
                $('.header-top').css('height', '100%');
            } else {
                $('#header').css(headerFixedStyle);
                $('#header').css('height', '50px');
                $('.header-top').css('height', '100%');
            }
        }
    }

    function initDivs() {
        if (document.body.clientWidth > 1400 & !BlocSizeTrigger) {
            $('#header').css('height', '100px');
            $('.header-top').css('height', '100%');
            $('.section-Rooms').css('opacity', '1');
            $('.section-Banya').css('opacity', '1');
            $('.section-Kupel').css('opacity', '1');

            $('#section-Rooms-slider').css('width', '50%');
            $('#section-Banya-slider').css('width', '50%');
            $('#section-Banya-slider').css('display', 'flex');
            $('#section-Kupel-slider').css('width', '50%');

            $('.sliderDots').css('opacity', '1');

            $('#map').css('opacity', '1');
            $('.map-section-frame').css('opacity', '1');
            imageGridAnim()

        } else if (document.body.clientWidth < 1400) {
            $('#header').css('height', '100px');

            $('.section-Rooms').css('opacity', '1');
            $('.section-Banya').css('opacity', '1');
            $('.section-Kupel').css('opacity', '1');

            $('#section-Rooms-slider').css('width', '100%');
            $('#section-Banya-slider').css('width', '100%');
            $('#section-Banya-slider').css('display', 'flex');
            $('#section-Kupel-slider').css('width', '100%');

            $('.sliderDots').css('opacity', '1');

            $('#map').css('opacity', '1');
            $('.map-section-frame').css('opacity', '1');
            imageGridAnim()
        }
    }

    //SLIDER EVENT
    function createSliderTrigger(sliderName) {
        var PrewSliderIndex = 0;
        var RoomSlider = document.getElementById('section-' + sliderName + '-slider-dots')
        console.log(RoomSlider.children.length);
        for (let index = 0; index < RoomSlider.children.length; index++) {

            RoomSlider.children[index].addEventListener("click", function() {
                $('#section-' + sliderName + '-slider-dots').children().removeClass("dotActive");
                $('#' + sliderName + '-li' + (index + 1)).addClass("dotActive");

                switch (PrewSliderIndex) {
                    case 0:
                        $('#section-' + sliderName + '-slider-img1').animate({
                            width: 0
                        }, 1000);
                        break;
                    case 1:
                        $('#section-' + sliderName + '-slider-img2').animate({
                            width: 0
                        }, 1000);
                        break;
                    case 2:
                        $('#section-' + sliderName + '-slider-img3').animate({
                            width: 0
                        }, 1000);
                        break;
                    case 3:
                        $('#section-' + sliderName + '-slider-img4').animate({
                            width: 0
                        }, 1000);
                        break;

                    default:
                        break;
                }
                switch (index) {
                    case 0:
                        $('#section-' + sliderName + '-slider-img1').animate({
                            width: '100%'
                        }, 1000);
                        PrewSliderIndex = 0;
                        break;
                    case 1:
                        $('#section-' + sliderName + '-slider-img2').animate({
                            width: '100%'
                        }, 1000);
                        PrewSliderIndex = 1;
                        break;
                    case 2:
                        $('#section-' + sliderName + '-slider-img3').animate({
                            width: '100%'
                        }, 1000);
                        PrewSliderIndex = 2;
                        break;
                    case 3:
                        $('#section-' + sliderName + '-slider-img4').animate({
                            width: '100%'
                        }, 1000);
                        PrewSliderIndex = 3;
                        break;

                    default:
                        break;
                }
            });
        }
    }

    //SCROLL EVENT
    $(document).scroll(function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (document.body.clientWidth > 1400) {
            if (scrollTop > 0 & scrollTop < 6) {
                isScrolled = false
                $(document).scroll(function(e) {
                    if (window.pageYOffset > 6 & isScrolled == false) {
                        scrollDown()
                    }
                });
            }
            if (scrollTop > mainBlockHeight / 4 & !BlockSection1) {
                BlockSection1 = true;
                $('.section-Rooms').animate({
                    opacity: 1
                }, 500, function() {
                    $('#section-Rooms-slider').animate({
                        width: '50%'
                    }, 500, function() {
                        $('#section-Rooms-slider-dots').animate({
                            opacity: 1
                        }, 500);
                    });
                });
            }
            if (scrollTop > mainBlockHeight / 1.5 & !BlockSection2) {
                BlockSection2 = true;
                $('.section-Banya').animate({
                    opacity: 1
                }, 500, function() {
                    $('#section-Banya-slider').css('display', 'flex')
                    $('#section-Banya-slider').animate({
                        width: '50%',
                    }, 500, function() {
                        $('#section-Banya-slider-dots').animate({
                            opacity: 1
                        }, 500);
                    });
                });
            }
            if (scrollTop > mainBlockHeight * 1.2 & !BlockSection3) {
                BlockSection3 = true;
                $('.section-Kupel').animate({
                    opacity: 1
                }, 500, function() {
                    $('#section-Kupel-slider').animate({
                        width: '50%'
                    }, 500, function() {
                        $('#section-Kupel-slider-dots').animate({
                            opacity: 1
                        }, 500);
                    });
                });
            }
            if (scrollTop > mainBlockHeight * 2 & !BlockSection4) {
                BlockSection4 = true;
                imageGridAnim();
            }
            if (scrollTop > mainBlockHeight * 3 & !BlockSection5) {
                BlockSection5 = true;
                $('#map').animate({
                    opacity: 1
                }, 500, function() {
                    $('.map-section-frame').animate({
                        opacity: 1
                    }, 500);
                });
            }
        }
        headerPosition();
    });

    //RESIZE EVENT
    window.onresize = function() {
        headerPosition();
        if (document.body.clientWidth > 1400 & !BlocSizeTrigger) {
            BlocSizeTrigger = true
            $('.section-Rooms').css('opacity', '1');
            $('.section-Banya').css('opacity', '1');
            $('.section-Kupel').css('opacity', '1');

            $('#section-Rooms-slider').css('width', '50%');
            $('#section-Banya-slider').css('width', '50%');
            $('#section-Banya-slider').css('display', 'flex');
            $('#section-Kupel-slider').css('width', '50%');

            $('.sliderDots').css('opacity', '1');

            $('#map').css('opacity', '1');
            $('.map-section-frame').css('opacity', '1');
            imageGridAnim();
        } else if (document.body.clientWidth < 1400) {
            BlocSizeTrigger = false

            $('.section-Rooms').css('opacity', '1');
            $('.section-Banya').css('opacity', '1');
            $('.section-Kupel').css('opacity', '1');

            $('#section-Rooms-slider').css('width', '100%');
            $('#section-Banya-slider').css('width', '100%');
            $('#section-Banya-slider').css('display', 'flex');
            $('#section-Kupel-slider').css('width', '100%');

            $('.sliderDots').css('opacity', '1');

            $('#map').css('opacity', '1');
            $('.map-section-frame').css('opacity', '1');
            imageGridAnim();
        }
    }

    //MAIN SLIDER TIMER
    function timer() {
        $('#main-bgSlider-dots').children().removeClass("dotActive");

        switch (mainSlider) {
            case 1:
                $('#main-li2').addClass("dotActive");
                $('#main-bgSlider-pic1').animate({
                    opacity: 0
                }, 1000);
                $('#main-bgSlider-pic2').animate({
                    opacity: 1
                }, 500);
                mainSlider++;
                break;
            case 2:
                $('#main-li3').addClass("dotActive");
                $('#main-bgSlider-pic2').animate({
                    opacity: 0
                }, 1000);
                $('#main-bgSlider-pic3').animate({
                    opacity: 1
                }, 500);
                mainSlider++;
                break;
            case 3:
                $('#main-li4').addClass("dotActive");
                $('#main-bgSlider-pic3').animate({
                    opacity: 0
                }, 1000);
                $('#main-bgSlider-pic4').animate({
                    opacity: 1
                }, 500);
                mainSlider++;
                break;
            case 4:
                $('#main-li1').addClass("dotActive");
                $('#main-bgSlider-pic4').animate({
                    opacity: 0
                }, 1000);
                $('#main-bgSlider-pic1').animate({
                    opacity: 1
                }, 500);
                mainSlider = 1;
                break;
            default:
                break;
        }
        setTimeout(timer, 5000);
    }

    // LANG
    function localisate(lang) {

        if (lang == 'RU') {
            $('#menu1').text('Комнаты')
            $('#menu2').text('Баня')
            $('#menu3').text('Купель')
            $('#menu4').text('Мангал')
            $('#menu5').text('Про нас')
            $('#menu6').text('Контакты')
            $(".main-section_box-col-undertext").text('Банный дворик - уютное место для отдыха');

            $("#RoomsSection").text('Комнаты');
            $("#BanyaSection").text('Баня');
            $("#KupelSection").text('Купель');

            $("#RoomsSection-text").text('Какой-то русский текст бла бла бла');
            $("#BanyaSection-text").text('Какой-то русский текст бла бла бла');
            $("#KupelSection-text").text('Какой-то русский текст бла бла бла');

            $("#Adress").text('Украина, Молодежное, Одесская область, Овидиопольский район');
            $("#trip1").text('г. Иличёвск - 3км / 5 мин.');
            $("#trip2").text('Море - 1км / 3 мин.');
        } else if (lang == 'EN') {
            $('#menu1').text('Rooms')
            $('#menu2').text('Sauna')
            $('#menu3').text('Kupel')
            $('#menu4').text('Barbecue')
            $('#menu5').text('About')
            $('#menu6').text('Contacts')
            $(".main-section_box-col-undertext").text('Bath Yard - a cozy place to relax');

            $("#RoomsSection").text('Rooms');
            $("#BanyaSection").text('Sauna');
            $("#KupelSection").text('Kupel');

            $("#RoomsSection-text").text('Some eng text blah blah blah');
            $("#BanyaSection-text").text('Some eng text blah blah blah');
            $("#KupelSection-text").text('Some eng text blah blah blah');

            $("#Adress").text('Ukraine, Molodejnoe, Odessa region, Ovidiopol district');
            $("#trip1").text('Ilichevsk - 3km / 5 min.');
            $("#trip2").text('Sea - 1km / 3 min.');

        } else if (lang == 'UA') {
            $('#menu1').text('Kiмнати')
            $('#menu2').text('Сауна')
            $('#menu3').text('Купіль')
            $('#menu4').text('Мангал')
            $('#menu5').text('Про нас')
            $('#menu6').text('Контакти')
            $(".main-section_box-col-undertext").text('Банний дворик - затишне місце для відпочинку');

            $("#RoomsSection").text('Kiмнати');
            $("#BanyaSection").text('Сауна');
            $("#KupelSection").text('Купіль');

            $("#RoomsSection-text").text('Деякі українські тексти бла-бла-бла');
            $("#BanyaSection-text").text('Деякі українські тексти бла-бла-бла');
            $("#KupelSection-text").text('Деякі українські тексти бла-бла-бла');

            $("#Adress").text('Україна, Молодіжне, Одеська область, Овідіопольський район');
            $("#trip1").text('г. Черноморськ - 3км / 5 хв.');
            $("#trip2").text('Море - 1км / 3 хв.');

        }
    }

    function addLocalisateEvents(ElementsParent) {
        $('#' + ElementsParent + '-top-lang-div-active').click(function() {
            if (langClick) {
                langClick = false;
                $('#' + ElementsParent + '-top-lang-div-second').animate({ opacity: '0' }, 100);
                $('#' + ElementsParent + '-top-lang-div-third').animate({ opacity: '0' }, 100);
            } else if (!langClick) {
                $('#' + ElementsParent + '-top-lang-div-second').animate({ opacity: '1' }, 100);
                $('#' + ElementsParent + '-top-lang-div-third').animate({ opacity: '1' }, 100);
                langClick = true;
            }
        });
        $('#' + ElementsParent + '-top-lang-div-second').click(function() {
            langClick = false;
            $('#' + ElementsParent + '-top-lang-div-second').animate({ opacity: '0' }, 100);
            $('#' + ElementsParent + '-top-lang-div-third').animate({ opacity: '0' }, 100);

            if ('RU' == $('#' + ElementsParent + '-top-lang-div-second').text()) {
                localisate('RU')
                $('#' + ElementsParent + '-top-lang-div-active').text('RU');

                $('#' + ElementsParent + '-top-lang-div-second').text('UA');
                $('#' + ElementsParent + '-top-lang-div-third').text('EN');
            } else if ('UA' == $('#' + ElementsParent + '-top-lang-div-second').text()) {
                localisate('UA')
                $('#' + ElementsParent + '-top-lang-div-active').text('UA');

                $('#' + ElementsParent + '-top-lang-div-second').text('RU');
                $('#' + ElementsParent + '-top-lang-div-third').text('EN');
            } else if ('EN' == $('#' + ElementsParent + '-top-lang-div-second').text()) {
                localisate('EN')
                $('#' + ElementsParent + '-top-lang-div-active').text('EN');

                $('#' + ElementsParent + '-top-lang-div-second').text('RU');
                $('#' + ElementsParent + '-top-lang-div-third').text('UA');
            }

        });
        $('#' + ElementsParent + '-top-lang-div-third').click(function() {
            langClick = false;
            $('#' + ElementsParent + '-top-lang-div-second').animate({ opacity: '0' }, 100);
            $('#' + ElementsParent + '-top-lang-div-third').animate({ opacity: '0' }, 100);


            if ('RU' == $('#' + ElementsParent + '-top-lang-div-third').text()) {
                localisate('RU')
                $('#' + ElementsParent + '-top-lang-div-active').text('RU');

                $('#' + ElementsParent + '-top-lang-div-second').text('UA');
                $('#' + ElementsParent + '-top-lang-div-third').text('EN');
            } else if ('UA' == $('#' + ElementsParent + '-top-lang-div-third').text()) {
                localisate('UA')
                $('#' + ElementsParent + '-top-lang-div-active').text('UA');

                $('#' + ElementsParent + '-top-lang-div-second').text('RU');
                $('#' + ElementsParent + '-top-lang-div-third').text('EN');
            } else if ('EN' == $('#' + ElementsParent + '-top-lang-div-third').text()) {
                localisate('EN')
                $('#' + ElementsParent + '-top-lang-div-active').text('EN');

                $('#' + ElementsParent + '-top-lang-div-second').text('RU');
                $('#' + ElementsParent + '-top-lang-div-third').text('UA');
            }
        });
    }


    //SIDE
    $('.header-top-threeLine').click(function() {

        if (document.body.clientWidth > 500) {
            $('#sideDiv').animate({ width: '400px' }, 500, function() {
                $('.aside-top').animate({ opacity: '1' }, 200, function() {
                    $('.aside-menu').animate({ opacity: '1' }, 200);
                });
            });

            $('.aside-top-phone').css('display', 'flex');
            $('.aside-top-lang').css('display', 'block');
            $('.escBtn').css('width', '60px');
            $('.escBtn').css('height', '50px');
        } else {
            $('.aside-top-phone').css('display', 'none');
            $('.aside-top-lang').css('display', 'none');
            $('.escBtn').css('width', '25px');
            $('.escBtn').css('height', '25px');
            $('.escBtn').css('align-self', 'center');

            $('#sideDiv').animate({ width: '50%' }, 500, function() {
                $('.aside-top').animate({ opacity: '1' }, 200, function() {
                    $('.aside-menu').animate({ opacity: '1' }, 200);
                });
            });
        }
        $('.header-top-threeLine').css('opacity', '0');
    });
    $('.escBtn').click(function() {

        $('.aside-menu').animate({ opacity: '0' }, 100, function() {
            $('.aside-top').animate({ opacity: '0' }, 100, function() {
                $('#sideDiv').animate({ width: '0px' }, 500);
            });
        });
        $('.header-top-threeLine').css('opacity', '1');
    });

    //NAVIGATE
    function navigate(parentName) {
        var Menu = document.getElementById(parentName)
        for (let index = 0; index < Menu.children.length; index++) {
            Menu.children[index].addEventListener("click", function() {
                switch (index) {
                    case 0:
                        $('html, body').animate({ scrollTop: mainBlockHeight }, 500);
                        break;
                    case 1:
                        $('html, body').animate({ scrollTop: mainBlockHeight + sectionHeight }, 500);
                        break;
                    case 2:
                        $('html, body').animate({ scrollTop: mainBlockHeight + sectionHeight * 2 }, 500);
                        break;
                    case 3:

                        break;
                    case 4:

                        break;
                    case 5:
                        $('html, body').animate({ scrollTop: mainBlockHeight + sectionHeight * 6 }, 500);
                        break;
                    default:
                        break;
                }
            })
        }
    }

    initDivs();
    headerPosition();
    timer();
    createSliderTrigger('Rooms');
    createSliderTrigger('Banya');
    createSliderTrigger('Kupel');
    addLocalisateEvents('header');
    addLocalisateEvents('aside');
    navigate('hMenu');
    navigate('aMenu');
    imageGridEvent();
});