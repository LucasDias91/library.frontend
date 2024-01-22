import { FormControl } from '@angular/forms';

export function TitleValidator() {
    
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
      var  authNameControl = control.parent.get('authorName') as FormControl;
      var  editionYearControl = control.parent.get('editionYear') as FormControl;
      if(authNameControl.value){
        authNameControl.setValue(null);
      }
      if(editionYearControl.value){
        editionYearControl.setValue(null);
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
      if(editionYearControl.value){
        editionYearControl.setValue(null);
      }

      return null;
    };
  }