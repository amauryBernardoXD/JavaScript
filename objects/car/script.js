class Car {
    brand;
    color;
    autonomy;
    
    constructor (brand, color, autonomy){
        this.brand = brand;
        this.color = color;
        this.autonomy = autonomy;
    }

    calculateFuel(distanceInKm, fuelPrice){
        return distanceInKm * this.autonomy * fuelPrice ;
    }
}

const mercedesBens = new Car('Mercedes Benz', 'Red', 1/8)
console.log(mercedesBens.calculateFuel(120, 5)) 