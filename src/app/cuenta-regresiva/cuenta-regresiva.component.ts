
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cuenta-regresiva',
  standalone: true,
  imports: [],
  templateUrl: './cuenta-regresiva.component.html',
  styleUrl: './cuenta-regresiva.component.css'
})
export class CuentaRegresivaComponent implements OnInit, OnDestroy {

  targetDate = new Date('2025-07-12T18:00:00');
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  intervalId?: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateCountdown();
      this.intervalId = setInterval(() => this.updateCountdown(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}