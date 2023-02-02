import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoUserComponent } from './no-user/no-user/no-user.component';

const routes: Routes = [
  {path: 'no-user', component: NoUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
