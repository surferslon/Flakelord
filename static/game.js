document.addEventListener('DOMContentLoaded', function() {
    // {window.onload = function() {
    // 800 1295
    var stage       = document.getElementById('cnvs')
    var ctx         = stage.getContext('2d')
    var ctx_titles  = stage.getContext('2d')
    var ctx_text    = stage.getContext('2d')

    var username = ''
    var map = []
    var monsters = {}

    var mouse_x = 0;
    var mouse_y = 0;

    var cell_width = 132;
    var cell_height = 69;
    var screen_steps = 12;

    var screen_step_x = cell_width / screen_steps;
    var screen_step_y = cell_height / screen_steps

    var player_x;
    var player_y;
    var player_dir = 'r';

    var draw_center_x = stage.offsetWidth / 2;
    var draw_center_y = stage.offsetHeight / 2;

    var draw_start_x;
    var draw_start_y;

    var new_draw_start_x;
    var new_draw_start_y;

    var y = draw_start_y + 5*cell_height,
        x = (draw_start_x - 8*cell_width) + 5*cell_width, // Start positions
        wid = 20,
        hei = 30;

    var img_player_l = new Image();
    var img_player_r = new Image();
    var img_wall = new Image();
    var img_floor = new Image();
    var img_stairway = new Image();

    var character = 'rogue';

    img_player_l.src = '/static/img/chars/'.concat(character, '/left.png');
    img_player_r.src = '/static/img/chars/'.concat(character, '/right.png');
    img_wall.src   = '/static/img/landscape/wall0.png';
    img_floor.src  = '/static/img/landscape/floor.png';
    img_stairway.src = '/static/img/landscape/stairway.png';

    var monster_x = 18;
    var monster_y = 15;
    var monster_dir = 'r';

    var img_monster_l = new Image();
    var img_monster_r = new Image();
    img_monster_r.src = '/static/img/chars/dwarf/left.png'
    img_monster_r.src = '/static/img/chars/dwarf/left.png'

    var tileX
    var tileY
    stage.width  = stage.offsetWidth;
    stage.height = stage.offsetHeight;
    var terminal = $("#terminal")

    function showMessage(message) {
        let div_msg = "<div class='terminal-message'>" + message + "</div"
        terminal.append(div_msg)
        terminal.scrollTop(terminal.prop("scrollHeight"));
    }

    function ConvertToCoord(x, y) {
        return {
            x: draw_start_x + ((x - y) * cell_width/2),
            y: draw_start_y + (y + x) * cell_height/2
        }
    }

    function drawPlayer(x, y, wid, hei, player_dir) {
        coords = ConvertToCoord(x, y)
        drawRhomb(coords.x, coords.y);
        if (player_dir=='r' ){
            ctx.drawImage(img_player_r, coords.x-cell_width/4, coords.y-cell_height+30);
        }
        else {
            ctx.drawImage(img_player_l, coords.x-cell_width/4, coords.y-cell_height+30);
        }
    }

    function drawMonster(x, y, wid, hei) {
        coords = ConvertToCoord(x, y)
        if (monster_dir=='r'){
            ctx.drawImage(img_monster_r, coords.x-cell_width/4, coords.y-cell_height+3);
        }
        else {
            ctx.drawImage(img_monster_l, coords.x-cell_width/4, coords.y-cell_height+3);
        }
    }

    function drawRhomb(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cell_width / 2, y + cell_height / 2);
        ctx.lineTo(x, y + cell_height);
        ctx.lineTo(x - cell_width / 2, y + cell_height / 2);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }

    function drawWall(x, y) {
        ctx.drawImage(img_wall, x-cell_width/2, y-cell_height-35);
    }
    function drawFloor(x, y) {
        ctx.drawImage(img_floor, x-cell_width/2, y);
    }
    function drawStairway(x, y) {
        ctx.drawImage(img_stairway, x-cell_width/2, y);
    }

    function drawArea(coord) {
        let area_y = 500;
        let area_x = 700;
        if (coord.x < draw_center_x-area_x || coord.y < draw_center_y-area_y || coord.x > draw_center_x + area_x || coord.y > draw_center_y + area_y) {
            return false;
        }
        else {
            return true;
        }
    }

    function drawMap_background() {

        // Floor
        for(var cur_clm=0; cur_clm<60; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {
                coord = ConvertToCoord(cur_clm, cur_row);
                if ( !drawArea(coord) ) {
                    continue;
                }
                switch (map[cur_row][cur_clm]['obj']) {
                    case 'floor':
                        drawFloor(coord.x, coord.y);
                        break;
                    case 'stairway':
                        drawStairway(coord.x, coord.y);
                        break;
                }
            }
        }

        // Background walls
        for(var cur_clm=0; cur_clm<60; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {
                if (map[cur_row][cur_clm]['obj'] == undefined) {
                    // console.log(cur_row, cur_clm);
                }

                if (map[cur_row][cur_clm]['obj'] == 'wall') {
                    coord = ConvertToCoord(cur_clm, cur_row);
                    if ( !drawArea(coord) ) {
                        continue;
                    }

                    // if ( Math.abs(cur_row - player_y) < 4 && Math.abs(cur_clm - player_x) < 4 ) {
                    let diff_x = cur_clm - player_x;
                    let diff_y = cur_row - player_y;
                    if (cur_clm >= player_x && cur_row >= player_y && diff_y < 2 && diff_x<2) {
                        ctx.globalAlpha = 0.1;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 4 && diff_x<4) {
                        ctx.globalAlpha = 0.3;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 6 && diff_x<6) {
                        ctx.globalAlpha = 0.6;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 7 && diff_x<7) {
                        ctx.globalAlpha = 0.8;
                    }
                    drawWall(coord.x, coord.y);
                    ctx.globalAlpha = 1;
                }

                if (cur_row==player_y && cur_clm==player_x) {
                    drawPlayer(player_x, player_y, wid, hei, player_dir);
                }


                for(var key in monsters) {
                    if (monsters[key].x==cur_clm && monsters[key].y==cur_row) {
                        drawPlayer(monsters[key].x, monsters[key].y, wid, hei, null);
                    }
                }

                if (cur_row==monster_y && cur_clm==monster_x) {
                    drawMonster(monster_x, monster_y, wid, hei);
                }

            }
        }

    }


    function drawMap() {
        drawMap_background();
    }

    function collision(x, y) {
        if (map[y][x]['obj'] == 'wall' ) {
            return true
        }
        return false

    }

    document.onkeydown = function(event) {
        var key = event.keyCode;
        // console.log(key);

    //     if(key === 68 && player_x<=1200 && !collision(player_x+1, player_y-1)) {
    //         player_x = player_x+1;
    //         player_y = player_y-1;
    //         player_dir = 'r';
    //          // draw_start_x = draw_start_x-cell_width;

    // //         new_draw_start_x = new_draw_start_x-cell_width;

    //      } // right
    //     else if(key === 69 && x>0 && !collision(player_x, player_y-1)) {
    //         player_y = player_y-1;
    //         player_dir = 'r';
    //         new_draw_start_x = new_draw_start_x-cell_width/2;
    //         new_draw_start_y = new_draw_start_y+cell_height/2;
    //     } // right up
    //     else if(key === 67 && x>0 && !collision(player_x+1, player_y)) {
    //         player_x = player_x+1;
    //         player_dir = 'r';
    //         new_draw_start_x = new_draw_start_x-cell_width/2;
    //         new_draw_start_y = new_draw_start_y-cell_height/2;
    //     } // rigth down
    //     else if(key === 65 && x>0 && !collision(player_x-1, player_y+1)) {
    //         player_x = player_x-1;
    //         player_y = player_y+1;
    //         player_dir = 'l';
    //         new_draw_start_x = new_draw_start_x+cell_width;
    //     } // left
    //     else if(key === 81 && player_x>0 && !collision(player_x-1, player_y)) {
    //         player_x = player_x-1;
    //         player_dir = 'l';
    //         new_draw_start_x = new_draw_start_x+cell_width/2;
    //         new_draw_start_y = new_draw_start_y+cell_height/2;
    //     } // left up
    //     else if(key === 87 && y>0 && !collision(player_x-1, player_y-1)) {
    //         player_x = player_x-1;
    //         player_y = player_y-1;
    //         new_draw_start_y = new_draw_start_y+cell_height;
    //     } // up
    //     else if(key === 88 && y<=600 && !collision(player_x+1, player_y+1)) {
    //         player_x = player_x+1;
    //         player_y = player_y+1;
    //         new_draw_start_y = new_draw_start_y-cell_height;
    //     } // down
    //     else if(key === 90 && player_x>0 && !collision(player_x, player_y+1)) {
    //         player_y = player_y+1;
    //         player_dir = 'l';
    //         new_draw_start_x = new_draw_start_x+cell_width/2;
    //         new_draw_start_y = new_draw_start_y-cell_height/2;
    //     } // left down


    //     if (monster_x > player_x)       {
    //         monster_x = monster_x - 1   }
    //     else if (monster_x < player_x)    {
    //         monster_x = monster_x + 1   }
    //     if (monster_y > player_y)       {
    //         monster_y = monster_y - 1;  }
    //     else if (monster_y < player_y)  {
    //         monster_y = monster_y + 1;  }

    }


    stage.addEventListener('mousemove', function(evnt) {
        var rect = stage.getBoundingClientRect();
        mouse_x = evnt.clientX - rect.left;
        mouse_y = evnt.clientY - rect.top;
    }, false);

    function drawPointer() {
        tileX = Math.round((mouse_x - draw_start_x ) / cell_width + (mouse_y-draw_start_y) / cell_height);
        tileY = Math.round((mouse_y - draw_start_y) / cell_height - (mouse_x-draw_start_x) / cell_width);

        coord = ConvertToCoord(tileX, tileY);

        if (tileX > player_x || tileY < player_y) {
            player_dir = 'r'
        }
        else {
            player_dir = 'l'
        }

        drawRhomb(coord.x, coord.y);

        ctx.font = "15px Courier";
        ctx.fillStyle = 'white';

        if (tileY < 30 && tileY >= 0 && tileX <= 60 && tileX >= 0) {
            if (map[tileY][tileX]) {
                ctx.fillText(map[tileY][tileX]['obj'], coord.x+20, coord.y);
            }
        }
        else if (tileY == player_y && tileX == player_x) {
            ctx.fillText("Player", coord.x+20, coord.y);
        }

    }

    var FPS = 20;

    function mainLoop() {
        if (new_draw_start_x < draw_start_x) {
            draw_start_x = draw_start_x - screen_step_x;
        }
        else if (new_draw_start_x > draw_start_x) {
            draw_start_x = draw_start_x + screen_step_x;
        }
        if (new_draw_start_y < draw_start_y) {
            draw_start_y = draw_start_y - screen_step_y;
        }
        if (new_draw_start_y > draw_start_y) {
            draw_start_y = draw_start_y + screen_step_y;
        }
        ctx.clearRect(0, 0, 1800, 900); // clearing anything drawn on canvas
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);
        if (map.length) {
            drawMap();
            drawPointer();
        }
        requestAnimationFrame(mainLoop);
    }

    requestAnimationFrame(mainLoop);


    // WEB SOCKETS //

    // Correctly decide between ws:// and wss://
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var ws_path = ws_scheme + '://' + window.location.host + "/chat/stream/";

    showMessage("Connecting to " + ws_path)

    var socket = new ReconnectingWebSocket(ws_path);

    socket.onopen = function () {
        socket.send(JSON.stringify({
            "command": "join",
            "room": stage.dataset.gameId
        }));
        showMessage("Connected")
    }
    socket.onclose = function () {
        showMessage("Disconnected")
    }
    socket.onmessage = function (message) {  // Handle incoming messages

        var data = JSON.parse(message.data);

        if (data.error) {
            showMessage("data.error")
            return;
        }

        if (data.join) {

            showMessage("Joining room " + data.join)

            map = data.message.field;
            username = data.message.username;
            showMessage("Saved local var username " + data.message.username)
            player_x = data.message.start_x;
            player_y = data.message.start_y;

            draw_start_x = draw_center_x - ( (player_x) * cell_width/2 ) + ( (player_y) * cell_width/2 );
            draw_start_y = draw_center_y - ( (player_y) * cell_height/2 ) - ( (player_x) * cell_height/2 );
            new_draw_start_x = draw_start_x;
            new_draw_start_y = draw_start_y;

        } else if (data.leave) {

            showMessage("Leaving game " + data.leave)
            map = []

        } else if (data.message || data.msg_type != 'message') {

            switch (data.msg_type) {

                case 'message':
                    if (data.message.resp_type == 'message') {
                        showMessage("<span class='msg-user'>" + data.username + ": </span>" +
                                    "<span class='msg-body'>" + data.message.text + "</span>")
                    }
                    else {
                        if (data.username == username) {
                            if (collision(data.message.new_x, data.message.new_y)){
                                return;
                            }
                            player_x = data.message.new_x;
                            player_y = data.message.new_y;
                            new_draw_start_x = draw_center_x - ( (player_x) * cell_width/2 ) + ( (player_y) * cell_width/2 );
                            new_draw_start_y = draw_center_y - ( (player_y) * cell_height/2 ) - ( (player_x) * cell_height/2 );
                        }
                        else {
                            monsters[data.username] = {'x': data.message.new_x, 'y': data.message.new_y};
                        }
                    }
                    break

                case 'warning':
                    showMessage(data.message)
                    break;

                case 'alert':
                    showMessage(data.message)
                    break;

                case 'muted':
                    showMessage(data.message)
                    break;

                case 'enter':
                    monsters[data.username] = {'x': data.x, 'y': data.y };
                    showMessage(data.username + " joined the room")
                    break;

                case 'leave':
                    delete monsters[data.username]
                    showMessage(data.username + " left the room")
                    break;

                default:
                    showMessage("Unsupported message type")
                    return;

            }

        } else {

            showMessage("Cannot handle message")

        }
    };

    // Hook up hotkey
    cnvs.addEventListener("keydown", function(event) {
        let key = event.keyCode;
        let new_x;
        let new_y;
        // showMessage(key)
        switch (key) {
            case 87:  // up
                new_x = player_x-1;
                new_y = player_y-1;
                break;
            case 81:  // up left
                new_x = player_x-1;
                new_y = player_y;
                break;
            case 69:  // up right
                new_x = player_x;
                new_y = player_y-1;
                break;
            case 88:  // down
                new_x = player_x+1;
                new_y = player_y+1;
                break;
            case 90:  // down left
                new_x = player_x;
                new_y = player_y+1;
                break;
            case 67:  // down right
                new_x = player_x+1;
                new_y = player_y;
                break;
            case 68:  // right
                new_x = player_x+1;
                new_y = player_y-1;
                break;
            case 65:  // left
                new_x = player_x-1;
                new_y = player_y+1;
                break;
            default:
                return;
        }

        if (new_x && new_y) {
            socket.send(JSON.stringify({
                "command": "send",
                "room": stage.dataset.gameId,
                "message": {
                    'username': username,
                    'old_x': player_x,
                    'old_y': player_y,
                    'new_x': new_x,
                    'new_y': new_y
                }
            }));
        }
    })

    stage.addEventListener('click', function(evnt) {
    //     if (tileX > player_x || tileY < player_y) {
    //         player_dir = 'r'
    //     }
    //     else {
    //         player_dir = 'l'
    //     }
    //     // socket.send(JSON.stringify({
    //     //     "command": "send",
    //     //     "room": data.join,
    //     //     "message": {
    //     //         'username': data.message.username,
    //     //         'old_x': player_x,
    //     //         'old_y': player_y,
    //     //         'new_x': tileX,
    //     //         'new_y': tileY
    //     //     }
    //     // }));
    }, false);

    // Hook up send button to send a message
    $("#chat-form").on("submit", function (event) {
        event.preventDefault()
        socket.send(JSON.stringify({
            "command": "send",
            "room": stage.dataset.gameId,
            "message": $("#chat-form").find("input").val()
        }));
        $("#chat-form").find("input").val("");
        return false;
    });

    $('#button-quit').on('click', function(event) { // Leave room
        event.preventDefault()
        socket.send(JSON.stringify({
            "command": "leave",
            "room": stage.dataset.gameId
        }));
        window.location = $(event.target).data('url')
    })

})

