import { Component, EventEmitter, Input, Output, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Ensure CommonModule is imported

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to the imports array
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() loaderOn!: boolean;
  @Output() loaderOnChange = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2) {}
  isLoading = false;
  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }

    // Simulate an async operation
    setTimeout(() => {
      this.isLoading = true;
      this.loaderOnChange.emit(true);
    }, 10000); // Hide the loader after 12 seconds
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }
  }

  handleVisibilityChange() {
    if (typeof document !== 'undefined') {
      const loaderOverlay = document.querySelector('.loader-overlay') as HTMLElement;
      const butterfly = document.querySelector('.butterfly') as HTMLElement;
      const loadingBar = document.querySelector('.bar') as HTMLElement;
      const leftHalf = document.querySelector('.left-half') as HTMLElement;
      const rightHalf = document.querySelector('.right-half') as HTMLElement;

      if (document.hidden) {
        // Pause animations
        this.renderer.setStyle(loaderOverlay, 'animation-play-state', 'paused');
        this.renderer.setStyle(butterfly, 'animation-play-state', 'paused');
        this.renderer.setStyle(loadingBar, 'animation-play-state', 'paused');
        this.renderer.setStyle(leftHalf, 'animation-play-state', 'paused');
        this.renderer.setStyle(rightHalf, 'animation-play-state', 'paused');
      } else {
        // Resume animations
        this.renderer.setStyle(loaderOverlay, 'animation-play-state', 'running');
        this.renderer.setStyle(butterfly, 'animation-play-state', 'running');
        this.renderer.setStyle(loadingBar, 'animation-play-state', 'running');
        this.renderer.setStyle(leftHalf, 'animation-play-state', 'running');
        this.renderer.setStyle(rightHalf, 'animation-play-state', 'running');
      }
    }
  }
}
