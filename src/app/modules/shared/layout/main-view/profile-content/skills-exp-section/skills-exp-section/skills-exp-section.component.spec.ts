import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExpSectionComponent } from './skills-exp-section.component';

describe('SkillsExpSectionComponent', () => {
  let component: SkillsExpSectionComponent;
  let fixture: ComponentFixture<SkillsExpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsExpSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsExpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
