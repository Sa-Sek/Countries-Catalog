import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebpagesRoutingModule } from './webpages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    WebpagesRoutingModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ]
})
export class WebpagesModule { }
