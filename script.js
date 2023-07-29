outcome = [0, 1, 2, 3, 4, 6,"W"];

var ball = document.querySelectorAll(".ball");
var team1S = document.querySelector("#team1-score");
var team1W = document.querySelector("#team1-wicket");
var team2S = document.querySelector("#team2-score");
var team2W = document.querySelector("#team2-wicket");
var balls = 0;
var team1 = 0;
var team2 = 0;
var team1w = 0;
var team2w = 0;
let batsound = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3")
let crowd = new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3")

function scoreupdate() {
    let ran = Math.floor(Math.random()*6+1)
    let s = outcome[ran]
    if (balls<6){
        batsound.play()
        if (s=="W"){
            team1w+=1
        }else{
            team1+=s
        }
        team1update(s)
        balls += 1
    }else if(balls >= 12){
        crowd.play()
         winning(team1,team2)
    }else{
        batsound.play()
        if (s=="W"){
            team2w+=1
        }else{
            team2+=s
        }
        team2update(s)
        balls += 1
    }
}

function team1update(s){
    ball[balls].innerText = s
    team1S.innerText = team1
    team1W.innerText = team1w
}

function team2update(s){
    ball[balls].innerText = s
    team2S.innerText = team2
    team2W.innerText = team2w
}

function winning(t1,t2){
    if (t1>t2){
        alert("IND wins!!")
    }else if (t1<t2){
        alert("PAK wins!!")
    }else{
        alert("It's a draw")
    }  
}

function reload(){
   window.location.reload()
}