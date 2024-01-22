import { FormControl } from '@angular/forms';

export function TitleValidator() {
    
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
      var  authNameControl = control.parent.get('authorName') as FormControl;
      var  editionYearControl = control.parent.get('editionYear') as FormControl;

      if(authNameControl.value && control.value){
        authNameControl.setValue(null);
      }
      if(editionYearControl.value && control.value){
        editionYearControl.setValue(null);
      }

      if(control.value != null && authNameControl.invalid){
        authNameControl.updateValueAndValidity();
      }

      if(control.value != null && editionYearControl.invalid){
        editionYearControl.updateValueAndValidity();
      }

      if(control.value == null && authNameControl.value == null && editionYearControl.value == null){
        return {invalid: true}
      }
      return null;
    };
  }

  export function AuthorValidator() {
    
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
      var  editionYearControl = control.parent.get('editionYear') as FormControl;
      var  titleControl = control.parent.get('title') as FormControl;
      if(editionYearControl.value){
        editionYearControl.setValue(null);
      }

      if(control.value != null && titleControl.invalid){
        titleControl.updateValueAndValidity();
      }

      if(control.value != null && editionYearControl.invalid){
        editionYearControl.updateValueAndValidity();
      }

      if(control.value == null && editionYearControl.value == null && titleControl.value == null) {
        return {invalid: true}
      }

      return null;
    };
  }

  export function YearValidator() {
    
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
      var  authNameControl = control.parent.get('authorName') as FormControl;
      var  titleControl = control.parent.get('title') as FormControl;

      if(control.value != null && titleControl.invalid){
        titleControl.updateValueAndValidity();
      }

      if(control.value != null && authNameControl.invalid){
        authNameControl.updateValueAndValidity();
      }

      if(control.value == null && authNameControl.value == null && titleControl.value == null){
        return {invalid: true}
      }
      return null;
    };
  }