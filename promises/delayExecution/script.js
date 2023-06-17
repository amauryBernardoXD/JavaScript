function delayExecution (number){
    return new Promise ((resolve, reject) => {
        if(number % 2 === 0){
            resolve();
        }else{
            reject();
        }
    })
};

delayExecution(9)

.then(result => {
    setTimeout (() => {
        console.log('Par')
    }, 3000)
}).catch(error => {
    setTimeout (() => {
        console.log('impar')
    }, 3000)
})
