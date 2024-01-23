import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule

  ],
  exports:[
    HeaderComponent,
  ]
})
export class LayoutModule { }
