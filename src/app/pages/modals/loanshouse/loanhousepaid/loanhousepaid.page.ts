import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loanhousepaid',
  templateUrl: './loanhousepaid.page.html',
  styleUrls: ['./loanhousepaid.page.scss'],
})
export class LoanhousepaidPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
