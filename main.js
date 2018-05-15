$(document).ready(function() {
    //Setup variables.
    var roomNumber, floorNumber;
    $("#btnReset").hide();
    $(".panel").hide();
    $("#allRooms").show();
    var floors = ["1st", "2nd", "3rd"]
    var settingDetails = {rmName:"", rmLocation:"", currentTemp:0, lights:""};
    var dataSettings = [
        {rmName:"Kitchen", rmLocation:"1st Floor", currentTemp:0, lights:"ON"},
        {rmName:"Lounge", rmLocation:"1st Floor", currentTemp:0, lights:"ON"},
        {rmName:"Laundry", rmLocation:"1st Floor", currentTemp:0, lights:"OFF"},
        {rmName:"Garage", rmLocation:"2nd Floor", currentTemp:0, lights:"OFF"},
        {rmName:"Bedroom", rmLocation:"2nd Floor", currentTemp:0, lights:"OFF"},
        {rmName:"Bathroom", rmLocation:"2nd Floor", currentTemp:0, lights:"OFF"},
        {rmName:"Restroom", rmLocation:"2nd Floor", currentTemp:0, lights:"OFF"}      
        
    ]; //Array of settings add ed by the user.

    //Set Button.
    $("#btnSet").click(function() {
        roomNumber = parseInt($("#roomNum").val());
        floorNumber = parseInt($("#flrNum").val());

        if(false == Number.isInteger(roomNumber) || false == Number.isInteger(floorNumber)) {
            alert("Please input integer value for both room number and floor number." +
                "\nYour input was: \nfloor:"+ $("#flrNum").val() + "\nroom:" +$("#roomNum").val());
        }
        else if(roomNumber <= 0 || roomNumber > 20 || floorNumber <= 0 || floorNumber > 3) {
            alert("Please input:\nfloor: min=1 max=3 \nroom: min=1 max=20.");
        }
        else {
            $(this).addClass("disabled").prop("disabled", true);
            $("#btnReset").show();
            $(".panel").slideDown();
            $("roomInfB").slideDown();

            

            //Add elements inside the panel.
            for(var i=0; i<roomNumber; i++) {
                var value = "rm"+(i+1);
                var item = $("<option></option>").text("Room "+ (i+1)).prop("id",value);
                $("#selectRm").append(item);

                if(i<2) {
                    item = $("<img></img>").addClass("img-circle img-responsive").attr({"id": value, "src": "images/room.png"})
                    //$("#")
                }
            //    saveRoomInfo(i,value);
            }
            for(var i=1; i<=floorNumber; i++) {
                var item = $("<option></option>").text(floors[i-1] + " Floor").prop("id","flr"+i);
                $("#selectFlr").append(item);
            }
        }
        
    });

    //Reset Button.
    $("#btnReset").click(function() {
        $("#roomNum").val("");
        $("#btnSet").removeClass("disabled").prop("disabled", false);;
        $(".panel").slideUp();
        $("#selectRm").empty();
        $("#selectFlr").empty();
        $(this).hide();
        
    });

    //Custom room info.
    $("#roomInfH").on({
        mouseover: function() {
            $(this).css("cursor","pointer")        
        },
        click:  function() {
            $("#roomInfB").slideToggle();
        }
    });

    //Skip Button.
    $("#btnSkip").click(function() {
        alert("The system will automatically assign room names, and the room locations will be set unknown.");
        $("#roomInfB").slideUp();
    });

    function saveRoomInfo(number,name) {
  //      settingDetails.push({rmName=name, rmLocation="", currentTemp=0, lights=""});

    }
});

