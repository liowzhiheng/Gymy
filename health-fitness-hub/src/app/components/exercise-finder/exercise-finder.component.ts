import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../services/exercise.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-exercise-finder',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise-finder.component.html',
  styleUrl: './exercise-finder.component.css',
})
export class ExerciseFinderComponent implements OnInit {
  exercises: any[] = [];
  bodyParts: string[] = ['back', 'chest', 'cardio', 'shoulders', 'upper arms'];
  selectedBodyPart: string = 'back';

 

  constructor(
    private exerciseService: ExerciseService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getExercisesByBodyPart(this.selectedBodyPart)
      .subscribe(data => {
        this.exercises = data;
        
      });
  }

  
  goToExerciseVideosPage(exerciseName: string): void {
    
    const encodedExerciseName = encodeURIComponent(exerciseName);
    this.router.navigate(['/exercise-videos', encodedExerciseName]);
  }

  scrollToExerciseFinder(): void {
    const targetElement = document.getElementById('exercise-finder');
    const headerElement = document.querySelector('header.site-header') as HTMLElement;

    if (!targetElement || !headerElement) {
      console.error('Could not find the target section or the site header.');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const headerHeight = headerElement.offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}