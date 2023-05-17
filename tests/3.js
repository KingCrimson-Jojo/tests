function checkAnswers() {
let q1 = document.querySelector('input[name="q1"]:checked').value;
let q2 = document.querySelector('input[name="q2"]:checked').value;
let q3 = document.querySelector('input[name="q3"]:checked').value;
let score = 0;


    if (q1 === "c") {
    score++;
}


    if (q2 === "a") {
    score++;
}


    if (q3 === "b"){
    score++;
}


    document.getElementById("result").innerHTML = "Вы набрали " + score + " из 3 баллов.";
    
}