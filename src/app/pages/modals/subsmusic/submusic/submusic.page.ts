import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-submusic',
  templateUrl: './submusic.page.html',
  styleUrls: ['./submusic.page.scss'],
})
export class SubmusicPage implements OnInit {

  type: string = 'all';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  public alertButtons = [
    {
      text: 'Cancel',
    },
    {
      text: 'Confirm',
      handler: () => {
        window.location.href='/subvideoremoved';
      },
    },
  ];

}
