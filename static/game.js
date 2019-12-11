var username = ''
var monsters = {}

var player_x;
var player_y;
var player_dir = 'r';

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


class Stage {
    constructor() {
        this.terminal = $("#terminal")
        this.canvas = document.getElementById('cnvs')
        this.gameId = this.canvas.dataset.gameId
        this.ctx = this.canvas.getContext('2d')
        this.draw_center_x = this.canvas.offsetWidth / 2;
        this.draw_center_y = this.canvas.offsetHeight / 2;
        this.new_draw_start_x = this.draw_center_x;
        this.new_draw_start_y = this.draw_center_y;
        this.canvas.width  = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.mouse_x = 0;
        this.mouse_y = 0;
        this.cell_width = 132;
        this.screen_steps = 12;
        this.cell_height = 69;
        this.screen_step_x = this.cell_width / this.screen_steps;
        this.screen_step_y = this.cell_height / this.screen_steps
        this.y = this.draw_start_y + 5*this.cell_height,
        this.x = (this.draw_start_x - 8*this.cell_width) + 5*this.cell_width, // Start positions
        this.wid = 20,
        this.hei = 30;
        this.map = [];
    }

    ConvertToCoord(x, y) {
        return {
            x: this.draw_start_x + ((x - y) * this.cell_width/2),
            y: this.draw_start_y + (y + x) * this.cell_height/2
        }
    }

    showMessage(message) {
        let div_msg = "<div class='terminal-message'>" + message + "</div"
        this.terminal.append(div_msg)
        this.terminal.scrollTop(this.terminal.prop("scrollHeight"));
    }

    drawRhomb(x, y) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + this.cell_width / 2, y + this.cell_height / 2);
        this.ctx.lineTo(x, y + this.cell_height);
        this.ctx.lineTo(x - this.cell_width / 2, y + this.cell_height / 2);
        this.ctx.lineTo(x, y);
        this.ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawWall(x, y) {
        this.ctx.drawImage(img_wall, x-this.cell_width/2, y-this.cell_height-35);
    }

    drawFloor(x, y) {
        this.ctx.drawImage(img_floor, x-this.cell_width/2, y);
    }

    drawStairway(x, y) {
        this.ctx.drawImage(img_stairway, x-this.cell_width/2, y);
    }

    drawPlayer(x, y, wid, hei, player_dir) {
        let coords = this.ConvertToCoord(x, y)
        this.drawRhomb(coords.x, coords.y);
        if (player_dir=='r' ){
            this.ctx.drawImage(img_player_r, coords.x-this.cell_width/4, coords.y-this.cell_height+30);
        }
        else {
            this.ctx.drawImage(img_player_l, coords.x-this.cell_width/4, coords.y-this.cell_height+30);
        }
    }

    drawMonster(x, y, wid, hei) {
        let coords = this.ConvertToCoord(x, y)
        if (monster_dir=='r'){
            this.ctx.drawImage(img_monster_r, coords.x-this.cell_width/4, coords.y-this.cell_height+3);
        }
        else {
            this.ctx.drawImage(img_monster_l, coords.x-this.cell_width/4, coords.y-this.cell_height+3);
        }
    }

    drawArea(coord) {
        let area_y = 500;
        let area_x = 700;
        if (coord.x < this.draw_center_x-area_x || coord.y < this.draw_center_y-area_y || coord.x > this.draw_center_x + area_x || coord.y > this.draw_center_y + area_y) {
            return false;
        }
        else {
            return true;
        }
    }

    drawMap_background() {
        // Floor
        for(var cur_clm=0; cur_clm<60; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {
                let coord = this.ConvertToCoord(cur_clm, cur_row);
                if ( !this.drawArea(coord) ) {
                    continue;
                }
                switch (this.map[cur_row][cur_clm]['obj']) {
                    case 'floor':
                        this.drawFloor(coord.x, coord.y);
                        break;
                    case 'stairway':
                        this.drawStairway(coord.x, coord.y);
                        break;
                }
            }
        }

        // Background walls
        for(var cur_clm=0; cur_clm<60; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {
                if (this.map[cur_row][cur_clm]['obj'] == undefined) {
                    // console.log(cur_row, cur_clm);
                }

                if (this.map[cur_row][cur_clm]['obj'] == 'wall') {
                    let coord = this.ConvertToCoord(cur_clm, cur_row);
                    if ( !this.drawArea(coord) ) {
                        continue;
                    }

                    // if ( Math.abs(cur_row - player_y) < 4 && Math.abs(cur_clm - player_x) < 4 ) {
                    let diff_x = cur_clm - player_x;
                    let diff_y = cur_row - player_y;
                    if (cur_clm >= player_x && cur_row >= player_y && diff_y < 2 && diff_x<2) {
                        this.ctx.globalAlpha = 0.1;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 4 && diff_x<4) {
                        this.ctx.globalAlpha = 0.3;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 6 && diff_x<6) {
                        this.ctx.globalAlpha = 0.6;
                    }
                    else if (cur_clm >= player_x && cur_row >= player_y && diff_y < 7 && diff_x<7) {
                        this.ctx.globalAlpha = 0.8;
                    }
                    this.drawWall(coord.x, coord.y);
                    this.ctx.globalAlpha = 1;
                }

                if (cur_row==player_y && cur_clm==player_x) {
                    this.drawPlayer(player_x, player_y, this.wid, this.hei, player_dir);
                }


                for(var key in monsters) {
                    if (monsters[key].x==cur_clm && monsters[key].y==cur_row) {
                        this.drawPlayer(monsters[key].x, monsters[key].y, this.wid, this.hei, null);
                    }
                }

                if (cur_row==monster_y && cur_clm==monster_x) {
                    this.drawMonster(monster_x, monster_y, this.wid, this.hei);
                }

            }
        }
    }

    drawMap() {
        this.drawMap_background();
    }

    drawPointer() {
        tileX = Math.round((this.mouse_x - this.draw_start_x ) / this.cell_width + (this.mouse_y-this.draw_start_y) / this.cell_height);
        tileY = Math.round((this.mouse_y - this.draw_start_y) / this.cell_height - (this.mouse_x-this.draw_start_x) / this.cell_width);

        let coord = this.ConvertToCoord(tileX, tileY);

        if (tileX > player_x || tileY < player_y) {
            player_dir = 'r'
        }
        else {
            player_dir = 'l'
        }

        this.drawRhomb(coord.x, coord.y);
        this.ctx.font = "15px Courier";
        this.ctx.fillStyle = 'white';

        if (tileY < 30 && tileY >= 0 && tileX <= 60 && tileX >= 0) {
            if (this.map[tileY][tileX]) {
                this.ctx.fillText(this.map[tileY][tileX]['obj'], coord.x+20, coord.y);
            }
        }
        else if (tileY == player_y && tileX == player_x) {
            this.ctx.fillText("Player", coord.x+20, coord.y);
        }
    }

    collision(x, y) {
        if (this.map[y][x]['obj'] == 'wall' ) {
            return true
        }
        return false
    }

}

class Creature {
    constructor(name, x, y, health) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.dir = 'r'
        health = 100;
    }
}


document.addEventListener('DOMContentLoaded', function() {

    var stage = new Stage()

    // MAIN LOOP //

    // var FPS = 20;

    function mainLoop() {
        if (stage.new_draw_start_x < stage.draw_start_x) {
            stage.draw_start_x = stage.draw_start_x - stage.screen_step_x;
        }
        else if (stage.new_draw_start_x > stage.draw_start_x) {
            stage.draw_start_x = stage.draw_start_x + stage.screen_step_x;
        }
        if (stage.new_draw_start_y < stage.draw_start_y) {
            stage.draw_start_y = stage.draw_start_y - stage.screen_step_y;
        }
        if (stage.new_draw_start_y > stage.draw_start_y) {
            stage.draw_start_y = stage.draw_start_y + stage.screen_step_y;
        }
        stage.ctx.clearRect(0, 0, 1800, 900); // clearing anything drawn on canvas
        stage.ctx.fillStyle = "black";
        stage.ctx.fillRect(0, 0, stage.canvas.width, stage.canvas.height);
        if (stage.map.length) {
            stage.drawMap();
            stage.drawPointer();
        }
        requestAnimationFrame(mainLoop);
    }
    requestAnimationFrame(mainLoop);

    // WEB SOCKETS //

    // Correctly decide between ws:// and wss://
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var ws_path = ws_scheme + '://' + window.location.host + "/stream/";
    stage.showMessage("Connecting to " + ws_path)
    var socket = new ReconnectingWebSocket(ws_path);

    socket.onopen = function () {
        socket.send(JSON.stringify({
            "command": "join",
            "room": stage.canvas.dataset.gameId
        }));
        stage.showMessage("Connected")
    }
    socket.onclose = function () {
        stage.showMessage("Disconnected")
    }
    socket.onmessage = function (message) {  // Handle incoming messages

        var data = JSON.parse(message.data);

        if (data.error) {
            stage.showMessage("data.error")
            return;
        }

        if (data.join) {

            stage.showMessage("Joining room " + data.join)

            stage.map = data.message.field;
            username = data.message.username;
            player_x = data.message.start_x;
            player_y = data.message.start_y;

            stage.draw_start_x = stage.draw_center_x - ( (player_x) * stage.cell_width/2 ) + ( (player_y) * stage.cell_width/2 );
            stage.draw_start_y = stage.draw_center_y - ( (player_y) * stage.cell_height/2 ) - ( (player_x) * stage.cell_height/2 );
            stage.new_draw_start_x = stage.draw_start_x;
            stage.new_draw_start_y = stage.draw_start_y;

        } else if (data.leave) {

            stage.showMessage("Leaving game " + data.leave)
            stage.map = []

        } else if (data.message || data.msg_type != 'message') {

            switch (data.msg_type) {

                case 'message':
                    if (data.message.resp_type == 'message') {
                        stage.showMessage("<span class='msg-user'>" + data.username + ": </span>" +
                                    "<span class='msg-body'>" + data.message.text + "</span>")
                    }
                    else {
                        if (data.username == username) {
                            if (stage.collision(data.message.new_x, data.message.new_y)){
                                return;
                            }
                            player_x = data.message.new_x;
                            player_y = data.message.new_y;
                            stage.new_draw_start_x = stage.draw_center_x - ( (player_x) * stage.cell_width/2 )  + ( (player_y) * stage.cell_width/2 );
                            stage.new_draw_start_y = stage.draw_center_y - ( (player_y) * stage.cell_height/2 ) - ( (player_x) * stage.cell_height/2 );
                        }
                        else {
                            monsters[data.username] = {'x': data.message.new_x, 'y': data.message.new_y};
                        }
                    }
                    break

                case 'warning':
                    stage.showMessage(data.message)
                    break;

                case 'alert':
                    stage.showMessage(data.message)
                    break;

                case 'muted':
                    stage.showMessage(data.message)
                    break;

                case 'enter':
                    monsters[data.username] = {'x': data.x, 'y': data.y };
                    stage.showMessage(data.username + " joined the room")
                    break;

                case 'leave':
                    delete monsters[data.username]
                    stage.showMessage(data.username + " left the room")
                    break;

                default:
                    stage.showMessage("Unsupported message type")
                    return;

            }

        } else {

            stage.showMessage("Cannot handle message")

        }
    };

    // EVENTS //

    stage.canvas.addEventListener('click', function(evnt) {
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

    $("#chat-form").on("submit", function (event) {  // send a message
        event.preventDefault()
        socket.send(JSON.stringify({
            "command": "send",
            "room": stage.canvas.dataset.gameId,
            "message": $("#chat-form").find("input").val()
        }));
        $("#chat-form").find("input").val("");
        return false;
    });

    $('#button-quit').on('click', function(event) { // Leave room
        event.preventDefault()
        socket.send(JSON.stringify({
            "command": "leave",
            "room": stage.canvas.dataset.gameId
        }));
        window.location = $(event.target).data('url')
    });

    stage.canvas.addEventListener('mousemove', function(evnt) {
        var rect = stage.canvas.getBoundingClientRect();
        stage.mouse_x = evnt.clientX - rect.left;
        stage.mouse_y = evnt.clientY - rect.top;
    }, false);

    stage.canvas.addEventListener("keydown", function(event) {
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
                "room": stage.gameId,
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

})

