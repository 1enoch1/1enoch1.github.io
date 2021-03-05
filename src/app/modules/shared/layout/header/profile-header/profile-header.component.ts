import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'eo-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass']
})
export class ProfileHeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(){
    this.initiatePage();
  }

  initiatePage(){
    this.items = [
      {
        label: "About",
        icon: "pi pi-fw pi-user"
      },
      {
        label: "Skills",
        icon: "pi pi-fw pi-briefcase",
      },
      {
        label: "Portfolio",
        icon: "pi pi-fw pi-info-circle",
      },
      {
        label: "Contact",
        icon: "pi pi-fw pi-id-card",
      }
    ];
  }

}
