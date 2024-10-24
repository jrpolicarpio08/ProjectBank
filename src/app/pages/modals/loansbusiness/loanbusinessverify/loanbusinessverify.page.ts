import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoanbusinesspaidPage } from 'src/app/pages/modals/loansbusiness/loanbusinesspaid/loanbusinesspaid.page';

@Component({
  selector: 'app-loanbusinessverify',
  templateUrl: './loanbusinessverify.page.html',
  styleUrls: ['./loanbusinessverify.page.scss'],
})
export class LoanbusinessverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  loanbusinesspaid(){
    this.modalCtrl.create({
      component: LoanbusinesspaidPage
    }).then(modalres => {
      modalres.present();
    })
  }

}
