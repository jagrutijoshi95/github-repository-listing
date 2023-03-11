import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';  
import { RepositoryComponent } from './repository.component';
import { ListComponent } from './list/list.component';  

const routes: Routes = [  
 { path: '', component: RepositoryComponent }  
];  

 @NgModule({  
    imports: [RouterModule.forChild(routes)],  
    exports: [RouterModule], declarations: [RepositoryComponent,ListComponent]  
})  
export class RepositoryModule { }  