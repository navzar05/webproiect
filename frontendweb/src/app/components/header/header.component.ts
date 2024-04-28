import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/user_services/auth.service";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-header',
  standalone: true,
  providers: [AuthService],
  imports: [
    MatToolbarModule,
    MatIconButton,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButton,
    RouterModule,
    MatTooltipModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isXSmallScreen : boolean = false;
  @Output() emitShowSidenav = new EventEmitter<void>();

  constructor(public authService: AuthService) {}
  onClickShowSidenav(): void {
    this.emitShowSidenav.emit();
  }

  protected readonly sessionStorage = sessionStorage;
}
