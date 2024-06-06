
var you;
var yourScore = 20;
var opponent;
var opponentScore = 20;

var myPokemon = ["charmander", "dig", "pikachu","squirtle","vulpix"];
var enemyPokemon = ["enteiFire","onixGround","electivireElectric","tentacruelWater","glalieIce"]




window.onload = function() {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement("img");     // This creates a new image element and assigns it to the variable choice.
        choice.id = myPokemon[i];                       // This sets the id attribute of the image element
        choice.src = myPokemon[i] + ".png";              
        choice.addEventListener("click", selectChoice);   //image element that will call the selectChoice function when the image is clicked.
        document.getElementById("choices").append(choice);  //this appends the newly created image element to an existing element. This makes the image visible on the webpage.
        choice.addEventListener("click", winner);
        }
}


function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    opponent = enemyPokemon[Math.floor(Math.random() * 5)]; 
    document.getElementById("opponent-choice").src = opponent + ".png";    
    const resultElement = document.getElementById("result");
    const enemyLife = document.getElementById("opponent-score");
    const Deduction = document.getElementById("minusEnemy");
    const meLife = document.getElementById("your-score");
    const meDeduction = document.getElementById("minusMe");
 
    
  //check for winner
  // electric > water > fire > ice > ground > electric
      //charmander strong against and weakness
        if (you == "charmander") {
            if (opponent == "glalieIce") {
                opponentScore -= 2;
                enemyLife.style.color = "red";
                meLife.style.color = "blue";
                resultElement.innerText = "Charmander is a fire type pokemon strong against an Ice type pokemon";
                Deduction.innerText = "-2";
                Deduction.style.color = "red";
                meDeduction.innerText = "0";
                meDeduction.style.color = "blue"
            }
            else if (opponent == "tentacruelWater") {
                yourScore -= 2;
                enemyLife.style.color ="blue";
                meLife.style.color = "red";
                resultElement.innerText = "Charmander is a fire type pokemon weakness is an Ice type pokemon";
                Deduction.innerText = "0";
                Deduction.style.color = "blue"
                meDeduction.innerText = "-2";
                meDeduction.style.color = "red";
            }
            else if (opponent == "enteiFire") {
                enemyLife.style.color ="blue";
                meLife.style.color = "blue";
                resultElement.innerText = "Both pokemon are fire type no damage to each other";
                Deduction.innerText = "0";
                Deduction.style.color = "blue"
                meDeduction.innerText = "0";
                meDeduction.style.color = "blue";
            }
            else if (opponent == "onixGround") {
            yourScore -= 1;
            opponentScore -= 1;
                enemyLife.style.color ="red";
                meLife.style.color = "red";
                resultElement.innerText = "Both pokemon are strong both will take 1 damage";
                Deduction.innerText = "-1";
                Deduction.style.color = "red"
                meDeduction.innerText = "-1";
                meDeduction.style.color = "red";
            }
            else if (opponent == "electivireElectric") {
            yourScore -= 1;
            opponentScore -= 1;
                enemyLife.style.color ="red";
                meLife.style.color = "red";
                resultElement.innerText = "Both pokemon are strong both will take 1 damage";
                Deduction.innerText = "-1";
                Deduction.style.color = "red"
                meDeduction.innerText = "-1";
                meDeduction.style.color = "red";
          }
        }
        //dig strong against and weakness
        else if (you == "dig") {
            if (opponent == "electivireElectric") {
                opponentScore -= 2;
                enemyLife.style.color ="red";
                meLife.style.color = "blue";
                resultElement.innerText = "Dig is a ground type pokemon strong against an electric type pokemon";
                Deduction.innerText = "-2";
                Deduction.style.color = "red"
                meDeduction.innerText = "0";
                meDeduction.style.color = "blue";
            }
            else if (opponent == "glalieIce") {
                yourScore -= 2;
                enemyLife.style.color ="blue";
                meLife.style.color = "red";
                resultElement.innerText = "Dig is a ground type pokemon weakness is an Ice type pokemon";
                Deduction.innerText = "0";
                Deduction.style.color = "blue"
                meDeduction.innerText = "-2";
                meDeduction.style.color = "red";
            }
            else if (opponent == "onixGround") {
                enemyLife.style.color ="blue";
                meLife.style.color = "blue";
                resultElement.innerText = "Both pokemon are ground type no damage to each other";
                Deduction.innerText = "0";
                Deduction.style.color = "blue"
                meDeduction.innerText = "0";
                meDeduction.style.color = "blue";
            }
            else if (opponent == "tentacruelWater") {
            yourScore -= 1;
            opponentScore -= 1;
                enemyLife.style.color ="red";
                meLife.style.color = "red";
                resultElement.innerText = "Both pokemon are strong both will take 1 damage";
                Deduction.innerText = "-1";
                Deduction.style.color = "red"
                meDeduction.innerText = "-1";
                meDeduction.style.color = "red";
            }
            else if (opponent == "enteiFire") {
            yourScore -= 1;
            opponentScore -= 1;
                enemyLife.style.color ="red";
                meLife.style.color = "red";
                resultElement.innerText = "Both pokemon are strong both will take 1 damage";
                Deduction.innerText = "-1";
                Deduction.style.color = "red"
                meDeduction.innerText = "-1";
                meDeduction.style.color = "red";
          }
        }
        //pikachu strong against and weakness
        else if (you == "pikachu") {
          if (opponent == "tentacruelWater") {
              opponentScore -= 2;
              enemyLife.style.color ="red";
              meLife.style.color = "blue";
              resultElement.innerText = "Pikachu is an electric type pokemon strong against water type pokemon";
              Deduction.innerText = "-2";
              Deduction.style.color = "red"
              meDeduction.innerText = "0";
              meDeduction.style.color = "blue";
          }
          else if (opponent == "onixGround") {
              yourScore -= 2;
              enemyLife.style.color ="blue";
              meLife.style.color = "red";
              resultElement.innerText = "Pikachu is an electric type pokemon weakness is a ground type pokemon";
              Deduction.innerText = "0";
              Deduction.style.color = "blue"
              meDeduction.innerText = "-2";
              meDeduction.style.color = "red";
          }
          else if (opponent == "electivireElectric") {
            enemyLife.style.color ="blue";
            meLife.style.color = "blue";
            resultElement.innerText = "Both pokemon are electric type no damage to each other";
            Deduction.innerText = "0";
            Deduction.style.color = "blue"
            meDeduction.innerText = "0";
            meDeduction.style.color = "blue";
          }
          else if (opponent == "glalieIce") {
          yourScore -= 1;
          opponentScore -= 1;
          enemyLife.style.color ="red";
          meLife.style.color = "red";
          resultElement.innerText = "Both pokemon are strong both will take 1 damage";
          Deduction.innerText = "-1";
          Deduction.style.color = "red"
          meDeduction.innerText = "-1";
          meDeduction.style.color = "red";
          }
          else if (opponent == "enteiFire") {
          yourScore -= 1;
          opponentScore -= 1;
          enemyLife.style.color ="red";
          meLife.style.color = "red";
          resultElement.innerText = "Both pokemon are strong both will take 1 damage";
          Deduction.innerText = "-1";
          Deduction.style.color = "red"
          meDeduction.innerText = "-1";
          meDeduction.style.color = "red";
        }
        }
        //squirtle strong against and weakness
        else if (you == "squirtle") {
          if (opponent == "enteiFire") {
              opponentScore -= 2;
              enemyLife.style.color ="red";
              meLife.style.color = "blue";
              resultElement.innerText = "Squirtle is a water type pokemon strong against fire type pokemon";
              Deduction.innerText = "-2";
              Deduction.style.color = "red"
              meDeduction.innerText = "0";
              meDeduction.style.color = "blue";
          }
          else if (opponent == "electivireElectric") {
              yourScore -= 2;
              enemyLife.style.color ="blue";
              meLife.style.color = "red";
              resultElement.innerText = "Squirtle is a water type pokemon weakness is an electric type pokemon ";
              Deduction.innerText = "0";
              Deduction.style.color = "blue"
              meDeduction.innerText = "-2";
              meDeduction.style.color = "red";
          }
          else if (opponent == "tentacruelWater") {
            enemyLife.style.color ="blue";
            meLife.style.color = "blue";
            resultElement.innerText = "Both pokemon are water type no damage to each other";
            Deduction.innerText = "0";
            Deduction.style.color = "blue"
            meDeduction.innerText = "0";
            meDeduction.style.color = "blue";
              
          }
          else if (opponent == "glalieIce") {
          yourScore -= 1;
          opponentScore -= 1;
          enemyLife.style.color ="red";
          meLife.style.color = "red";
          resultElement.innerText = "Both pokemon are strong both will take 1 damage";
          Deduction.innerText = "-1";
          Deduction.style.color = "red"
          meDeduction.innerText = "-1";
          meDeduction.style.color = "red";
          }
          else if (opponent == "onixGround") {
          yourScore -= 1;
          opponentScore -= 1;
          enemyLife.style.color ="red";
          meLife.style.color = "red";
          resultElement.innerText = "Both pokemon are strong both will take 1 damage";
          Deduction.innerText = "-1";
          Deduction.style.color = "red"
          meDeduction.innerText = "-1";
          meDeduction.style.color = "red";
        }
        }
        //vulpix strong against and weakness
        else if (you == "vulpix") {
          if (opponent == "onixGround") {
              opponentScore -= 2;
              enemyLife.style.color ="red";
              meLife.style.color = "blue";
              resultElement.innerText = "Vulpix is an Ice type pokemon strong against ground type pokemon";
              Deduction.innerText = "-2";
              Deduction.style.color = "red"
              meDeduction.innerText = "0";
              meDeduction.style.color = "blue";
          }
          else if (opponent == "enteiFire") {
              yourScore -= 2;    
              enemyLife.style.color ="blue";
              meLife.style.color = "red";
              resultElement.innerText = "Vulpix is an Ice type pokemon weakness is a fire type pokemon";
              Deduction.innerText = "0";
              Deduction.style.color = "blue"
              meDeduction.innerText = "-2";
              meDeduction.style.color = "red";
          }
          else if (opponent == "glalieIce") {
            enemyLife.style.color ="blue";
            meLife.style.color = "blue";
            resultElement.innerText = "Both pokemon are Ice type no damage to each other";
            Deduction.innerText = "0";
            Deduction.style.color = "blue"
            meDeduction.innerText = "0";
            meDeduction.style.color = "blue";
          }
          else if (opponent == "electivireElectric") {
          yourScore -= 1;
          opponentScore -= 1;
          enemyLife.style.color ="red";
          meLife.style.color = "red";
          resultElement.innerText = "Both pokemon are strong both will take 1 damage";
          Deduction.innerText = "-1";
          Deduction.style.color = "red"
          meDeduction.innerText = "-1";
          meDeduction.style.color = "red";
          }
          else if (opponent == "tentacruelWater") {
          yourScore -= 1;
          opponentScore -= 1;
          enemyLife.style.color ="red";
          meLife.style.color = "red";
          resultElement.innerText = "Both pokemon are strong both will take 1 damage";
          Deduction.innerText = "-1";
          Deduction.style.color = "red"
          meDeduction.innerText = "-1";
          meDeduction.style.color = "red";
        }
        }
    
      
        
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
    }


    function winner() {
        

        while (true) {
            document.getElementById("your-score").innerText = yourScore;
            document.getElementById("opponent-score").innerText = opponentScore;
            if (yourScore<1) {            
                alert("Sorry you lose!");
            } else if (opponentScore<1) {
                alert("Congratulation you win");             
            } 
            else{
                return
            }
        }
    }


    
    
    


    
        

 

    




