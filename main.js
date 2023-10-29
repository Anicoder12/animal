function identify()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jj1nZ9h79/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
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
r = Math.floor(Math.random()*255) + 1;
g = Math.floor(Math.random()*255) + 1;
b = Math.floor(Math.random()*255) + 1;

document.getElementById("numbers").innerHTML = "I can hear - " + results[0].label;
document.getElementById("numbers").style.color = "rgb(" + r + ", " + g + "," + r + ")";
    

    if(results[0].label == "Dog Barking")
    {
        document.getElementById("photo").src = "dog.png";
        document.getElementById("audio_played").innerHTML = "Dog is barking";
    }

    if(results[0].label == "Cat Meowing")
    {
       document.getElementById("photo").src = "cat.png"; 
        document.getElementById("audio_played").innerHTML = "Cat is meowing";
    }

    if(results[0].label == "Lion Roaring")
    {
        document.getElementById("photo").src = "download.jpg"; 
        document.getElementById("audio_played").innerHTML = "Lion is roaring";
    }

    if(results[0].label == "Cow Mooing")
    {
        document.getElementById("photo").src = "cow.jpg"; 
        document.getElementById("audio_played").innerHTML = "Cow is mooing";
    }

    }

}