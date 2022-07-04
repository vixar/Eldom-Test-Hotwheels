import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HotwheelsService } from '../../../core/services/hotwheels.service';
import { Hotwheels } from '../../interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() listCars!: Hotwheels;

  item: any [] = [];

  constructor(
    private hotwheelsService: HotwheelsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.item.push(this.listCars);
  }

  ngOnInit() {
    this.hotwheelsService.GetFav().subscribe((resp => {
      this.item = resp;
    }))
  }

}
