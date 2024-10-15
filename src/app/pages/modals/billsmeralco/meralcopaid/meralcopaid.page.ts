import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meralcopaid',
  templateUrl: './meralcopaid.page.html',
  styleUrls: ['./meralcopaid.page.scss'],
})
export class MeralcopaidPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
