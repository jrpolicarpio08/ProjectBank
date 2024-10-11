import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertButtons1 = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
    },
  ];

  public alertButtons2 = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
    },
  ];

  public alertButtons3 = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
    },
  ];

}
