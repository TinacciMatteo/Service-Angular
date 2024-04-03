// pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true
})
export class PaginationComponent {
  @Input()
  currentPage!: number;
  @Output() prevPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();
  @Output() firstPage = new EventEmitter<void>();
  @Output() lastPage = new EventEmitter<void>();
  constructor() { }
}
