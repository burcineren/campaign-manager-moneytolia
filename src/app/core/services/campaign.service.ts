import { Injectable } from '@angular/core';
import { Campaign } from '../types/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor() { }

  campaigns!: Campaign[];

  setCampaigns(campaignObject: Campaign) {
    this.campaigns = [];
    const storedCampaigns = localStorage.getItem('campaigns');
    if (storedCampaigns) {
      this.campaigns = JSON.parse(storedCampaigns);
      this.campaigns = [...this.campaigns, campaignObject];
    } else {
      this.campaigns = [campaignObject];
    }
    campaignObject.id = this.campaigns.length;
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
  }

  getCampaigns(): Campaign[] {
    const data = localStorage.getItem('campaigns') ?? '[]';
    this.campaigns = JSON.parse(data);
    return this.campaigns;
  }
}
