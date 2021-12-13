
(function () {

    $(function () {

        console.log("jQuery listo");

        $("img").on("mouseover", function () {

            let $color = $(this).data("color");
            let source = `./img/camiseta/large/${$color}.jpg`;

            console.log($color);
            console.log(source);
        });

    });
})();