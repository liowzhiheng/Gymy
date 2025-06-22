import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-healthy-recipes',
  imports: [CommonModule],
  templateUrl: './healthy-recipes.component.html',
  styleUrl: './healthy-recipes.component.css'
})
export class HealthyRecipesComponent {
  recipe: any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    this.recipeService.getRandomRecipe()
      .subscribe(data => { this.recipe = data.meals[0]; });
  }
}
