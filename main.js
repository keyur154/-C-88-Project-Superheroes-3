var canvas=new fabric.Canvas("myCanvas");

block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
block_object="";
player_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top: player_y, left: player_x});
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img){
        block_object=Img;

        block_object.scaleToWidth(150);
        block_object.scaleToHeight(140);
        block_object.set({top: player_y, left: player_x});
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed=="80") {
        console.log("shift + p pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current-width").innerHTML=block_image_width;
        document.getElementById("current-height").innerHTML=block_image_height;
    }

    if (e.shiftKey && keyPressed=="77") {
        console.log("shift + m pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current-width").innerHTML=block_image_width;
        document.getElementById("current-height").innerHTML=block_image_height;
    }

    if (keyPressed=="70") {
        new_image("ironman_face.png");
        console.log("F key pressed");
    }

    if (keyPressed=="66") {
        new_image("spiderman_body.png");
        console.log("B key pressed");
    }

    if (keyPressed=="76") {
        new_image("hulk_legs.png");
        console.log("L key pressed");
    }

    if (keyPressed=="82") {
        new_image("thor_right_hand.png");
        console.log("R key pressed");
    }

    if (keyPressed=="72") {
        new_image("captain_america_left_hand.png");
        console.log("H key pressed");
    }

    if (keyPressed=="38") {
        up();
        console.log("Up arrow key pressed");
    }

    if (keyPressed=="40") {
        down();
        console.log("Down arrow key pressed");
    }

    if (keyPressed=="37") {
        left();
        console.log("Left arrow key pressed");
    }

    if (keyPressed=="39") {
        right();
        console.log("Right arrow key pressed");
    }
}

function up() {
    if (player_y>=0) {
        player_y=player_y-block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("When Up arrow is pressed, X = " + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y<=500) {
        player_y=player_y+block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("When Up arrow is pressed, X = " + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x>0) {
        player_x=player_x-block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When Up arrow is pressed, X = " + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x<=800) {
        player_x=player_x+block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When Up arrow is pressed, X = " + player_x + "Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}