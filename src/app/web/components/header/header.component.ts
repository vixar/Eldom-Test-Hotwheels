import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HotwheelsService } from '../../../core/services/hotwheels.service';
import { Hotwheels } from '../../interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Count!: number;

  constructor() {}

  ngOnInit() {}

}
