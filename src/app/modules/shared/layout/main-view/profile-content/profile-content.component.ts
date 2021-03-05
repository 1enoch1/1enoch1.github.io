import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eo-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.sass']
})
export class ProfileContentComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200)

  }
  
  downloadCV(){}

  openFacebookSocial(){}
  
}
