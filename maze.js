"use strict";
var win = true;


window.onload = function(){
    $("end").onmouseover = gameEnd;
    $("start").onclick = gameReset;
    //$("start").onclick = antiCheat;
    var walls = $$("div#maze div.boundary");
    for (var x=0;x < walls.length;x++){
        walls[x].onmouseover = mouseOver;
    }
};

function mouseOver(){
    win = false;
    var walls = $$("div#maze div.boundary");
    for(var x=0;x < walls.length;x++){
        walls[x].addClassName("youlose");
    }
    gameEnd();
}

function gameEnd(){
    if (win){
        $("status").innerHTML=("CONGRATULATIONS. YOU WON!!!!");
    }else{
        $("status").innerHTML=("You Lose. Try Again");
    }
}

function gameReset(){
    win = true;
    $("status").innerHTML=("Find The End");
    var walls = $$("div#maze div.boundary");
    for(var x=0;x < walls.length;x++){
        walls[x].removeClassName("youlose");
    }
}

/*
function antiCheat(){
    var walls = $("div#maze");
    for(x in walls){
        if (!(walls[x].mouseover)){
            win = false;
            mouseOver();
        }
    }
}*/