import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotwheels } from '../../web/interfaces/hotwheels.interfaces';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HotwheelsService {

    url = environment.server + '/Cars'

    urlFav = environment.server + '/Fav'
    
    //Emite un nuevo valor y me va permitor suscribirme
    private value: BehaviorSubject<Hotwheels> = new BehaviorSubject({} as Hotwheels);

    public currentValue: Observable<Hotwheels> = this.value.asObservable();


    private value2: BehaviorSubject<Hotwheels> = new BehaviorSubject({} as Hotwheels);

    public currentValue2: Observable<Hotwheels> = this.value.asObservable();

    constructor(
    private http: HttpClient
    ) { }


    //Metodo para obtener todos los carros
    GetAllCars(): Observable<Hotwheels[]> {
        return this.http.get<Hotwheels[]>(this.url)
    }

    CreateCar(data: Hotwheels): Observable<Hotwheels> {
        return this.http.post<Hotwheels>(this.url, data)
    }

    EditCar(id: string,data: Hotwheels): Observable<Hotwheels> {
        return this.http.post<Hotwheels>(`${this.urlFav}/${id}`, data)
    }

    AddFav(data: Hotwheels): Observable<Hotwheels>{
        return this.http.post<Hotwheels>(this.urlFav, data)
    }

    GetFav(): Observable<Hotwheels[]> {
        return this.http.get<Hotwheels[]>(this.urlFav)
    }

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
