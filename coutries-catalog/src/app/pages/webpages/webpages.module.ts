import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebpagesRoutingModule } from './webpages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    WebpagesRoutingModule
  ]
})
export class WebpagesModule { }
