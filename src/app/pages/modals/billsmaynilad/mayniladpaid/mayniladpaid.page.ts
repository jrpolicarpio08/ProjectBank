import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mayniladpaid',
  templateUrl: './mayniladpaid.page.html',
  styleUrls: ['./mayniladpaid.page.scss'],
})
export class MayniladpaidPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
