import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotwheels } from '../../web/interfaces/hotwheels.interfaces';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HotwheelsService {

    urlCars = environment.server + '/Cars'

    urlFav = environment.server + '/Fav'
    
    //Emite un nuevo valor y me va permitor suscribirme
    private value: BehaviorSubject<Hotwheels> = new BehaviorSubject({} as Hotwheels);

    public currentValue: Observable<Hotwheels> = this.value.asObservable();


    private value2: BehaviorSubject<Hotwheels> = new BehaviorSubject({} as Hotwheels);

    public currentValue2: Observable<Hotwheels> = this.value2.asObservable();

    constructor(
    private http: HttpClient
    ) { }


    //Metodo para obtener todos los carros
    GetAllCars(): Observable<Hotwheels[]> {
        return this.http.get<Hotwheels[]>(this.urlCars)
    }

    //Metodo para crear un nuevo item
    CreateCar(data: any): Observable<Hotwheels> {
        return this.http.post<Hotwheels>(this.urlCars, data)
    }

    //Metodo para editar un carro
    EditCar(id: string, data: Hotwheels): Observable<Hotwheels> {
        return this.http.post<Hotwheels>(`${this.urlCars}/${id}`, data)
    }

    //Obtener todos los favoritos
    GetFav(): Observable<Hotwheels[]> {
        return this.http.get<Hotwheels[]>(this.urlFav)
    }

    //Agregar a favoritos
    AddFav(data: Hotwheels): Observable<Hotwheels>{
        return this.http.post<Hotwheels>(this.urlFav, data)
    }

    //Eliminar de favoritos
    removeFav(id: string): Observable<Hotwheels> {
        return this.http.delete<Hotwheels>(`${this.urlFav}/${id}`)
    }

    //Le pasamos el nuevo valor
    setCurrentHotwheel(currentValue2: Hotwheels): void {
        this.value.next(currentValue2)
    }

    setCurrentHotwheelRemove(currentValue2: Hotwheels): void {
        this.value2.next(currentValue2)
    }

}
