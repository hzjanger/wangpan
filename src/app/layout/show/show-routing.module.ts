import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AllfileComponent} from './allfile/allfile.component';

const routes: Routes = [
  { path: 'index', component: MainComponent, children: [
      { path: '', component: AllfileComponent}
    ]},
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
