import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { DetailsComponent } from './details/details.component';

import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutModule } from '../layout/layout.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from "primeng/table";
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                path:'',
                component:UserComponent
            },
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'repository-list',
                component: RepositoryListComponent
            }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        PaginatorModule,
        AvatarModule,
        InputTextModule,
        LayoutModule,
        CardModule,
        ButtonModule,
        TableModule,
        ChipModule,
        CommonModule 
    ],
    exports: [RouterModule],
    declarations: [
        UserComponent,
        RepositoryListComponent,
        DetailsComponent
    ]
})
export class UserModule { }  