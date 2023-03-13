import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';

import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
    imports: [SkeletonModule],
    exports: [
        RouterModule,
        HeaderComponent,
        LoaderComponent
    ],
    declarations: [
        HeaderComponent,
        LoaderComponent
    ]
})
export class LayoutModule { }  