import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loanbusinesspaid',
  templateUrl: './loanbusinesspaid.page.html',
  styleUrls: ['./loanbusinesspaid.page.scss'],
})
export class LoanbusinesspaidPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
