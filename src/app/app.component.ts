import { Component } from '@angular/core';
import { $ } from 'jquery';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap room';
  currentKegs: Keg[] = [
    new Keg("Big Wave", "Kona Brewing Company", 9, 5.5),
    new Keg("Fat Tire Belgian White", "New Belgium", 7, 5.2),
    new Keg("Crisp Apple", "Angry Orchard", 6, 5.0)
  ];
  selectedKeg: Keg = null;
  newKeg: Keg = null;

  editKeg(keg: Keg): void {
    this.selectedKeg = keg;  
  }

  hideEditKeg(): void {
    this.selectedKeg = null;
  }

  
  lessThan10Pints(keg: Keg): string {
    if (keg.pints < 10) {
      return "text-danger";
    }
    else {
      return "text-default";
    }
  }

  alcoholContentColor(keg: Keg): string {
    if (keg.alcoholContent > 10) {
      return "text-danger";
    }
    else if (keg.alcoholContent > 5) {
      return "text-default";
    }
    else {
      return "text-secondary";
    }
  }

  sellPint(keg: Keg): void {
    if (keg.pints > 0) {
      keg.pints -= 1;
    } else {
      this.deleteKeg(keg);
    }
  }

  deleteKeg(keg): void {
    this.currentKegs.splice(this.currentKegs.indexOf(keg), 1);
  }

  priceColor(keg): string {
    if (keg.price >= 9) {
      keg.priceText = "$$$";
      return "badge badge-danger";
    } else if (keg.price >= 7) {
      keg.priceText = "$$";
      return "badge badge-warning";
    } else {
      keg.priceText = "$";
      return "badge badge-success";
    }
  }
}


