class Person {
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name; 
        this.weight = weight;
        this.height = height;
    }

    calculateIMC (){
        return this.weight / (this.height * this.height)
    }
}


const amaury = new Person ('Amaury', 97, 1.79)
console.log(amaury.calculateIMC().toFixed(1))