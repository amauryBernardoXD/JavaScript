const priceEthanol = 3.22;
const priceGasoline = 5.35;
const fuelType  = 'common';
const autonomy  = 10;
const distanceKm = 350;

const totalCustEthanol = (distanceKm / autonomy) * priceEthanol;
const totalCustGasoline = (distanceKm / autonomy) * priceGasoline;
const budget = 150;

if(totalCustGasoline <= budget){
    console.log('Im going for Gasoline, Im going to spend a total of:', totalCustGasoline, 'In this trip.');
}
else{
    console.log('Im going for Ethanol, Im going to spend a total of:', totalCustEthanol, 'In this trip.');
}