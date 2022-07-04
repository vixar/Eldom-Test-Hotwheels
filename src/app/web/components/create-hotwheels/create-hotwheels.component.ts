import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotwheelsService } from '../../../core/services/hotwheels.service';
import { Hotwheels } from '../../interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-create-hotwheels',
  templateUrl: './create-hotwheels.component.html',
  styleUrls: ['./create-hotwheels.component.css']
})
export class CreateHotwheelsComponent implements OnInit {

  tipo: any [] = [];

  constructor(
    private formbuilder: FormBuilder,
    private hotwheelsService: HotwheelsService
  ) { }

   hotwheelsForm = this.formbuilder.group({
    nombre:      ['',Validators.required],
    Description: ['', Validators.required, Validators.maxLength(50)],
    picture:     ['', Validators.required],
    tipo:        this.formbuilder.group({
      id: [''],
      nombre: ['']
    }),
    imagen:     ['']
   })

  ngOnInit() {
    this.tipo = [
      {
        id: 1,
        nombre: "Carro 1"
      },
      {
        id: 2,
        nombre: "Carro 2"
      },
      {
        id: 3,
        nombre: "Carro 3"
      },
      {
        id: 4,
        nombre: "Carro 4"
      }
    ]
    console.log('%c⧭', 'color: #408059', this.tipo);
  }

  CreateHotwheel(): void {

    if(this.hotwheelsForm.valid){

      this.hotwheelsService.CreateCar(this.hotwheelsForm.value).subscribe((resp: Hotwheels) => {
        console.log('%c⧭', 'color: #ff0000', resp);
      })
    } else {
      console.log('%c⧭', 'color: #00e600', 'Error al crear hotwheels');
    }
  }

}
