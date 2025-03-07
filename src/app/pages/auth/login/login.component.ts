import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginAction } from '../../../core/states/auth-state/auth.actions';


@Component({
  selector: 'login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(email: string, password: string): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.store.dispatch(new LoginAction({ email, password })).subscribe({
        next: () => console.log('Giriş başarılı!'),
        error: (err) => console.error('Giriş başarısız!', err.message)
      });
    }
  }
}
