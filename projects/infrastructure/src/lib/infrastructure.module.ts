import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

@NgModule({
    declarations: [DynamicTableComponent],
    imports: [CommonModule],
    exports: [DynamicTableComponent]  // Exporting so it can be used outside the library
})
export class InfrastructureModule { }
