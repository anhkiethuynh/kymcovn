$(window).on("load", function() {
    $(".svg").svgToInline();
    AOS.init();
    $(".slider__carousel").flickity({
        cellAlign: "center",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        watch: true,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        on: {
            ready: function() {
                $($(".slider__carousel-content")[0]).addClass("active");
            },
            change: function(index) {
                $(".slider__carousel-content").removeClass("active");
                $(".slide-number .main").text((index + 1).toString().padStart(2, "0"));
                $($(".slider__carousel-content")[index]).addClass("active");
            },
        },
    });
    var $contentSlider = $(".content-slider__carousel--wrap");
    $contentSlider.flickity({
        cellAlign: "center",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        watch: true,
        on: {
            ready: function() {
                $($(".text-box")[0]).addClass("active");
            },
            change: function(index) {
                $(".text-box").removeClass("active");
                $($(".text-box")[index]).addClass("active");
            },
        },
    });
    $(".btn-slider.--prev").on("click", function() {
        $contentSlider.flickity("previous", false);
    });
    $(".btn-slider.--next").on("click", function() {
        $contentSlider.flickity("next", false);
    });
    setContentSliderTextHeight();
    $(".character-choosing").paroller();
    $(".kymco-network").paroller();
});
$(window).on("resize", function() {
    setContentSliderTextHeight();
    location.reload();
});

function setContentSliderTextHeight() {
    let contentSliderHeights = $(".content-slider__text .text-box")
        .map(function() {
            return $(this).innerHeight();
        })
        .get();
    let maxContentSliderHeight = Math.max.apply(null, contentSliderHeights);
    $(".content-slider__text").css({
        height: maxContentSliderHeight + "px",
        "margin-bottom": "15px",
    });
}