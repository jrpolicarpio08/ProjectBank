import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loanbusiness',
  templateUrl: './loanbusiness.page.html',
  styleUrls: ['./loanbusiness.page.scss'],
})
export class LoanbusinessPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
