import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  constructor() { }

  @Input() selectedKeg: Keg;
  @Output() clickSender = new EventEmitter();

  editKegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  
  ngOnInit() {}
}