function delay(number){
    return new Promise((resolve, reject) => {
        if (number > 7){
           resolve ('maior')
        }else{
            reject ('menor')
        }
    })
}

setTimeout(() => {
    delay(5)
    .then(result =>{
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}, 3000);



