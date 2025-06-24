import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DressCodeComponent } from './dress-code/dress-code.component';
import { EventoComponent } from './evento/evento.component';
import { RegalosComponent } from './regalos/regalos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InvitacionComponent } from './invitacion/invitacion.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'invitacion', component: InvitacionComponent },
    { path: 'codigo-vestimenta', component: DressCodeComponent },
    { path: 'evento', component: EventoComponent },
    { path: 'regalos', component: RegalosComponent },
    { path: 'galeria', component: GaleriaComponent },
];
