import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loancollege',
  templateUrl: './loancollege.page.html',
  styleUrls: ['./loancollege.page.scss'],
})
export class LoancollegePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


}
