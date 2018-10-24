export class Keg {
    pints: number = 124;
    priceText: string = "";
    constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {
    }
}