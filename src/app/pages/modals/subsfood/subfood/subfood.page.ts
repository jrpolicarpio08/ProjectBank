import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubpayfoodPage } from '../subpayfood/subpayfood.page';

@Component({
  selector: 'app-subfood',
  templateUrl: './subfood.page.html',
  styleUrls: ['./subfood.page.scss'],
})
export class SubfoodPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  type: string = 'all';

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  subfood(){
    this.modalCtrl.create({
      component: SubpayfoodPage
    }).then(modalres => {
      modalres.present();
    })
  }

  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        window.location.href='/subfoodremoved';
      },
    },
  ];

}
