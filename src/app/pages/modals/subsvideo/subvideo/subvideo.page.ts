import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subvideo',
  templateUrl: './subvideo.page.html',
  styleUrls: ['./subvideo.page.scss'],
})
export class SubvideoPage implements OnInit {

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
