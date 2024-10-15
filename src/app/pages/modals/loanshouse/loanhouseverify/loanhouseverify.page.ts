import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loanhouseverify',
  templateUrl: './loanhouseverify.page.html',
  styleUrls: ['./loanhouseverify.page.scss'],
})
export class LoanhouseverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        this.modalCtrl.dismiss();
      },
    },
  ];

}
