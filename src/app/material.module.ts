import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
/* import { MatPaginatorModule, MatToolbarModule } from '@angular/material'; */

@NgModule({
    imports: [
        MatTableModule
    ],
    exports: [
        MatTableModule
    ]
})

export class MaterialModule { }
