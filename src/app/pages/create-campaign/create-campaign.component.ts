import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
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
export class CreateCampaignComponent implements OnInit {
  campaignForm!: FormGroup;
  showDialog: boolean = false;
  message: string = 'Kampanya başarılı bir şekilde eklenmiştir!';
  private readonly fb = inject(FormBuilder);
  private readonly campaignsService = inject(CampaignsService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  ngOnInit(): void {
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
      this.campaignsService.setCampaign(campaign);
      this.clearForm();
      this.toastr.success('Kampanya başarılı bir şekilde eklenmiştir!!', 'Kampanya');
      this.showDialog = true;
      this.router.navigate(['campaigns'])
      setTimeout(() => {
        this.showDialog = false;
      }, 2000);
    }
  }
}
