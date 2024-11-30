import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSubmitting = false;

  user = {
    email: '',
    password: ''
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ){}

  login(){
    if (this.isSubmitting) {
      return;
    }

    console.log('user', this.user);
    this.isSubmitting = true;
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        // Puedes redirigir a la página de dashboard
        // this.router.navigate(['dashboard']);
      },
      (error) => {
        console.log('Login fallido', error);
        this.isSubmitting = false;
      }
    );
  }

}
