import { Component } from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/user_services/auth.service";

@Component({
  selector: 'app-manage-account',
  standalone: true,
  providers: [AuthService],
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatIcon, MatButton, MatDivider, MatInput, RouterLink],
  templateUrl: './manage-account.component.html',
  styleUrl: './manage-account.component.css'
})
export class ManageAccountComponent {
  email: string = "example@gmail.com";
  first_name: string = "John";
  last_name: string = "Doe";
  username: string = "username";
  first_name_new: string ="";
  username_new: string = "";
  current_password: string = "";
  new_password: string = "";
  email_new: string = "";

  constructor(private authService: AuthService, private router: Router) {

  }


  protected logout():void {
    this.authService.removeTokens();
    this.router.navigate(['/login']);
  }
}
