import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignService } from '../../core/services/campaign.service';
import { Campaign } from '../../core/types/campaign.model';

@Component({
  selector: 'app-create-campaign',
  imports: [ReactiveFormsModule],
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent {
  campaignForm!: FormGroup;
  showDialog: boolean = false;

  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignService
  ) {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  clearForm() {
    this.campaignForm.reset();
  }

  onSubmit() {
    if (this.campaignForm.valid) {
      const currentDate = new Date().toLocaleDateString();

      const campaign: Campaign = {
        id: 0,
        title: this.campaignForm.get('title')?.value,
        description: this.campaignForm.get('description')?.value,
        point: 0,
        datePublished: currentDate
      };

      this.campaignService.setCampaigns(campaign);
      this.clearForm();
      this.showDialog = true;

      setTimeout(() => {
        this.showDialog = false;
      }, 2000);
    }
  }
}
