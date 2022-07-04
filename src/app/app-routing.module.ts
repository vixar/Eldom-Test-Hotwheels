import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHotwheelsComponent } from './web/components/list-hotwheels/list-hotwheels.component';
import { FavouriteHotwheelsComponent } from './web/components/favourite-hotwheels/favourite-hotwheels.component';
import { CreateHotwheelsComponent } from './web/components/create-hotwheels/create-hotwheels.component';

const routes: Routes = [
  {
    path: "hotwheels",
    pathMatch: 'full',
    component: ListHotwheelsComponent,
    title: "Lista de HotWheels"
  },
  {
    path: "hotwheels/favourite",
    component: FavouriteHotwheelsComponent,
    title: "HotWheels Favoritos"
  },
  {
    path: "hotwheels/create",
    component: CreateHotwheelsComponent,
    title: "Crear HotWheel"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
