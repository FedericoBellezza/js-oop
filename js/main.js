class Veicolo {
	brand;
	year;
	color;

	constructor(brand, year, color) {
		this.brand = brand;
		this.year = year;
		this.color = color;
	}

	informazioni() {
		return `La marca della macchina è: ${this.brand}, l'anno di costruzione è ${this.year} ed è di colore ${this.color}`;
	}
}

const myCar = new Veicolo('Fiat', 2019, 'blu');

console.log(myCar.informazioni());
