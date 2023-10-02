img = ""
object_status = ""

function preload()
{
    img = loadImage("TV+AC.png");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw()
{
}

function modelLoaded()
{
    console.log("Model loaded!");
    object_status = true

    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error)
    }
    console.log(results)
}
