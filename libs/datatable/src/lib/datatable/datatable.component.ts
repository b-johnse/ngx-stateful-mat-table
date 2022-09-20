import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DatatableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
