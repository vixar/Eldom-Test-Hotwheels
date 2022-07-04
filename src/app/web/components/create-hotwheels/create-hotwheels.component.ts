import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
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
    Description: ['', Validators.required],
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
  }

  CreateHotwheel(): void {

    if(this.hotwheelsForm.valid){

      this.hotwheelsService.CreateCar(this.hotwheelsForm.value).subscribe((resp: Hotwheels) => {
        if(resp){
          // this.alertAdd();
        }
      })
    } else {
      console.log('%c⧭', 'color: #00e600', 'Error al crear hotwheels');
    }
  }


  // alertAdd(): void {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'bottom-end',
  //     timer: 2000,
  //   });
  //   Toast.fire({
  //     text: 'Agregado nuevo Hotwheel',
  //     icon: 'success',
  //     iconColor: 'red',
  //     showConfirmButton: false,
  //   });
  // }

}
