import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';
import {  } from 'events';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {

  constructor() { }

  @Input() newKeg: Keg;
  @Input() currentKegs: Keg[];
  @Output() addNewKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number): void {
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.addNewKegSender.emit(newKeg);
  }

  ngOnInit() { }
}
