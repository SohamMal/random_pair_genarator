var boys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25, 26, 27, 28, 29, 30];
var girls=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25, 26, 27, 28, 29, 30];
var btn=document.querySelector(".btn");

btn.addEventListener("click", function(){
    var boynumber=Math.floor(Math.random()*boys.length);
    var girlnumber=Math.floor(Math.random()*girls.length);
    if(boys[boynumber]===undefined){
        document.querySelector(".display-text").textContent="End of the list";
    }
    else{
        var text="Pair - \n" + boys[boynumber] + " and "+ girls[girlnumber];
        boys.splice(boynumber, 1);
        girls.splice(girlnumber, 1);
        document.querySelector(".display-text").textContent=text;
    }
})
