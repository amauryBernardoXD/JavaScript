function concatStringsDelay (string1, string2){
    return new Promise ((resolve, reject) => {
        if(string1 && string2){
            const result = string1 + string2;
            resolve(result)
        }
    })
}

concatStringsDelay('Amaury', 'Bernardo')

.then(result => {
    setTimeout(() => {
        console.log(result)
    }, 3000)
})

set