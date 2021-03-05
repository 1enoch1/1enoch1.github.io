import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ProfileHeaderComponent } from './layout/header/profile-header/profile-header.component';
import { ProfileFooterComponent } from './layout/footer/profile-footer/profile-footer.component';
import { ProfileContentComponent } from './layout/main-view/profile-content/profile-content.component';
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from 'primeng/button';
import { AboutSectionComponent } from './layout/main-view/profile-content/about-section/about-section/about-section.component';
import { CardModule } from 'primeng/card';
import { SkillsExpSectionComponent } from './layout/main-view/profile-content/skills-exp-section/skills-exp-section/skills-exp-section.component';
import { ProjectsComponent } from './layout/main-view/profile-content/projects/projects.component';




@NgModule({
  declarations: [ProfileContentComponent, ProfileFooterComponent, ProfileHeaderComponent, AboutSectionComponent, SkillsExpSectionComponent, ProjectsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MenubarModule,
    ButtonModule,
    
  ],
  exports: [
    ProfileContentComponent, ProfileFooterComponent, ProfileHeaderComponent, AboutSectionComponent]
})
export class SharedModule { }
