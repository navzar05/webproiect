import { Component } from '@angular/core';
import {AreaChartComponent} from "./components/area-chart/area-chart.component";
import {MatDivider} from "@angular/material/divider";
import { MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    AreaChartComponent,
    MatDivider,
    MatCardModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
