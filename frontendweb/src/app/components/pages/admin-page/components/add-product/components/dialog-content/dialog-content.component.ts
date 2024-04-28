import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {Manufacturer} from "../../interfaces/manufacturer";
import {Type} from "../../interfaces/type";

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatMiniFabButton,
    MatOption,
    MatSelect
  ],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.css'
})
export class DialogContentComponent {
  name: string = "";
  price: number = 0.0;

  manufacturers:Manufacturer[] = [
    {value: 'fender', viewValue: 'Fender'},
    {value: 'ibanez', viewValue: 'Ibanez'},
    {value: 'flame', viewValue: 'Flame'},
  ];

  types: Type[] = [
    {value: 'acoustic-guitar', viewValue: 'Acoustic guitar'},
    {value: 'acoustic-bass', viewValue: 'Acoustic bass'},
    {value: 'electric-guitar', viewValue: 'Electric Guitar'},
  ];
}
