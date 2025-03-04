import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path: 'weatherforecast', component: WeatherComponent },  // URL: /mypage
  { path: 'mypage', component: MyPageComponent },  // URL: /mypage
  { path: '', component: HomeComponent },  // URL: /mypage

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
