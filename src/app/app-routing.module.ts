import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './layouts/website/website.component';
import { WebsiteRoute } from './core/routes/website-route';

const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: '', component: WebsiteComponent, children: WebsiteRoute },//webpage route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
