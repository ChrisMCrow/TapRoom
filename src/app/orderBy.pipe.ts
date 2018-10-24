import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "orderBy",
    pure: false
})

export class OrderByPipe implements PipeTransform {
    transform(input: Keg[], options: object) {
        let desiredColumn = options["desiredColumn"];
        let desiredOrder = options["desiredOrder"];
        if (desiredOrder === "ascending") {
            input.sort((keg1, keg2) => {
                let keg1Property = keg1[desiredColumn];
                let keg2Property = keg2[desiredColumn]
                if (typeof keg1[desiredColumn] === "string") {
                    keg1Property = keg1[desiredColumn].toUpperCase();
                    keg2Property = keg2[desiredColumn].toUpperCase();
                }
                if (keg1Property < keg2Property) {
                    return -1;
                }
                else if (keg1Property > keg2Property) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            input.sort((keg1, keg2) => {
                let keg1Property = keg1[desiredColumn];
                let keg2Property = keg2[desiredColumn]
                if (typeof keg1[desiredColumn] === "string") {
                    keg1Property = keg1[desiredColumn].toUpperCase();
                    keg2Property = keg2[desiredColumn].toUpperCase();
                }
                if (keg1Property < keg2Property) {
                    return 1;
                }
                else if (keg1Property > keg2Property) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        return input;
    }
}