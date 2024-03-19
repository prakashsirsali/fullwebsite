let sound = document.getElementById("sound");
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    sound.play();
});
function cal_btn(v){
    sound.play();
    let value=document.getElementById('display');
    display.value += v;
}
function onclear(){
    sound.play();
    var input=document.getElementById('display');
    input.value='';
}
function onback(){
    sound.play();
    let input = document.getElementById('display');
    input.value = input.value.slice(0,-1);
}
function Onequal(){
    sound.play();
    let input = document.getElementById('display');
    input.value = eval(input.value);
}
function persentage(){
    sound.play();
    let input = document.getElementById('display');
    input.value = input.value*(1/100);
}
function Onsquare(){
    sound.play();
    let input = document.getElementById('display');
    input.value = input.value ** 2;
}
function qubesquare(){
    sound.play();
    let input = document.getElementById('display');
    input.value = input.value ** 3;
}
function oninverse(){
    sound.play();
    let input = document.getElementById('display');
    input.value = 1/input.value;
}
function squareroot(){
    sound.play();
    let input = document.getElementById('display');
    input.value = Math.sqrt(input.value)
}