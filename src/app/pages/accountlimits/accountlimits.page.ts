import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountlimits',
  templateUrl: './accountlimits.page.html',
  styleUrls: ['./accountlimits.page.scss'],
})
export class AccountlimitsPage implements OnInit {

  type: string = 'all';

  constructor() { }

  ngOnInit() {
  }

}
