import { Component, HostListener } from '@angular/core';
import { OptionService } from 'src/app/core/services/option.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @HostListener('document:click', ['$event'])
  clickout() {
    console.log('teste')
  }
  constructor(private optionService: OptionService){

  }

  open(){
    this.optionService.open();
  }
}
