
//Encapsulamiento de jquery
(function (){

    //jQuery
    $(function(){

        console.log("Interacciones de jQuery");

        // Draggable jQuery-ui
        $(".box").draggable({
            //axis: "y",
            cursor: "grabbing",
            opacity: "0.5",
            //containment: "parent",
            //grid:[300,300]
            snap: true,         //Superponerse
            snapTolerance: 50   //Distancia en px desde los bordes del elemento en el que debe ocurrir el ajuste
        });

        //Sortable jQuery-ui
        $(".sort").sortable({
            opacity: 0.5,
            cursor: "move",
            containment: "parent",
            delay: 10,
            distance: 10,
            axis: "y",
            classes:{
                "ui-sortable": "highlight"
            },
            cursorAt: { 
                right: 5 
            }
        });

        $("#imgjQuery").resizable({
            //containment: "parent",
            animate: true,
            minHeight: 100,
            minWidth: 100,
            maxHeight: 250,
            maxWidht: 250,
            ghost: true
        });


        /**
         * Customizable jQuery-ui
         */

        $("#dialog").dialog({
            title: "Dialog Box Customizable",
            draggable: true,
            resizable: true,
            closeOnEscape: true,
            modal: false,
            autoOpen: true
        });

        $("#calendar").datepicker({
            showOtherMonths: false,
            changeMonth: true,
            changeYear: true
        });


    }); //end jQuery block
})();// end jQuery encaptulation