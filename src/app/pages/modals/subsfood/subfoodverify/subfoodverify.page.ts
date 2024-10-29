import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subfoodverify',
  templateUrl: './subfoodverify.page.html',
  styleUrls: ['./subfoodverify.page.scss'],
})
export class SubfoodverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
