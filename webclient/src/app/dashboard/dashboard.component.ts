import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss','/../../styles/mat-card.scss']
})
export class DashboardComponent implements OnInit {
  genderOptions= ["Female", "Male", "Neutral", "Prefer not to say"];

  constructor() { }

  ngOnInit() {
  }

}
