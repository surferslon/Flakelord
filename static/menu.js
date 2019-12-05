window.onload = function() {

    inRoom = function (roomId) {
        // Says if we joined a room or not by if there's a div for it
        return $("#room-" + roomId).length > 0;
    };

    // Room join/leave
    $(".room-link").click(function () {
        roomId = $(this).attr("data-room-id");
        if (inRoom(roomId)) {
            // Leave room
            $(this).removeClass("joined");
            socket.send(JSON.stringify({
                "command": "leave",
                "room": roomId
            }));
        } else {
            // Join room
            $(this).addClass("joined");
            socket.send(JSON.stringify({
                "command": "join",
                "room": roomId
            }));
        }
    });
}