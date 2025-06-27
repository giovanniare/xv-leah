import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, viewChild, ViewChild } from '@angular/core';

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

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.animatedTitle.nativeElement.classList.add(
              'animate__animated',
              'animate__fadeIn',
              'animate__delay-2s'
            );
            this.animatedInfo.nativeElement.classList.add(
              'animate__animated',
              'animate__fadeIn',
              'animate__delay-3s'
            );
            this.animatedDetails.nativeElement.classList.add(
              'animate__animated',
              'animate__fadeIn',
              'animate__delay-4s'
            );
          }
        },
        { threshold: 0.2 }
      );
  
      observer.observe(this.animatedTitle.nativeElement);
    }
  }
}
