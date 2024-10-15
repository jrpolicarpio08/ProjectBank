import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-convergepaid',
  templateUrl: './convergepaid.page.html',
  styleUrls: ['./convergepaid.page.scss'],
})
export class ConvergepaidPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
