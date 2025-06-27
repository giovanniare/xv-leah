import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent implements AfterViewInit {
  @ViewChild('animatedTitle', { static: true }) animatedTitle!: ElementRef;
  @ViewChild('animatedInfo', { static: true }) animatedInfo!: ElementRef;
  @ViewChild('animatedDetails', { static: true }) animatedDetails!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const animatedTitle = this.animatedTitle?.nativeElement;
      const animatedInfo = this.animatedInfo?.nativeElement;
      const animatedDetails = this.animatedDetails?.nativeElement;
  
      if ('IntersectionObserver' in window && typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              animatedTitle.classList.add(
                'animate__animated',
                'animate__fadeIn',
                'animate__delay-2s'
              );
              animatedInfo.classList.add(
                'animate__animated',
                'animate__fadeIn',
                'animate__delay-3s'
              );
              animatedDetails.classList.add(
                'animate__animated',
                'animate__fadeIn',
                'animate__delay-4s'
              );
            }
          },
          { threshold: 0.2 }
        );
        
        observer.observe(animatedTitle);
      }
    }
  }
}
