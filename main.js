function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tintcolour = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tintcolour);
}

function take_snapshot(){
    save("Filter_Image.png");
}

function filter_tint(){
    tintcolour = document.getElementById("colour_name").value;
}