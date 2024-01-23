import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule

  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
