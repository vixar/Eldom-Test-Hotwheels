import {
  Component,
  OnInit,
  Input
} from '@angular/core';
// import Swal from 'sweetalert2';
import { HotwheelsService } from '../../../core/services/hotwheels.service';
import { Hotwheels } from '../../interfaces/hotwheels.interfaces';

@Component({
  selector: 'app-favourite-hotwheels',
  templateUrl: './favourite-hotwheels.component.html',
  styleUrls: ['./favourite-hotwheels.component.css'],
})
export class FavouriteHotwheelsComponent implements OnInit {
  @Input() listCars: Hotwheels[] = [];

  constructor(private hotwheelsService: HotwheelsService) {}

  ngOnInit() {
    // this.GetFavCars();
  }

  GetFavCars(): void {
    this.hotwheelsService.GetFav().subscribe((resp: Hotwheels[]) => {
      this.listCars = resp;
    });
  }

  // Agrega un nuevo objeto a la lista de favoritos
  removedFavourite(obj: Hotwheels): void {
    
    this.listCars.forEach(function (x, index, object) {
      if (x.id === obj.id) {
        object.splice(index, 1);
      }
    });

    this.hotwheelsService.removeFav(obj.id).subscribe((resp: Hotwheels) => {
      if (resp) {
        // this.alertRemove();
      } else {
        console.log('%c⧭', 'color: #9c66cc', 'Error al eliminar hotwheels');
      }
    });
  }

  // alertRemove(): void {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'bottom-end',
  //     timer: 3000,
  //   });
  //   Toast.fire({
  //     text: 'Eliminado de la lista de favoritos',
  //     icon: 'error',
  //     iconColor: 'red',
  //     showConfirmButton: false,
  //   });
  // }
}
