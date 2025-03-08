import { Component } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  imports: [],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {

  count = 0;

  increase() {
    this.count++;
  }

  decrease() {
    if (this.count > 0) this.count--;
  }
}
