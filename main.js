$(document).ready(function() {
    //Setup variables.
    var roomNumber;
    $("#btnReset").hide();
    $(".panel").hide();

    //Set Button.
    $("#btnSet").click(function() {
        roomNumber = parseInt($("#roomNum").val());
        if(Number.isInteger(roomNumber) == false) {
            alert("Please input integer value. Your input was: "+ $("#roomNum").val());
        }
        else if(roomNumber <= 0 || roomNumber > 20) {
            alert("Please input minimum of 1 room and maximum of 20 rooms.");
        }
        else {
            $(this).addClass("disabled");
            $("#btnReset").show();
            $(".panel").show();

            //Add elements inside the panel.
            for(var i=1; i<=roomNumber; i++) {

                var label = $("<span></span>").addClass("input-group-addon").text("Room "+ i);
                var txtInput = $("<input></input>").addClass("form-control").attr("placeholder", "Input custom room name");
                $("#roomInf").append(label).append(txtInput).append("<br>");

            }
        }
    });

    //Reset Button.
    $("#btnReset").click(function() {
        $("#roomNum").val("");
        $("#btnSet").removeClass("disabled");
        $(".panel").hide();
        $(this).hide();
        
    });


});