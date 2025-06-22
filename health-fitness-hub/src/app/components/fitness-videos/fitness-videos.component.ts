import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- IMPORT FOR NGMODEL
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-fitness-videos',
  imports: [CommonModule, FormsModule],
  templateUrl: './fitness-videos.component.html',
  styleUrl: './fitness-videos.component.css'
})
export class FitnessVideosComponent {
  videos: any[] = [];
  searchQuery: string = '15 min home workout';

  constructor(private youtubeService: YoutubeService) { }

  searchVideos(): void {
    this.youtubeService.searchVideos(this.searchQuery)
      .subscribe(data => { this.videos = data.contents; });
  }
}
