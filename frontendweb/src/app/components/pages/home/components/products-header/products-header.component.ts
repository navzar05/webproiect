import {Component, EventEmitter, Output} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCard,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatIconModule,
    MatIconButton,
    MatCardContent,
    MatToolbar,
    MatToolbarModule,
    MatCheckbox
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() showHomeDrawerChange = new EventEmitter<boolean>();
  sort : string = 'descending';
  itemsShowCount: number = 7;
  showDrawer: boolean = false;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(columns: number): void {
    this.columnsCountChange.emit(columns);
  }

  onShowHomeDrawerUpdated(): void {
    this.showDrawer = !this.showDrawer;
    this.showHomeDrawerChange.emit(this.showDrawer);

  }

}
