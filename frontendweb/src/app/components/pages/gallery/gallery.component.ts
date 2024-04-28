import { Component } from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    {src:'/assets/guitar1.jpg',text:'Guitar 1'},
    {src:'/assets/guitar2.jpg',text:'Guitar 2'},
    {src:'/assets/guitar3.jpg',text:'Guitar 3'},
    {src:'/assets/guitar4.jpg',text:'Guitar 4'},
    {src:'/assets/guitar1.jpg',text:'Guitar 5'},
    {src:'/assets/guitar2.jpg',text:'Guitar 6'},
    {src:'/assets/guitar3.jpg',text:'Guitar 7'},
    {src:'/assets/guitar4.jpg',text:'Guitar 8'},
    {src:'/assets/guitar1.jpg',text:'Guitar 9'},
    {src:'/assets/guitar2.jpg',text:'Guitar 10'},
    {src:'/assets/guitar3.jpg',text:'Guitar 11'},
    {src:'/assets/guitar4.jpg',text:'Guitar 12'}
    ];
}
