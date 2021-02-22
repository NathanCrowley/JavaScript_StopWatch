var x;
function startTimer(){
    var d = new Date();
    var start = d.getTime();
    console.log(start);
    x = setInterval(function(){myTimer(start)},1000);
}

function myTimer(start){
    var d = new Date();
    var time = d.getTime();
    var timepassed = time - start;
    var minutes = ((timepassed/1000)/60);
    var seconds = ((timepassed/1000)%60);
    document.getElementById("minutes").innerHTML = minutes.toString().substring(0,2).replace(".","");
    document.getElementById("seconds").innerHTML = seconds.toString().substring(0,2).replace(".","");
    //console.log("s",seconds.toString().substring(0,2));
    //console.log("m",minutes.toString().substring(0,2).replace(".",""),"s:",seconds.toString().substring(0,2).replace(".",""));
    //console.log("seconds",seconds.toPrecision(1));
}

function reset(){
    location.reload();
}

function stopTimer(){
    clearInterval(x);
}