/**Please upload your javascript file to a repository and add the GitHub link to that particular file.  
Complete the following challenge! Due at 2:00pm.
 

Question 1:
Alert the user to choose from the following: 1. Deposit Money 2. Withdraw Money 
Question 2:
If the user chooses to Deposit Money, Ask the user “How much would you like to deposit?"
Alert the user ". Your new balance is: [THE BALANCE]".
If the user chooses to Withdraw Money, Ask the user "How much would you like to withdraw?"

Alert the user ". Your new balance is: [THE BALANCE]"
Question 3: 

Create a running total for the Balance each time the user chooses to deposit or withdraw money 

If there is a positive balance,  alert the user with message "You got monnneeeyy!!"
If there is a negative balance, alert the user with the message "Low Funds" */

//Variable declaration and initialization
var action = prompt("Enter (1) to Deposit Money.\n (2) to Withdraw Money");
var withdrawal;
var deposit;
var balance = 0;

//adds money to account
function addDeposit(num1, num2) {
    return num1 + num2
};

//withdraws money from account
function subWithdrawal(num1, num2) {
    return num1 - num2
    
};

//check option user picked. 1 is deposit, 2 is withdraw.
if (action == 1) {
    deposit = prompt("How much would you like to deposit?")
    deposit = Number(deposit)
    alert(`Your new balance is: ${addDeposit(balance, deposit)}`)
    
} else if (action == 2){
    withdrawal = prompt("How much would you like to withdraw? ")
    withdrawal = Number(withdrawal)
    alert(`Your new balance is: ${subWithdrawal(balance, withdrawal)}`)
} else {
    alert("Pick 1 or 2")

};

//Check account balance and alert the user
if (balance <= 0) {
    alert("Low Funds")
} else {
    alert("You got monnneeeyy!!")
};