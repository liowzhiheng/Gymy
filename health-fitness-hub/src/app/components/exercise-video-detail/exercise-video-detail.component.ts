import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-exercise-video-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-video-detail.component.html',
  styleUrls: ['./exercise-video-detail.component.css']
})
export class ExerciseVideoDetailComponent implements OnInit {
  exerciseName: string | null = null;
  recommendedVideos: any[] = [];
  isLoadingVideos = true;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const encodedExerciseName = params.get('exerciseName');
      if (encodedExerciseName) {
    
        this.exerciseName = decodeURIComponent(encodedExerciseName); 
        this.loadRecommendedVideos(this.exerciseName);
      }
    });
  }

  loadRecommendedVideos(name: string): void {
    this.isLoadingVideos = true;
    const query = `${name} exercise tutorial`;

    this.youtubeService.searchFitnessVideos(query).subscribe({
      next: (data: any) => {
        const videoItems = data?.contents || [];
        this.recommendedVideos = videoItems.filter((item: any) => item && item.video);
        this.isLoadingVideos = false;
      },
      error: (error: any) => {
        console.error('Error searching videos:', error);
        this.recommendedVideos = [];
        this.isLoadingVideos = false;
      }
    });
  }
}