import {Component, EventEmitter, Output} from '@angular/core';
import {MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {NgFor, NgIf} from "@angular/common";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatSelectionList,
    MatListOption,
    MatExpansionModule,
    NgIf,
    NgFor,
    MatDivider
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();

  categories: string[] = ['guitars', 'bass'];

  onShowCategory(category : string): void {
    this.showCategory.emit(category);
  }

}
