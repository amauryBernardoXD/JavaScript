class studentAverage {
    name;
    n1;
    n2;
    n3;

    constructor (name, n1, n2, n3){
        this.name = name;
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
    }
    sumNotes(){
        return (this.n1 + this.n2 + this.n3) / 3;

    }
}
function calculateAverage(sumNotes) {
    if (sumNotes < 5) {
        console.log(`${sumNotes.toFixed(1)} disapproved`);
    } else if (sumNotes >= 5 && sumNotes <= 7) {
        console.log(`${sumNotes.toFixed(1)} recovery`);
    } else {
        console.log(`${sumNotes.toFixed(1)} approved`);
    }
}
const student1 = new studentAverage ('Amaury', 7, 3, 9)

const average = student1.sumNotes();

calculateAverage(average);