import { Component } from '@angular/core';
import { HotwheelsService } from './core/services/hotwheels.service';
import { Hotwheels } from './web/interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotWheels';
  
  AddFavourite!: Hotwheels;

  constructor(
    private hotwheelsService: HotwheelsService
  ) { }
  
  ngOnInit() {
    this.hotwheelsService.currentValue.subscribe((resp: Hotwheels) => {
      this.AddFavourite = resp;
    })

    this.hotwheelsService.currentValue2.subscribe((resp: Hotwheels) => {
      console.log('%c⧭', 'color: #f200e2', resp);
    })
  
  }
}
