import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.page.html',
  styleUrls: ['./addcard.page.scss'],
})
export class AddcardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        window.location.href='/addcardsuccess';
      },
    },
  ];

 public alertInputs = [
    {
      type: 'password',
      placeholder: 'password',
      value: 'JD123'
    }
  ];
}

