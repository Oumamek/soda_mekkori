import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {

  static emailCheck(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const email = controls.get(controlName);
      const checkbox = controls.get(checkControlName);

      if (email!.value === '' &&  checkbox!.value ) {
        controls.get(controlName)!.setErrors(null);
        return null;
      } 
      else {
        
        return null;
      }
    };
  }
}