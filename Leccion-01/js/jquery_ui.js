
//Encapsulamiento de jQuery
(function () {

    //Jquery
    $(function (){

        //Print function
        $("#print").click(function () {
            console.log("jqueryui");
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
            autoOpen: false,
            modal: false
        });

        //Autocomplete jQuery-ui
        $("#languages").autocomplete({
            source: ["HTML", "CSS", "PHP", "Javascript", "Java", "COBOL", "Ruby", "Fortran", "Scala", "Lisp","Python", "C", "C++", "Perl", "C#", "Basic", "Visual Fox Pro", "Visual Basic","TypeScript"]
        },{
            minLength: 2,
            autoFocus: true,
            classes:{
                "ui-autocomplete": "highlight"
            },
            delay:200
        });

        $("#btn1").click(function () {
            console.info(`El lenguaje seleccionado es: ${$("#languages").val()}`);
        })

        //Modification widget getter & setter
        //getter values of widgets
        $("#getterDialog").click(function (){
            let modalValue = $("#dialogBox").dialog("option","modal");
            alert(`Metodo getter: ${modalValue}`);
            
        })

        //setter values on widgets
        $("#setterDialog").click(function (){
            $("#dialogBox")
                .dialog("option","draggable", false)
                .dialog("option","resizable", true)
                .dialog("option","title", "Valor cambiado metodo setter"); 
        });
    });
})();