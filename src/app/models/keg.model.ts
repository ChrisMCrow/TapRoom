export class Keg {
    pints: number = 124;
    priceText: string = "";
    discount: number = 1;
    constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {
    }
}