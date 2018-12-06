var savings = {accountNumber : 123456789,
accountHolderName : "jhon",
accountBalance : 1000,
isSalary : true,
withdraw : function(amount){
    if(amount<savings.accountBalance){
   var remaining = savings.accountBalance - amount;
   console.log(amount + "is withdrawn");
   console.log("remaining amount is "+ remaining);
   savings.accountBalance = remaining; 
}
else{
    console.log("You entered invalid account");
}
} ,
getCurrentBalance:function()
{
    console.log("Account balance is :" + savings.accountBalance);
}
}
console.log(savings.withdraw(400));
console.log(savings.getCurrentBalance());

var current = {accountNumber : 987456321,
    accountHolderName : "Rock",
    accountBalance : 10000,
    odLimit : 500,
    withdraw(amount){
        if(amount<=current.accountBalance - this.odLimit){
       var remaining = parseInt(current.accountBalance - amount);
       console.log(amount + "is withdrawn");
       console.log("remaining amount is "+ remaining);
       current.accountBalance = remaining; 
    }
    else{
        console.log("You entered invalid account");
    }
    } ,
    getCurrentBalance:function()
    {
        console.log("Account balance is :" + current.accountBalance);
    }
    }
    console.log(current.withdraw(4000));
    console.log(current.getCurrentBalance());