import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        MatTableModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatTableModule,
        MatInputModule,
        MatFormFieldModule
    ]
})

export class MaterialModule { }
