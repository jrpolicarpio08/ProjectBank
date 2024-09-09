import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MayniladverifyPage } from '../mayniladverify/mayniladverify.page';

@Component({
  selector: 'app-billspaymaynilad',
  templateUrl: './billspaymaynilad.page.html',
  styleUrls: ['./billspaymaynilad.page.scss'],
})
export class BillspaymayniladPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  
  close(){
    this.modalCtrl.dismiss();
  }

  mayniladverify(){
    this.modalCtrl.create({
      component: MayniladverifyPage
    }).then(modalres => {
      modalres.present();
    })
  }


}
