$(document).ready(function() {
    $(".dishmenu__tabs .tab__item").click(function() {
        $(".dishmenu__tabs .tab__item").removeClass("active").eq($(this).index()).addClass("active");
    });
    $("menu li").click(function() {
        $("menu a").removeClass("active").eq($(this).index()).addClass("active");
    });
    let filter = $("[data-filter]");
    filter.on("click", function() {
        event.preventDefault();
        let cat = $(this).data('filter');
        if(cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function() {
                let wCat = $(this).data('cat');
                if(wCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});
