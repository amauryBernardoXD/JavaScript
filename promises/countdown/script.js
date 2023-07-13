function countdown (number){
    const interval = setInterval (() =>{
        console.log(number);
        number--;

        if(number === 0){
            clearInterval(interval);
            console.log('contagem Finalizada')
        }

    }, 1000)
}

countdown(9)