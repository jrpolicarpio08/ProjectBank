import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoanhousepaidPage } from '../loanhousepaid/loanhousepaid.page';

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
  
  loanhousepaid(){
    this.modalCtrl.create({
      component: LoanhousepaidPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
