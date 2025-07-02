import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../services/exercise.service';
import { Router } from '@angular/router'; // NEW: Import Router
// Remove YoutubeService import and related properties/methods for direct video display

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

  // Removed properties related to direct video display (recommendedVideos, isLoadingVideos, showVideoSection, selectedExerciseName)

  constructor(
    private exerciseService: ExerciseService,
    private router: Router // NEW: Inject Router
  ) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getExercisesByBodyPart(this.selectedBodyPart)
      .subscribe(data => {
        this.exercises = data;
        // No need to hide videos here anymore as they are on a separate page
      });
  }

  // NEW: Method to navigate to the exercise video detail page
  goToExerciseVideosPage(exerciseName: string): void {
    // Encode the exercise name to handle spaces and special characters in the URL
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