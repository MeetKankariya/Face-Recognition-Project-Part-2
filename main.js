
Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:85

})

camera=document.getElementById("camera")
Webcam.attach(camera)

function capture()
{
    Webcam.snap(function(xy){
     document.getElementById("result").innerHTML='<img id="Cap" src="'+xy+'">'  
    })

    
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HuXRGk0O7/model.json',model_Loaded)