import { Component, HostListener } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  template: ''
})
export class PageBase {
  isMobile: boolean | null = null;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
   this.isMobile = event.target.innerWidth <= 804;
}
  private substription$: Subscription[] =[];
  constructor() { }

  protected subscribe(substription: Subscription){
    this.substription$.push(substription);
  }

  protected unSubscribe(){
    this.substription$.map(sub=> sub.unsubscribe())
  }
  
}
 