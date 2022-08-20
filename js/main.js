//Main Button 
document.getElementById('calculate').addEventListener('click', function(){
    const totalIncome = getInputValueById("income");
    const food = getInputValueById('food');
    const rent = getInputValueById('rent');
    const clothes = getInputValueById('clothes');

    

    const totalCost = food + rent + clothes ;
    
    const newBalance = totalIncome - totalCost;

    
    removeInnerValue('total-Cost');

    passInnerText('total-Cost', totalCost);

    removeInnerValue('balance');

    passInnerText('balance', newBalance); 
})


document.getElementById('savings').addEventListener('click', function(){

    const totalIncome = getInputValueById("income");
    const food = getInputValueById('food');
    const rent = getInputValueById('rent');
    const clothes = getInputValueById('clothes');

    const totalCost = food + rent + clothes ;
    
    const newBalance = totalIncome - totalCost;
    removeInnerValue('total-Cost');

    passInnerText('total-Cost', totalCost);

    removeInnerValue('balance');

    passInnerText('balance', newBalance); 
    const savingRate = getInputValueById('save');
    const totalSavings = ( totalIncome * savingRate ) / 100; 

    removeInnerValue('savings-amount');

    passInnerText('savings-amount', totalSavings);


     const finalBalance = newBalance - totalSavings;
    removeInnerValue('remaining-balance');

    passInnerText('remaining-balance', finalBalance);

})


document.getElementById('reset').addEventListener('click', function(){
    reset('income');
    reset('food');
    reset('rent');
    reset('clothes');
    reset('save');
})

