import { Routes } from '@angular/router';
import{ExerciseFinderComponent} from './components/exercise-finder/exercise-finder.component';
import { FitnessVideosComponent } from './components/fitness-videos/fitness-videos.component';
import { HealthyRecipesComponent } from './components/healthy-recipes/healthy-recipes.component';
import { ExerciseVideoDetailComponent } from './components/exercise-video-detail/exercise-video-detail.component'; // Import new component





export const routes: Routes = [
     { path: '', redirectTo: '/exercises', pathMatch: 'full' }, 
    { path: 'exercises', component: ExerciseFinderComponent },
    { path: 'videos', component: FitnessVideosComponent },
    { path: 'recipes', component: HealthyRecipesComponent },
      { path: 'exercise-videos/:exerciseName', component: ExerciseVideoDetailComponent }

];
