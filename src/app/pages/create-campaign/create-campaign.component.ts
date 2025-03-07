import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-campaign',
  imports: [ReactiveFormsModule],
  templateUrl: './create-campaign.component.html',
  styleUrl: './create-campaign.component.scss'
})
export class CreateCampaignComponent {
  campaignForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSubmit() {

  }
}
