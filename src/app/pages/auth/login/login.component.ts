import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginAction } from '../../../core/states/auth-state/auth.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
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
          const token = localStorage.getItem('token');
          if (token) {
            this.router.navigate(['/home']).catch(() => this.router.navigate(['/campaigns']));
          } else {
            console.error('Token alınamadı!');
            this.router.navigate(['/login']);
          }
        },
        error: (err) => console.error('Giriş başarısız!', err.message)
      });
    }
  }
}
