const date = new Date();
const year = date.getFullYear();

class Veicolo {
	brand;
	constructionYear;
	color;

	constructor(brand, constructionYear, color) {
		this.brand = brand;
		this.constructionYear = constructionYear;
		this.color = color;
	}

	informazioni() {
		return `La marca della macchina è: ${this.brand}, l'anno di costruzione è ${this.constructionYear} ed è di colore ${this.color}.`;
	}
	calcolaEta() {
		return year - this.constructionYear;
	}
}

const myCar = new Veicolo('Fiat', 2019, 'blu');

console.log(myCar.informazioni());
console.log(`La macchina ha ${myCar.calcolaEta()} anni.`);

// - Bonus
class Automobile extends Veicolo {
	constructor(brand, constructionYear, color, numberOfDoors, fuel) {
		super(brand, constructionYear, color);
		this.numberOfDoors = numberOfDoors;
		this.fuel = fuel;
	}
}

const myCar2 = new Automobile('Opel', 2020, 'nero', 4, 'benzina');
console.log(`La macchina ha ${myCar2.numberOfDoors} porte ed è alimentata a ${myCar2.fuel}.`);
