import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // REQUIRED: Import FormsModule
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-fitness-videos',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule // REQUIRED: Add FormsModule to the component's imports
  ], 
  templateUrl: './fitness-videos.component.html',
  styleUrls: ['./fitness-videos.component.css']
})
export class FitnessVideosComponent implements OnInit {
  videos: any[] = [];
  isLoading = false;
  searchPerformed = false;
  showingRecommended = true;
  
  // REQUIRED: Add the searchQuery property for ngModel
  searchQuery: string = ''; 

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

  // UPDATED: This method now uses this.searchQuery and takes no arguments
  performSearch(): void {
    const query = this.searchQuery;

    if (query.trim()) {
      this.isLoading = true;
      this.searchPerformed = true;
      this.showingRecommended = false;
      
      this.youtubeService.searchFitnessVideos(query).subscribe({
        next: (data: any) => {
          const videoItems = data?.contents || [];
          this.videos = videoItems.filter((item: any) => item && item.video);
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error searching videos:', error);
          this.videos = []; 
          this.isLoading = false;
        }
      });
    }
  }
}
