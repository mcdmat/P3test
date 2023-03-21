import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
  path:'menu-burger',
  component: MenuBurgerComponent, 
  },
  {
  path:'navbar',
  component: NavbarComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
