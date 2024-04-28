import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgFor} from "@angular/common";
import {Review} from "../../interfaces/review";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    MatIcon,
    NgClass,
    NgFor,
    MatCardModule
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input()
  review!: Review;

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }

}
