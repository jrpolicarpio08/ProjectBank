import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-convergeverify',
  templateUrl: './convergeverify.page.html',
  styleUrls: ['./convergeverify.page.scss'],
})
export class ConvergeverifyPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
