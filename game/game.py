from django.conf import settings
import redis
import random
import time


def get_redis():
    POOL = redis.ConnectionPool(host=settings.REDIS_HOST, decode_responses=True, port=settings.REDIS_PORT, db=0)
    return redis.StrictRedis(connection_pool=POOL)
    # return redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=0)

def print_field(field):
    str_field = ''
    for row in field:
        str_field += ''.join(row) + '\n'
    print(str_field)
    print(60 * '-')
    time.sleep(0.01)


def generate_field(debug=False):
    height = 30
    width = 60
    field = []
    floor = {'obj': 'floor', 'alpha': 1}
    wall = {'obj': 'wall', 'alpha': 1}
    none = {'obj': 'none', 'alpha': 1}
    stairway = {'obj': 'stairway', 'alpha': 1}
    if debug:
        floor = '.'
        wall = '#'
        none = ' '
        stairway = '>'
    max_count = 12
    max_size = 5
    level_start_x = startx = random.choice(range(2, width - 1))
    level_start_y = starty = random.choice(range(2, height - 1))
    cells = [none for x in range(width)]
    field = [cells[:] for y in range(height)]  # fill with None

    room_count = random.choice(range(2, max_count))
    for i in range(room_count):
        # room
        room_size = random.choice(range(2, max_size))
        for curx in range(startx - room_size, startx + room_size):
            if curx < 1 or curx > width - 2:
                continue
            for cury in range(starty - room_size, starty + room_size):
                if cury < 1 or cury > height - 2:
                    continue
                field[cury][curx] = floor

                if debug:
                    print_field(field)

        # corridor
        if i + 1 != room_count:
            oldx = startx
            oldy = starty
            startx = random.choice(range(2, width - 1))
            starty = random.choice(range(2, height - 1))
            while oldx != startx:
                oldx = oldx - 1 if oldx > startx else oldx + 1
                field[oldy][oldx] = floor

                if debug:
                    print_field(field)

            while oldy != starty:
                oldy = oldy - 1 if oldy > starty else oldy + 1
                field[oldy][oldx] = floor
                if debug:
                    print_field(field)

    # walls around floor
    for check_x in range(width):
        for check_y in range(height):
            for tmp_x in range(check_x - 1, check_x + 2):
                for tmp_y in range(check_y - 1, check_y + 2):
                    if field[check_y][check_x] == floor and field[tmp_y][tmp_x] == none:
                        field[tmp_y][tmp_x] = wall
                        if debug:
                            print_field(field)

    field[level_start_y][level_start_x] = stairway  # stairway in the first room
    if debug:
        print_field(field)
    field[starty][startx] = stairway  # stairway in the last room
    if debug:
        print_field(field)

    if debug:
        return 'done'

    return field, startx, starty


def move(msg):
    new_x = msg['old_x']
    new_y = msg['old_y']
    if msg['new_x'] > msg['old_x']:
        new_x += 1
    elif msg['new_x'] < msg['old_x']:
        new_x -= 1
    if msg['new_y'] > msg['old_y']:
        new_y += 1
    elif msg['new_y'] < msg['old_y']:
        new_y -= 1

    return (new_x, new_y)

# class Level:
#     startx = 0
#     starty = 0
#     endx = 0
#     endy = 0
#     level = 0

#     def __init__(self, level, height=16, width=80, floor='.', wall='#', field=[]):
#         self.height = height
#         self.width = width
#         self.floor = floor
#         self.wall = wall
#         self.field = self.create()
#         self.level = level
#         print('created level: %s' % level)
#         print('\n'.join(map(''.join, self.field)))
#     if cmd == 68 and not collision(x + 1, y - 1):
#         x += 1;
#         y -= 1;
#         player_dir = 'r';

#     if(command === 68 && player_x<=1200 && !collision(player_x+1, player_y-1)) {
#             player_x = player_x+1;
#             player_y = player_y-1;
#             player_dir = 'r';
#             // draw_start_x = draw_start_x-cell_width;

#             new_draw_start_x = new_draw_start_x-cell_width;

#         } // right
#         else if(key === 69 && x>0 && !collision(player_x, player_y-1)) {
#             player_y = player_y-1;
#             player_dir = 'r';
#             new_draw_start_x = new_draw_start_x-cell_width/2;
#             new_draw_start_y = new_draw_start_y+cell_height/2;
#         } // right up
#         else if(key === 67 && x>0 && !collision(player_x+1, player_y)) {
#             player_x = player_x+1;
#             player_dir = 'r';
#             new_draw_start_x = new_draw_start_x-cell_width/2;
#             new_draw_start_y = new_draw_start_y-cell_height/2;
#         } // rigth down
#         else if(key === 65 && x>0 && !collision(player_x-1, player_y+1)) {
#             player_x = player_x-1;
#             player_y = player_y+1;
#             player_dir = 'l';
#             new_draw_start_x = new_draw_start_x+cell_width;
#         } // left
#         else if(key === 81 && player_x>0 && !collision(player_x-1, player_y)) {
#             player_x = player_x-1;
#             player_dir = 'l';
#             new_draw_start_x = new_draw_start_x+cell_width/2;
#             new_draw_start_y = new_draw_start_y+cell_height/2;
#         } // left up
#         else if(key === 87 && y>0 && !collision(player_x-1, player_y-1)) {
#             player_x = player_x-1;
#             player_y = player_y-1;
#             new_draw_start_y = new_draw_start_y+cell_height;
#         } // up
#         else if(key === 88 && y<=600 && !collision(player_x+1, player_y+1)) {
#             player_x = player_x+1;
#             player_y = player_y+1;
#             new_draw_start_y = new_draw_start_y-cell_height;
#         } // down
#         else if(key === 90 && player_x>0 && !collision(player_x, player_y+1)) {
#             player_y = player_y+1;
#             player_dir = 'l';
#             new_draw_start_x = new_draw_start_x+cell_width/2;
#             new_draw_start_y = new_draw_start_y-cell_height/2;
#         } // left down



