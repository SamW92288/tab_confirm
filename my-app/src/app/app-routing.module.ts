import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [{path:'new1',component:New1Component},{path:'new2',component:New2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
