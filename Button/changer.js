// JavaScript File
var btn1 = document.getElementById("button1")
var inpt1 = document.getElementById("input1")
var header1 = document.getElementById("theHeader")

btn1.addEventListener("click",function(){
    var newColor = inpt1.value;
    header1.style.color = newColor;
    btn1.style.color = newColor;
})