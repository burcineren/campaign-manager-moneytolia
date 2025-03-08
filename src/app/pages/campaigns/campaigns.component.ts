import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Campaign } from '../../core/types/campaign.model';
import { CampaignsService } from '../../core/services/campaigns.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'campaigns',
  imports: [CommonModule, FormsModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignsComponent {

  constructor(private campaignsService: CampaignsService) { }

  campaigns: Campaign[] = []
  showModal: boolean = false
  id: any;
  values = {
    title: "",
    description: ""
  }

  ngOnInit(): void {
    this.campaigns = this.campaignsService.getCampaigns();
  }

  openModal(item: any) {
    this.showModal = true
    this.id = item.id;
    this.values.title = item.title;
    this.values.description = item.description
  }

  updateCampaign(modalForm: NgForm) {
    const modalObject = {
      id: this.id,
      title: modalForm.value.title,
      description: modalForm.value.description
    }

    var item = this.campaigns.filter(campaign => campaign.id == modalObject.id)[0];
    item.title = modalObject.title;
    item.description = modalObject.description;

    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
    this.showModal = false;
  }

  deleteCampaign(id: number) {
    this.campaigns = this.campaigns.filter(campaign => campaign.id !== id);

    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
    this.showModal = false;
  }

  increment(item: any) {
    item.point++;
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }

  decrement(item: any) {
    if (item.point > 0) {
      item.point--;
    }
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }

  closeModal() {
    this.showModal = false;
  }
}
