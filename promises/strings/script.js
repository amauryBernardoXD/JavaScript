function concatStrings (stringOne, stringTwo){
    return new Promise ((resolve, reject) => {
        resolve (stringOne + stringTwo)
    })
}

concatStrings('Amaury', 'Bernardo')


    .then(result => {
   setTimeout (console.log(result)), 3000
})
