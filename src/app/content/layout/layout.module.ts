import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
