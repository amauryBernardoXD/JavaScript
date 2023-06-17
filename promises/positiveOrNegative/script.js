function isPositive (number){
    return new Promise ((resolve, reject) =>{
        if (number > 0){
            resolve ();
        }else {
            reject ();
        }
    })
}

isPositive(2)
.then(result => {
        console.log('Positive')
}).catch(error => {
    console.log('Negative')
})