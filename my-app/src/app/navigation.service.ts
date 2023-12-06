import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public updateInProgress:boolean = false;

  constructor() { }

  checkForUpates(){

    if(this.updateInProgress){
      return confirm("You have unsaved Data. Continue navigation?!\nEither OK or Cancel.")
    }

    return true;

  }

}
