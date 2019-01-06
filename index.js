window.onload = function() {

    var stage       = document.getElementById('cnvs')
    var ctx         = stage.getContext('2d')
    var ctx_titles  = stage.getContext('2d')
    var ctx_text    = stage.getContext('2d')

    var map = [
    '                                  ###############          #',
    '                                  #.............#           ',
    '                                  #..########...#           ',
    '      ######           ############..#......#...#           ',
    '      #....#           #.............#......#####   ########',
    '      #....#           #.####..#######.........######......#',
    '      #....#############....#..#################...........#',
    '      #..................####....................###########',
    '      ############.#######  ######################          ',
    '                 #.#                                        ',
    '                 #.#                                        ',
    '                 #.#                                        ',
    '                 #.#                                        ',
    '                 #.#############         ############       ',
    '                 #.............#         #..........#       ',
    '                 #.............#         #.########.#       ',
    '                 #.............#         #.#      #.#       ',
    '                ##.............#         #.#      #.#       ',
    '                #...#########..###########.#      #.#       ',
    '                #...#       #..............#      #.#       ',
    '                #...#       ################      #.#       ',
    '                #...#                             #.#       ',
    '#################...#    ##########               #.#       ',
    '#...................#    #........#               #.#       ',
    '#..##################    #........#    ############.######  ',
    '#..#.....#               #........#    #.................#  ',
    '#..#.....#################........#    #.................#  ',
    '#.................................#    ###################  ',
    '####################..............#                         ',
    '#                  ################                        #'
    ]

    var cell_height = 20;
    var cell_width = 40;

    var player_x = 8;
    var player_y = 5;
    
    var y = 5*cell_height,
        x = (600 - 8*cell_width) + 5*cell_width, // Start positions 
        wid = 20, 
        hei = 30; 

    var img_player = new Image();
    img_player.src = 'rsz_knight.png';
    var img_wall = new Image();
    img_wall.src = 'wall.png';
    var img_floor = new Image();
    img_floor.src = 'floor.png';

    stage.width  = stage.offsetWidth;
    stage.height = stage.offsetHeight;
    
    function ConvertToCoord(x, y) {
        return {
            x: 600 + ((x - y) * cell_width/2),
            y: (y + x) * cell_height/2
        }
    }

    function drawPlayer(x, y, wid, hei) {
        coords = ConvertToCoord(x, y)
        ctx.drawImage(img_player, coords.x-cell_width/4, coords.y-cell_height+3);
        // drawRhomb(coords.x, coords.y);
    }

    function drawRhomb(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cell_width / 2, y + cell_height / 2);
        ctx.lineTo(x, y + cell_height);
        ctx.lineTo(x - cell_width / 2, y + cell_height / 2);
        ctx.lineTo(x, y);
        // ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }

    function drawWall(x, y) {
        ctx.drawImage(img_wall, x-22, y-cell_height-16);
    }

    function drawFloor(x, y) {
        ctx.drawImage(img_floor, x-23, y);
    }

    function drawMap_background() {

        // Floor
        for(var cur_clm=0; cur_clm<61; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {

                let cell_x = (600 + cur_clm * cell_width / 2) - cur_row * cell_width / 2;
                let cell_y = cur_clm * cell_height / 2 + cur_row * cell_height / 2;

                if (map[cur_row][cur_clm] == '.') {
                    coord = ConvertToCoord(cur_clm, cur_row);
                    drawFloor(coord.x, coord.y); 
                }
            }
        }

        // Background walls
        for(var cur_clm=0; cur_clm<61; cur_clm++) {
            for(var cur_row=0; cur_row<30; cur_row++) {
                if (map[cur_row][cur_clm] == '#') {
                    coord = ConvertToCoord(cur_clm, cur_row);
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
                    drawPlayer(player_x, player_y, wid, hei);
                }
            }
        }

    }


    function drawMap() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);
        drawMap_background();
    }

    function collision(x, y) {
        if (map[y][x] != '.') {
            return true
        }
        return false

    }

    document.onkeydown = function(event) {
        var key = event.keyCode; //Key code of key pressed
        // console.log(key);
        
        if(key === 68 && player_x<=1200 && !collision(player_x+1, player_y-1)) { 
            player_x = player_x+1;
            player_y = player_y-1;
        } // right
        else if(key === 69 && x>0 && !collision(player_x, player_y-1)) { 
            player_y = player_y-1;
        } // right up
        else if(key === 67 && x>0 && !collision(player_x+1, player_y)) { 
            player_x = player_x+1; 
        } // rigth down
        else if(key === 65 && x>0 && !collision(player_x-1, player_y+1)) { 
            player_x = player_x-1; 
            player_y = player_y+1;
        } // left
        else if(key === 81 && player_x>0 && !collision(player_x-1, player_y)) {
            player_x = player_x-1;
        } // left up
        else if(key === 87 && y>0 && !collision(player_x-1, player_y-1)) { 
            player_x = player_x-1;
            player_y = player_y-1;
        } // up
        else if(key === 88 && y<=600 && !collision(player_x+1, player_y+1)) {
            player_x = player_x+1;
            player_y = player_y+1; 
        } // down
        else if(key === 90 && player_x>0 && !collision(player_x, player_y+1)) {
            player_y = player_y+1; 
        } // left down
        
        ctx.clearRect(0, 0, 1800, 900); //clearing anything drawn on canvas
      
        drawMap()

    }


    stage.addEventListener('mousemove', function(evnt) {
 
        var rect = stage.getBoundingClientRect();
        x = evnt.clientX - rect.left;
        y = evnt.clientY - rect.top;

        tileX = Math.round((x - 600 ) / cell_width + y / cell_height);
        tileY = Math.round(y / cell_height - (x-600) / cell_width);

        ctx.clearRect(0, 0, 1800, 900); //clearing anything drawn on canvas

        drawMap()

        coord = ConvertToCoord(tileX, tileY);
        drawRhomb(coord.x, coord.y);

        ctx.font = "15px Courier";
        ctx.fillStyle = 'white';

        if (tileY < 30 && tileY >= 0 && tileX <= 60 && tileX >= 0 && map[tileY][tileX] == '#') {
            ctx.fillText("Wall", coord.x+20, coord.y);
        }
        else if (tileY == player_y && tileX == player_x) {
            ctx.fillText("Player", coord.x+20, coord.y);
        }

      }, false);
}



