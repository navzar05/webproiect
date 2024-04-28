import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {AuthService} from "../../services/user_services/auth.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [AuthService],
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatIcon, MatDivider, FormsModule, HttpClientModule, NgIf, MatProgressBarModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  repeatPassword: string = "";
  registrationFailed: boolean = false;
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  register(): void {
    // Call AuthService.register with the form values
    this.loading = true;
    this.registrationFailed = false;
    this.authService.register(this.email, this.password, this.firstName, this.lastName)
      .subscribe(
        response => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
          this._snackBar.open("Login succesfully", "Close");
          // Handle success, e.g., show a success message or redirect to login page
        },
        error => {
          console.error('Registration failed:', error);
          this.registrationFailed = true;
          // Handle error, e.g., show an error message
        }
      )
      .add(() => {
        this.loading = false; // Ensure loading is set to false after subscription completes
      });
  }
}
