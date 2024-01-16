console.log("pf");

$(document).ready(function () {
    $(".people_filter").click(function(){
        $.get("/person/filter",
            {type: $("#" + $(this).attr("for")).val()},
            function(){

            }
        );
    });
});
