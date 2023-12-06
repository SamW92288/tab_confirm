import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrl: './new2.component.css'
})
export class New2Component {

  constructor(private navService:NavigationService){}
  
  changeValue = '';
  textValue = 'Unchanged';

  saveText() {

    this.textValue = this.changeValue;
    this.navService.updateInProgress = false;

  }

  textChanged(){

    this.navService.updateInProgress = true;

  }

}
