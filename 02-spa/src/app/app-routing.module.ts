import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'heroe/:id', component: HeroeComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  //useHash en true es para usar path viejos tipo #
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
