import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-verifytransfer',
  templateUrl: './verifytransfer.page.html',
  styleUrls: ['./verifytransfer.page.scss'],
})
export class VerifytransferPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
