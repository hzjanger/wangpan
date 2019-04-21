import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import {SharedModule} from '../shared/shared.module';
import { AllfileComponent } from './allfile/allfile.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [MainComponent, NavComponent, AllfileComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    SharedModule,
    FileUploadModule
  ]
})
export class ShowModule { }
