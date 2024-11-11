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
