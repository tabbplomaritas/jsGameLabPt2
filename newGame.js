"use strict" 
{
const startGame = function (p) {
   p = prompt("Do you want to play?");
   if (p === "yes") { // add .toLowerCase
       let userName = prompt("What is your name?");
       startCombat(userName);
   } else {
       alert("See ya later!");
   }
}; //end of start game

const getDamage = function () {
   return Math.floor(Math.random() * 5) + 1;
}





const startCombat = function (userName) {
   let userWins = 0;
   let grantWins = 0;
   let userHealth = 40;
   let grantHealth = 10; //FIXME: change the health values
   let gameOver = false;



   while (gameOver === false) {

       console.log("While Wins Loop");

       while (gameOver == false) {
           console.log("While Health Loop");
           
           let attackOrQuit = prompt("Would you like to attack or quit?");

           if (attackOrQuit === "attack") { // add .toLowerCase()
               grantHealth = grantHealth - getDamage();
               console.log(`Grant's health is at ${grantHealth}`);
               userHealth = userHealth - getDamage();
               console.log(`${userName} health is at ${userHealth}`);
           }else if(attackOrQuit === "quit"){
               alert("You are a quitter");
           } else {
               console.log("You did not select a valid option, ending.... ")
               gameOver = true;    
           }

           if (userHealth <= 0) {
               // grantWins++;
               gameOver = true;
               console.log("Grant wins the game*******");
           } else if (grantHealth <= 0 && userWins < 3) {
               grantHealth += 10;
               userWins++;
               console.log(`${userName} has a total of ${userWins}****`);
           }

           if (userWins === 3){
               gameOver = true;                
           }
       } //end of if attackorquit
   } //end of 1st while loop

}
startGame();
};