import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-hotwheels',
  templateUrl: './create-hotwheels.component.html',
  styleUrls: ['./create-hotwheels.component.css']
})
export class CreateHotwheelsComponent implements OnInit {

  tipo: any [] = []

  constructor(
    private formbuilder: FormBuilder
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
      }
    ]
    console.log('%c⧭', 'color: #408059', this.tipo);
  }

  CreateHotwheel(): void {
    console.log('%c⧭', 'color: #cc0036', this.hotwheelsForm.value);
    
  }

}
