import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Campaign } from '../../core/types/campaign.model';
import { CampaignsService } from '../../core/services/campaigns.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'campaigns',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignsComponent {
  private readonly campaignsService = inject(CampaignsService);
  campaigns = signal<Campaign[]>(this.campaignsService.getCampaigns());

  showModal = signal(false);
  id = signal<number | null>(null);
  values = signal({ title: "", description: "" });

  openModal(item: Campaign) {
    this.showModal.set(true);
    this.id.set(item.id);
    this.values.set({ title: item.title, description: item.description });
  }

  updateCampaign(modalForm: NgForm) {
    if (!this.id()) return;

    this.campaigns.update(campaigns => {
      return campaigns.map(campaign =>
        campaign.id === this.id()
          ? { ...campaign, title: modalForm.value.title, description: modalForm.value.description }
          : campaign
      );
    });

    this.campaignsService.updateCampaign({
      ...this.campaigns().find(c => c.id === this.id())!,
      title: modalForm.value.title,
      description: modalForm.value.description
    });

    this.showModal.set(false);
  }

  deleteCampaign(id: number) {
    Swal.fire({
      title: 'Silmek istediğinize emin misiniz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal',
    }).then((result) => {
      if (result.isConfirmed) {
        this.campaignsService.deleteCampaign(id);
        this.campaigns.set(this.campaignsService.getCampaigns());
        Swal.fire('Silindi!', 'Kampanya başarıyla silindi.', 'success');
      }
    });
  }

  increment(item: Campaign) {
    this.campaignsService.updatePoint(item.id, (item.point || 0) + 1);
    this.campaigns.set(this.campaignsService.getCampaigns());
  }

  decrement(item: Campaign) {
    if ((item.point || 0) > 0) {
      this.campaignsService.updatePoint(item.id, (item.point || 0) - 1);
      this.campaigns.set(this.campaignsService.getCampaigns());
    }
  }

  closeModal() {
    this.showModal.set(false);
  }
}
