import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErroValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario( control: FormControl ): Promise<ErroValidate> | Observable<ErroValidate> {
    if ( !control.value ) {
      return Promise.resolve( null );
    }
    return new Promise( ( resolve, reject ) => {
      setTimeout( () => {
          if ( control.value === 'strider' ) {
            resolve( { existe: true } );
          } else {
            resolve(null);
          }
        }, 3500);
    });
  }

  noChris( control: FormControl): ErroValidate {
    if ( control.value.toLowerCase() === 'christian' ) {
      return {
        noChris: true
      };
    }
    return null;
  }

  passwordIguales( pass1Name: string, pass2Name: string ) {
    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors( null );
      } else {
        pass2Control.setErrors( { noEsIgual: true } );
      }
     };
  }
}
