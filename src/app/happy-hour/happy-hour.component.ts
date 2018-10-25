import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy-hour',
  templateUrl: './happy-hour.component.html',
  styleUrls: ['./happy-hour.component.css']
})
export class HappyHourComponent implements OnInit {

  constructor() { }
  @Input() happyHour: boolean;

  ngOnInit() {
  }

}
