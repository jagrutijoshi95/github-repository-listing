import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'list',  
    loadChildren: () => import('./repository/repository.module')  
    .then(m => m.RepositoryModule)  
 },
 {
  path:'',
  redirectTo:'list'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
