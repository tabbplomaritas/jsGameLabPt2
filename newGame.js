"use strict"
{
  const startGame= function(p) {
    p =prompt("Do you want to play?");
    if (p.toLowerCase() === "yes"){
      let userName = prompt("What is your name?");
      startCombat(userName);
    } else {
      alert("See ya later!");
    }
  }; //end of start game

const getDamage = function(){
  return Math.floor(Math.random() * 5) + 1;
}

const startCombat = function(userName){
  let userWins = 0;
  let grantWins = 0;
  let userHealth = 100;
  let grantHealth = 10; //FIXME: change the health values
  


  while ( userWins < 3 && grantWins < 1) {

    while (grantHealth >0 && userHealth >0){
      let attackOrQuit = prompt("Would you like to attack or quit?");
        if(attackOrQuit.toLowerCase() === "attack"){
      
        grantHealth = grantHealth - getDamage();
        console.log(`Grant's health is at ${grantHealth}`);
        userHealth = userHealth - getDamage();
        console.log(`${userName} health is at ${userHealth}`);
        
  }
        if (userHealth <= 0){
          grantWins++;
          console.log("Grant wins the game*******");
        }else if (grantHealth <= 0 && userWins < 3){
          grantHealth += 10;
          userWins++;
          console.log(`${userName} has a total of ${userWins}****`);
        }
      }//end of if attackorquit
    }//end of while loop
  
  }
  startGame();
}//end of useStrict 




























