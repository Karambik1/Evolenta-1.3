import { Component } from '@angular/core';
import { DatePipe, NgFor } from "@angular/common";
import { PlusFivePipePipe } from './plus-five-pipe-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [DatePipe, NgFor, PlusFivePipePipe],
  styleUrl: './app.css'
})
export class App {
array = [
    {
      name: "Item_1"
    },
    {
      name: "Item_2"
    },
    {
      name: "Item_3"
    }
  ];
  date_now = new Date();
  number = 12;
} 