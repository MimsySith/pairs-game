import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLevelComponent } from './expert-level.component';

describe('ExpertLevelComponent', () => {
  let component: ExpertLevelComponent;
  let fixture: ComponentFixture<ExpertLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
