let h1 = document.querySelector("h1");
let result = document.getElementById("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let r,p,s = false;
let comp;
let iter = 0;
let points = 0;

function checkCompMove(){
    comp = Math.round(Math.random()*2);
    console.log(comp);
    // 0 = rock
    // 1 = paper
    // 2 = scissor
}
checkCompMove();
rock.addEventListener("click", function(){
    if(iter < 5){
        iter += 1;
        if (comp == 0){
            result.innerText = "Draw";
            checkCompMove();
        }
        else if (comp == 1){
            result.innerText = "Lose";
            checkCompMove();
        }
        else{
            result.innerText = "Win";
            points += 1;
            checkCompMove();
        }
    }
    else{
        result.innerText = `Game Over\n Points: ${points} out of 5`;
    }
});
paper.addEventListener("click",function(){
    if(iter < 5){
        iter += 1;
        if (comp == 0){
            result.innerText = "Win";
            points += 1;
            checkCompMove();
        }
        else if (comp == 1){
            result.innerText = "Draw";
            checkCompMove();
        }
        else{
            result.innerText = "Lose";
            checkCompMove();
        }
    }
    else{
        result.innerText = `Game Over\n Points: ${points} out of 5`;
    }
});
scissor.addEventListener("click", function(){
    if(iter < 5){
        iter += 1;
        if (comp == 0){
            result.innerText = "Lose";
            checkCompMove();
        }
        else if (comp == 1){
            result.innerText = "Win";
            points += 1;
            checkCompMove();
        }
        else{
            result.innerText = "Draw";
            checkCompMove();
        }
    }
    else{
        result.innerText = `Game Over\n Points: ${points} out of 5`;
    }
});





