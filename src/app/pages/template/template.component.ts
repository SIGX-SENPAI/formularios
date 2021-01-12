import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises: any[] = [];

  usuario = {
    nombre: 'christian',
    apellido: 'bernuy',
    correo: 'chchuq@hot.com',
    pais: '',
    genero: 'M',
  };

  constructor( private PaisService: PaisService) { }


  ngOnInit() {
    this.PaisService.getpaises().subscribe( paises => {
      this.paises = paises;
      this.paises.unshift(
        {
          nombre: '[Seleccion pais]',
          codigo: '',
        }
      );
     });
  }

  guardar( forma: NgForm ) {
    console.log(forma);
    if ( forma.invalid ) {
      Object.values( forma.controls ).forEach( control => { control.markAsTouched(); });
    }
    return;
  }
}
