import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.models';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user: User = new User();
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
      },
      (error) => {
        this.errorMessage = error.error.message || 'Error en el registro';
        console.log('Error al registrar:', error);
      }
    );
  }
}
