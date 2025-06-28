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
    const element = document.getElementById('exercise-finder');
    if(element) {
      element.scrollIntoView({behavior: 'smooth', block:'start'});
    }
}
}
