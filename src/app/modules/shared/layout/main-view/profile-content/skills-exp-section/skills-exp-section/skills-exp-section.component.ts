import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'eo-skills-exp-section',
  templateUrl: './skills-exp-section.component.html',
  styleUrls: ['./skills-exp-section.component.sass']
})
export class SkillsExpSectionComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    AOS.init();
  }



}
