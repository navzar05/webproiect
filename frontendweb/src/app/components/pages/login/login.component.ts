import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/user_services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService],
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatIcon, MatDividerModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService,  private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated())
      this.router.navigate(['/manage']);
  }

  login(): void {
    // Call AuthService.login with the form values
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          console.log('Login successful:', response);
          this.authService.setToken(response.token, response.email);
          this.router.navigate(['/home']);
          this._snackBar.open("Login succesfully", "Close");
          // Handle success, e.g., redirect to dashboard
        },
        error => {
          console.error('Login failed:', error);
          // Handle error, e.g., show an error message
        }
      );
  }
}
