import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-fitness-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fitness-videos.component.html',
  styleUrls: ['./fitness-videos.component.css']
})
export class FitnessVideosComponent implements OnInit {
  videos: any[] = [];
  isLoading = false;
  searchPerformed = false;
  showingRecommended = true;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.loadRecommendedVideos();
  }

  loadRecommendedVideos(): void {
    this.isLoading = true;
    this.showingRecommended = true;
    this.youtubeService.searchFitnessVideos('fitness workout beginner').subscribe({
      next: (data) => {
        this.videos = data.contents || [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading recommended videos:', error);
        this.isLoading = false;
      }
    });
  }

  performSearch(query: string): void {
    if (query.trim()) {
      this.isLoading = true;
      this.searchPerformed = true;
      this.showingRecommended = false;
      
      this.youtubeService.searchFitnessVideos(query).subscribe({
        next: (data) => {
          this.videos = data.contents || [];
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error searching videos:', error);
          this.isLoading = false;
        }
      });
    }
  }
}
