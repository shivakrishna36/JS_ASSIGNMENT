// creating two objects savings and current account for deposit and withdraw

class BankAccount	//creating class BankAccount
{
 constructor(accountNumber,accountHolderName,accountBalance)
 {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
 }   
 deposit(amount)// creating deposit function
 {
     this.accountBalance  = this.accountBalance + amount;
     console.log("Account Balance is updated and remaining balance is:" + this.accountBalance)
 }
}

class Savings extends BankAccount	// creating class savings and extending BankAccount class 
{
  constructor(accountNumber,accountHolderName,accountBalance,isSalary)
    {
    super(accountNumber,accountHolderName,accountBalance)
    this.isSalary = isSalary;    
    }
withdraw(amount)	//creation of withdraw function
{
if(amount>0 && amount < this.accountBalance)
{
    var remaining = this.accountBalance - amount;
    this.accountBalance = remaining;
    console.log(amount + "is withdrawn");
    console.log("The balance is"+ remaining);
}
}
}

class Current extends BankAccount	// creating current account with extending BankAccount
{
    constructor(accountNumber,accountHolderName,accountBalance, odLimit)
    {
    super(accountNumber,accountHolderName,accountBalance)
    this.odLimit = odLimit;    
    }
withdraw(amount)
{
if(amount>0 && amount < (this.accountBalance - this.odLimit))
{
    var remaining = this.accountBalance - amount;
    this.accountBalance = remaining;
    console.log(amount + "is withdrawn");
    console.log("The balance is"+ remaining);
}
}
}
 var savings = new Savings(123456789,"Jhon",10000,true);
 var current = new Current(987456213,"Rock",50000,500);
 savings.deposit(500);
 console.log("current balance is:"+savings.accountBalance);
 current.deposit(1000);
 console.log("current balance is:"+current.accountBalance);
 savings.withdraw(500);
 current.withdraw(1000);