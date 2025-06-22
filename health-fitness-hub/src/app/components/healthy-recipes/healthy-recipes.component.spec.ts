import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyRecipesComponent } from './healthy-recipes.component';

describe('HealthyRecipesComponent', () => {
  let component: HealthyRecipesComponent;
  let fixture: ComponentFixture<HealthyRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthyRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthyRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
