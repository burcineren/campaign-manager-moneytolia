import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsService } from '../../core/services/campaigns.service';
import { Campaign } from '../../core/types/campaign.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'create-campaign',
  imports: [ReactiveFormsModule],
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CreateCampaignComponent {
  campaignForm: FormGroup;
  showDialog: boolean = false;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private campaignsService: CampaignsService,
    private router: Router,
    private toastr: ToastrService
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
      this.campaignsService.setCampaigns(campaign);
      this.clearForm();
      this.message = 'Kampanya başarılı bir şekilde eklenmiştir!';
      this.toastr.success('Kampanya başarılı bir şekilde eklenmiştir!!', 'Kampanya');
      this.showDialog = true;
      this.router.navigate(['campaigns'])
      setTimeout(() => {
        this.showDialog = false;
      }, 2000);
    }
  }
}
