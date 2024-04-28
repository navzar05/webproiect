import {Component, Inject, Input, NgModule} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton, MatButtonModule, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {DialogContentComponent} from "./components/dialog-content/dialog-content.component";
import {MatSelectModule} from "@angular/material/select";
import {Manufacturer} from "./interfaces/manufacturer";
import {Type} from "./interfaces/type";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatTableModule, MatButton, MatMiniFabButton, MatIcon],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
   name: string = '';
   price: number = 0;
   pictureUrl: string = '';
   isFavourite: boolean = false;
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

   type: string = "";
   subtype: string = "";

  displayedColumns: string[] = ['name', 'price', 'manufacturer', 'type', 'delete', 'modify'];
  dataSource = [
    {name: 'Example Product 1', price: 100, manufacturer: 'Company A', type: 'Type X'},
    {name: 'Example Product 2', price: 200, manufacturer: 'Company B', type: 'Type Y'},
    // Add more products as needed
  ];

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(DialogDelete);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog-delete.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogDelete{
  constructor(
    public dialogRef: MatDialogRef<DialogDelete>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
