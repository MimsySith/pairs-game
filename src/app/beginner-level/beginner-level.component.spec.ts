import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerLevelComponent } from './beginner-level.component';

describe('BeginnerLevelComponent', () => {
  let component: BeginnerLevelComponent;
  let fixture: ComponentFixture<BeginnerLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
