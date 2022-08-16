
document.getElementById('btn-deposit').setAttribute('disabled', true);
document.getElementById("deposit").addEventListener('keyup', function(){
    const stj = document.getElementById("deposit").value;
    const fdfd = parseFloat(stj);
    console.log(34)
    if(fdfd > 0){
        document.getElementById('btn-deposit').removeAttribute('disabled');
    }else{
        document.getElementById('btn-deposit').setAttribute('disabled', true);
    }
});

document.getElementById("btn-deposit").addEventListener('click', function(){
    
    const deposit = document.getElementById("deposit");
    const depositValue = deposit.value;
    // const depositInt = parseFloat(depositValue);
    // const depositAmount = document.getElementById("total-deposit");
    // const prevDeposit = depositAmount.innerText;
    // const amountInt = parseFloat(prevDeposit);
    // const totalDeposit = amountInt + depositInt;
    // depositAmount.innerText = totalDeposit;
    if(depositValue < 0 || depositValue == "" ){
        alert("Deposit amount not accepted");
    }else{
        const depositInt = parseFloat(depositValue);
        const depositAmount = document.getElementById("total-deposit");
        const prevDeposit = depositAmount.innerText;
        const amountInt = parseFloat(prevDeposit);
        const totalDeposit = amountInt + depositInt;
        depositAmount.innerText = totalDeposit;

        const prevBalance = document.getElementById("total-balance");
        const newBalance = parseFloat(prevBalance.innerText) + depositInt;
        prevBalance.innerText = newBalance;

        deposit.value = "";
    }

});




document.getElementById("btn-withdrow").addEventListener('click', function(){
    const withdrawAmount = document.getElementById("withdrow");
    const withdrawValue = withdrawAmount.value;

    if(withdrawValue == '' || withdrawValue < 0 ){
        alert("Withdraw amount not accepted");
    }else{
        const totalWithdraw = document.getElementById("total-withdraw");  
        const prevWithdrawValue = parseFloat(totalWithdraw.innerText);
        const newwWithdraw =  prevWithdrawValue + parseFloat(withdrawValue);
        totalWithdraw.innerText = newwWithdraw;

        const prevBalance = document.getElementById("total-balance");
        const currentBalance = parseFloat(prevBalance.innerText);
        if(currentBalance >= withdrawValue){
            const newBalance = currentBalance - parseFloat(withdrawValue);
            prevBalance.innerText = newBalance;
        }else{
            alert("Sorry, your balance is low");
        }

        withdrawAmount.value = "";
    }
});