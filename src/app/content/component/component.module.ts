import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    ButtonComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[MessageComponent]
})
export class ComponentModule { }
