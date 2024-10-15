import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoancarPage } from '../modals/loanscar/loancar/loancar.page';
import { LoanhousePage } from '../modals/loanshouse/loanhouse/loanhouse.page';
import { LoanbusinessPage } from '../modals/loansbusiness/loanbusiness/loanbusiness.page';


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

  loanhouse(){
    this.modalCtrl.create({
      component: LoanhousePage
    }).then(modalres => {
      modalres.present();
    })
  }

  loanbusiness(){
    this.modalCtrl.create({
      component: LoanbusinessPage
    }).then(modalres => {
      modalres.present();
    })
  }


}
