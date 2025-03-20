import { Injectable, signal } from '@angular/core';
import { Campaign } from '../types/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private campaigns = signal<Campaign[]>(this.loadFromLocalStorage());

  constructor() { }

  private loadFromLocalStorage(): Campaign[] {
    return JSON.parse(localStorage.getItem('campaigns') || '[]');
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns()));
  }

  setCampaign(campaignObject: Campaign): void {
    const updatedCampaigns = [...this.campaigns(), { ...campaignObject, id: this.campaigns().length + 1 }];
    this.campaigns.set(updatedCampaigns);
    this.saveToLocalStorage();
  }

  getCampaigns(): Campaign[] {
    return this.campaigns();
  }

  updateCampaign(updatedCampaign: Campaign) {
    this.campaigns.update(campaigns =>
      campaigns.map(campaign =>
        campaign.id === updatedCampaign.id ? { ...campaign, ...updatedCampaign } : campaign
      )
    );
    this.saveToLocalStorage();
  }
  deleteCampaign(id: number): void {
    const updatedCampaigns = this.campaigns().filter(campaign => campaign.id !== id);
    this.campaigns.set([...updatedCampaigns]); // Yeni referans ile güncelle
    this.saveToLocalStorage();
  }
  updatePoint(id: number, newPoint: number) {
    this.campaigns.update(campaigns =>
      campaigns.map(campaign =>
        campaign.id === id ? { ...campaign, point: newPoint } : campaign
      )
    );
    this.saveToLocalStorage();
  }
}
