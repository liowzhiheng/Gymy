import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessVideosComponent } from './fitness-videos.component';

describe('FitnessVideosComponent', () => {
  let component: FitnessVideosComponent;
  let fixture: ComponentFixture<FitnessVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
