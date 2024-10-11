import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoancarPage } from '../modals/loancar/loancar.page';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {

  type: string = 'all';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  loancar(){
    this.modalCtrl.create({
      component: LoancarPage
    }).then(modalres => {
      modalres.present();
    })
  }


}
