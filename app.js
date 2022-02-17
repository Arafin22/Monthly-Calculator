// html elements id capter 
const income = document.getElementById('icome');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothe = document.getElementById('clothe');
const calcutateBtn = document.getElementById('calcutate');
const totalExpanses = document.getElementById('total-expanses');
const balance = document.getElementById('balance');
const persentes = document.getElementById('persentes');
const saveBtn = document.getElementById('save');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');

// calcutate button click and expanses amount calculate 
calcutateBtn.addEventListener('click', function(e){
    e.preventDefault();
    let incomeAmount =  parseFloat(income.value);
    if(isNaN(incomeAmount) || incomeAmount<0 ){
        return alert('Please input valid amount of money in number format');
    }
    let foodAmount = parseFloat(food.value);
    let rentAmount = parseFloat(rent.value);
    let colotheAmount = parseFloat(clothe.value);

    if((isNaN(foodAmount) || foodAmount<0 ) || (isNaN(rentAmount) || rentAmount<0 )|| (isNaN(colotheAmount) || colotheAmount<0 )){
        return alert('Please number format');
    }
    
    let expansesAmount = foodAmount+rentAmount+colotheAmount;
    if(expansesAmount>incomeAmount){
        return alert('expenses amount gater then income');
    }
    totalExpanses.innerText=expansesAmount;

    let resurvAmount = (incomeAmount- expansesAmount);
    balance.innerText=resurvAmount;
    food.value="";
    rent.value="";
    clothe.value="";
})

// saveing amount and remaining balance calculate 
saveBtn.addEventListener('click',function(e){
    e.preventDefault();
    let incomeAmount =  parseFloat(income.value);
    let balanceAmount = parseFloat(balance.innerText)
    let persenteValue =  parseFloat(persentes.value);
    if(isNaN(persenteValue) || persenteValue<0 ){
        return alert('Please input valid number format');
    }
    let savingAmounts = ((incomeAmount/100)*persenteValue);

    if(balanceAmount<savingAmounts){
        return alert('saving is geater then your balance')

    }
    savingAmount.innerText=savingAmounts;
    let saving= parseFloat(savingAmount.innerText);

    let remainingBalances = (balanceAmount-saving);


    remainingBalance.innerText=remainingBalances;

})
