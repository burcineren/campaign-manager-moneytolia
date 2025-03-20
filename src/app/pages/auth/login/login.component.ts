import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginAction } from '../../../core/states/auth-state/auth.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.store.dispatch(new LoginAction({ username, password })).subscribe({
        next: () => {
          console.log('Giriş başarılı!');
          this.router.navigate(['/campaigns'])
          this.toastr.success('Başarılı bir şekilde giriş gerçekleştirilmiştir.');
        },
        error: (err) => {
          console.error('Giriş başarısız!');
          this.toastr.error('Giriş başarısız! Hatalı kullanıcı adı veya şifre.');
        }
      });
    }
  }
}
