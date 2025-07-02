import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseVideoDetailComponent } from './exercise-video-detail.component';

describe('ExerciseVideoDetailComponent', () => {
  let component: ExerciseVideoDetailComponent;
  let fixture: ComponentFixture<ExerciseVideoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseVideoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseVideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
