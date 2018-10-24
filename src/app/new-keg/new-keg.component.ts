import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {

  constructor() { }

  @Input() newKeg: Keg;
  @Input() currentKegs: Keg[];

  newKegOpen(): void {
    this.newKeg = new Keg("", "", null, null);
  }

  addNewKeg(keg: Keg): void {
    this.currentKegs.push(keg);
    this.newKeg = null;
  }



  ngOnInit() { }
}
