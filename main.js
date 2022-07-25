


function startClassification() {
  
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor() + 1;
    random_number_g = Math.floor() + 1;
    random_number_b = Math.floor() + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

   
  }
}


https://teachablemachine.withgoogle.com/models/SqDdEOe0D/