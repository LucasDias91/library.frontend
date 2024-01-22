import { Subscription } from "rxjs";


export class PageBase {
  private substription$: Subscription[] =[];
  constructor() { }

  protected subscribe(substription: Subscription){
    this.substription$.push(substription);
  }

  protected unSubscribe(){
    this.substription$.map(sub=> sub.unsubscribe())
  }
}
 