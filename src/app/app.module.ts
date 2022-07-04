import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHotwheelsComponent } from './web/components/list-hotwheels/list-hotwheels.component';
import { FavouriteHotwheelsComponent } from './web/components/favourite-hotwheels/favourite-hotwheels.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HotwheelsService } from './core/services/hotwheels.service';
import { HeaderComponent } from './web/components/header/header.component';
import { CreateHotwheelsComponent } from './web/components/create-hotwheels/create-hotwheels.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHotwheelsComponent,
    FavouriteHotwheelsComponent,
    CreateHotwheelsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ListHotwheelsComponent,
    FavouriteHotwheelsComponent,
    CreateHotwheelsComponent,
    HeaderComponent
  ],
  providers: [HotwheelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
