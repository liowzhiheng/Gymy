import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFinderComponent } from './exercise-finder.component';

describe('ExerciseFinderComponent', () => {
  let component: ExerciseFinderComponent;
  let fixture: ComponentFixture<ExerciseFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
