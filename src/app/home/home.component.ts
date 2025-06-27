import { Component, HostListener } from '@angular/core';
import { DressCodeComponent } from "../dress-code/dress-code.component";
import { InvitacionComponent } from "../invitacion/invitacion.component";
import { EventoComponent } from "../evento/evento.component";
import { RegalosComponent } from "../regalos/regalos.component";
import { GaleriaComponent } from "../galeria/galeria.component";
import { CuentaRegresivaComponent } from "../cuenta-regresiva/cuenta-regresiva.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DressCodeComponent,
    InvitacionComponent,
    EventoComponent,
    RegalosComponent,
    GaleriaComponent,
    CuentaRegresivaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public fechaEvento = new Date('2025-07-12T17:00:00')

  isScrolled = false;
  menuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = offset > 50; // Cambia 50px por el umbral que prefieras
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu() {
    this.menuOpen = false;
  }
}
