const weight = 96;
const height = 1.79;

const imc = weight / (height * height);

if (imc < 18.5){
    console.log('Under weight')
}else if(imc >= 18.5 && imc < 25){
    console.log('Normal weight')
}else if(imc >= 25 && imc < 30){
    console.log('Overweight img is:', imc.toFixed(1))
}else if(imc >= 30 && imc <=40){
    console.log('Obese')
}else{
    console.log('Severe Obesity')
}