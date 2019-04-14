import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DevelopmentPageComponent } from './pages/develop/development';
import { PreviewComponent } from './pages/preview/preview.component';
import { ConfigsComponent } from './pages/configs/configs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'detail', component: DetailComponent},
  { path: 'develope', component: DevelopmentPageComponent},
  { path: 'preview', component: PreviewComponent},
  { path: 'config', component: ConfigsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }