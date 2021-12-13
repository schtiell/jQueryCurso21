
(function () {

    $(function () {

        console.log("jQuery listo");

        $(".imgThumb").on("mouseover", function () {

                //obteniendo el color del atributo data-color de las imagenes
                let $color = $(this).data("color");

                //generando la url de las camisas con el color seleccionado con el mouse
                let source = `./img/camiseta/large/${$color}.jpg`;

                /*console.log($color);
                console.log(source);*/

                //Cambiando el texto del elemento con id #lblColor
                $("#lblColor").text($color);

                //Cambiando el atributo del elemento con id muestraGrande con la nueva url que contiene la variable source
                $("#muestraGrande").attr("src",source);
        });

    });
})();