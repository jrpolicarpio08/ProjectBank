import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MayniladpaidPage } from '../mayniladpaid/mayniladpaid.page';

@Component({
  selector: 'app-mayniladverify',
  templateUrl: './mayniladverify.page.html',
  styleUrls: ['./mayniladverify.page.scss'],
})
export class MayniladverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  billpaidmaynilad(){
    this.modalCtrl.create({
      component: MayniladpaidPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
