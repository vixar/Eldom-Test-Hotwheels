import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { HotwheelsService } from './core/services/hotwheels.service';
import { Hotwheels } from './web/interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotWheels';
  
  Count!: number;

  constructor(
    private hotwheelsService: HotwheelsService
  ) { }

  ngOnInit() {
    this.hotwheelsService.currentValue.subscribe((resp: number) => {
      this.Count = resp;
    })

    this.hotwheelsService.currentValue2.subscribe((resp: number) => {
      this.Count = resp;
    })
  }
}
