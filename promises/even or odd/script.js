
function isEven (number){
    return new Promise ((resolve, reject) => {
        if(number % 2 === 0){
            resolve('Par');
        }else{
            reject('Impar')
        }
    }) 
};
console.log(isEven(3));