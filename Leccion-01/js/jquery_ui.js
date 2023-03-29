
(function () {
    

    //Jquery
    $(function (){

        //Print function
        $("#print").click(function () {
            console.log("jqueryui");
        });
    });


    //calendar jQuery ui
    $("#date").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });

    //tooltip jQuery-ui
    $("#tooltip").tooltip({
        content: "Escribe tu nombre!!",
        classes:{
            "ui-tooltip": "ui-corner-all ui-widget-shadow"
        },
        show:{
            effect: "blind",
            duration: 500,
            delay:250
        },
        hide:{ 
            effect: "explode", 
            duration: 500,
        },
    });

    //Accordion jQuery-ui
    $("#detail-list").accordion({
        active: false,
        collapsible: true,
        classes:{
            "ui-accordion": "highlight"
        },
        icons:{
            header: "ui-icon-plus",
            activeHeader: "ui-icon-minus"
        },
        animate: 600
    });


    //Dialog widget

    $("#btnOpenDialog").click(function (){
        $("#dialogBox").dialog("open");
    })

    $("#dialogBox").dialog({
        title: "Dialogo interactivo",
        //draggable: false
        resizable: false,
        closeOnScape: false,
        autoOpen: false
    });

})();