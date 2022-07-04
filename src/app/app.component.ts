import { Component, EventEmitter, Output } from '@angular/core';
import { HotwheelsService } from './core/services/hotwheels.service';
import { Hotwheels } from './web/interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotWheels';
  
  @Output() AddFav = new EventEmitter();
  AddFavourite!: Hotwheels;

  constructor(
    private hotwheelsService: HotwheelsService
  ) { }
  
  ngOnInit() {
    this.hotwheelsService.currentValue.subscribe((resp: Hotwheels) => {
      this.AddFavourite = resp;
    })
  }
}
