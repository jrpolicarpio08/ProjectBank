import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-livesupport',
  templateUrl: './livesupport.page.html',
  styleUrls: ['./livesupport.page.scss'],
})
export class LivesupportPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
