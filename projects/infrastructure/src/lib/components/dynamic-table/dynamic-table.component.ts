import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css',
  standalone:false,
})
export class DynamicTableComponent {
  @Input() headers: string[] = [];      // Array of headers
  @Input() data: any[] = [];            // Array of objects (rows)

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() view = new EventEmitter<any>();

  onEdit(row: any) {
    this.edit.emit(row);
  }

  onDelete(row: any) {
    this.delete.emit(row);
  }

  onView(row: any) {
    this.view.emit(row);
  }
}
