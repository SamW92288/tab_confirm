import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})



export class NavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private navService: NavigationService) {}

  tabIndex = 0;
  previousTabIndex = 1;

  ngOnInit(): void {
    this.router.navigate(['new1'],{relativeTo:this.route});
  }

  navigate($event:any){

    // cancel case, we are returning to current tab
    if(this.tabIndex == this.previousTabIndex) {
      return;
    }

    // Check for update in progress and propt user to save changes
    if(this.navService.updateInProgress){

      if(!this.navService.checkForUpates()){
        this.tabIndex = this.previousTabIndex;
        return;
      }

    }

    // Upon navigation, reset update flag
    this.navService.updateInProgress = false;
    this.previousTabIndex = $event.index;
    this.router.navigate([$event.tab.textLabel],{relativeTo:this.route});
  }



}
