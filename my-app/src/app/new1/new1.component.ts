import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrl: './new1.component.css'
})
export class New1Component {

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
