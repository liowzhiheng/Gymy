import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-fitness-hub';

//     scrollToExerciseFinder(): void {
//     const targetElement = document.querySelector('.exercise-finder') as HTMLElement;
//     const topNavBar = document.querySelector('.site-title') as HTMLElement;
//     const header = document.querySelector('main-nav') as HTMLElement;

//     if (topNavBar && header) {
//       let totalHeight = header.offsetHeight;
//       if (topNavBar) {
//         totalHeight += topNavBar.offsetHeight;
//       }

//       const elementPosition = targetElement.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - totalHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     } else if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' , block: 'start' });
//     }
// }
}
