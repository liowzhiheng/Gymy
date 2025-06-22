import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-healthy-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './healthy-recipes.component.html',
  styleUrl: './healthy-recipes.component.css'
})
export class HealthyRecipesComponent {
  searchQuery: string = '1 large apple';
  // The API returns a single object, not an array
  analysisResult: any = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private recipeService: RecipeService) {}

  onAnalyze(): void {
    if (!this.searchQuery) {
      return;
    }

    this.isLoading = true;
    this.analysisResult = null;
    this.errorMessage = null;

    this.recipeService.getNutritionInfo(this.searchQuery).subscribe({
      next: (data) => {
        console.log('API Response:', data);
        // Edamam returns a 'parsed' array. We'll take the first result.
        if (data.parsed && data.parsed.length > 0) {
          this.analysisResult = data.parsed[0].food;
        } else {
          this.errorMessage = 'Could not find nutrition data for that food. Please try a different query.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to analyze food. Please check the query and try again.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}