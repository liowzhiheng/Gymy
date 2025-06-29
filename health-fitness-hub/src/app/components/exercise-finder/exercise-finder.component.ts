import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-exercise-finder',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise-finder.component.html',
  styleUrl: './exercise-finder.component.css',
  
})
export class ExerciseFinderComponent implements OnInit{
 exercises: any[] = [];
  bodyParts: string[] = ['back', 'chest', 'cardio', 'shoulders', 'upper arms'];
  selectedBodyPart: string = 'back';

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getExercisesByBodyPart(this.selectedBodyPart)
      .subscribe(data => { this.exercises = data; });
  }

  scrollToExerciseFinder(): void {
    // 1. Find the target element you want to scroll to
    const targetElement = document.getElementById('exercise-finder');

    // 2. Find the global sticky header using its class name
    const headerElement = document.querySelector('header.site-header') as HTMLElement;

    // 3. Safety check: Make sure both elements were found before proceeding
    if (!targetElement || !headerElement) {
      console.error('Could not find the target section or the site header.');
      // Fallback to a simple scroll if the header isn't found for some reason
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // 4. Dynamically get the real-time height of the sticky header
    const headerHeight = headerElement.offsetHeight;

    // 5. Calculate the correct position to scroll to
    // This is: the top of the target element, plus current scroll distance, minus the header's height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    // 6. Use the window.scrollTo method to scroll to the precisely calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
