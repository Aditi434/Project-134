img="";
objects=[];
status = "";


function preload()
{
    audio = createAudio("beep_beep.mp3");
}
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380)
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects...";
}
function modelLoaded()
{
    console.log("model has been loaded");
    status =true;
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects=results;
    }
}
function draw()
{
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
        objectDetector.detect(video, gotResults);
      
        {
            document.getElementById("status").innerHTML="Status: Baby Found";
           
            fill("#FF0000");
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            audio.stop();
        }
    }
    else{
        document.getElementById("status").innerHTML="Status: Baby not Found";
        audio.play();
    }
}