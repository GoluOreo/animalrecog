
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZQBi4ytam/", modelLoaded)





prediction_1 = '';
prediction_2 = '';

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});





console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZQBi4ytam/model.json', modelLoaded)

function modelLoaded() {
    console.log('model loaded');
}

function startClassification() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        document.getElementById("prediction").style.color = rgb(r,g,b)
        document.getElementById("prediction").innerHTML = results[0].label
        prediction_1 = results[0].label;
        speak();
        if(results[0].label == "Cat Meowing") {
            document.getElementById("display").src = "cat.png";
        }
        if(results[0].label == "Cow Mooing") {
            document.getElementById("display").innerHTML = "cow.png";
        }
        if(results[0].label == "Dog Barking") {
            document.getElementById("display").innerHTML = "doge.png"
        }
        if(results[0].label == "Background Noise") {
            document.getElementById("display").innerHTML = "listen.gif"
        }
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = 'The first prediction is ' + prediction_1;
    speak_data_2 = 'The second prediction is ' + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}