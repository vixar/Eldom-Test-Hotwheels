import {
  Component,
  OnInit
} from '@angular/core';
import { HotwheelsService } from '../../../core/services/hotwheels.service';
import { Hotwheels } from '../../interfaces/hotwheels.interfaces';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-hotwheels',
  templateUrl: './list-hotwheels.component.html',
  styleUrls: ['./list-hotwheels.component.css'],
})
export class ListHotwheelsComponent implements OnInit {
  ListCars: Hotwheels[] = [];

  count: number = 0;

  cars: Hotwheels[] = [];

  constructor(private hotwheelsService: HotwheelsService) {}

  ngOnInit() {
    this.GetAllCars();
    // this.GetFavCars();
  }

  //Obtengo todos los hotwheels
  GetAllCars(): void {
    this.hotwheelsService.GetAllCars().subscribe((resp: Hotwheels[]) => {
      this.cars = resp;
    });
  }

  GetFavCars(): void {
    this.hotwheelsService.GetFav().subscribe((resp: Hotwheels[]) => {
      this.ListCars = resp;
    });
  }

  // Agrega un nuevo objeto a la lista de favoritos
  addFavourite(obj: Hotwheels): void {

    const Exists = !this.ListCars.some((x) => x.id === obj.id)

    if (Exists === true) {
      this.ListCars.push(obj);

      this.count = this.count + 1;
     
      this.hotwheelsService.setCurrentHotwheel(this.count);  

      // this.hotwheelsService.AddFav(obj).subscribe((resp) => {
      //   if (resp) {
      //     // this.alertAdd();
      //   } else {
      //     console.log(
      //       '%c⧭',
      //       'color: #86bf60',
      //       'Error, No se agrego a favorito'
      //     );
      //   }
      // });

    } else if(Exists === false) {
      //Recorre la lista e elimina el car selecionado
      
      this.ListCars.forEach(function (x, index, object) {
          if (x.id === obj.id) {
            object.splice(index, 1);
          }
        });
        
      this.count = this.count - 1;

      this.hotwheelsService.setCurrentHotwheelRemove(this.count)

      // this.hotwheelsService.removeFav(obj.id).subscribe((resp: Hotwheels) => {
      //   if (resp) {
      //     // this.alertRemoved();
      //   } else {
      //     console.log('%c⧭', 'color: #9c66cc', 'Error al eliminar hotwheels');
      //   }
      // });
    }
  }

  // alertAdd(): void {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'bottom-end',
  //     timer: 2000,
  //   });
  //   Toast.fire({
  //     text: 'Agregado a favoritos',
  //     icon: 'success',
  //     iconColor: 'red',
  //     showConfirmButton: false,
  //   });
  // }

  // alertRemoved(): void {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'bottom-end',
  //     timer: 2000,
  //   });
  //   Toast.fire({
  //     text: 'Eliminado de favoritos',
  //     icon: 'error',
  //     iconColor: 'red',
  //     showConfirmButton: false,
  //   });
  // }
}
