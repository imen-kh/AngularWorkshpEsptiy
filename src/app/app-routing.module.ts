import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ListEventComponent } from './features/events/list-event/list-event.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //lorsque on lance le serveur on tombe sur la page home par defaut
  { path: 'home', component: HomeComponent },
  //lazy loading pour le module events diminue le temps de chargement de l'application si on a bcp de modules
  {
    path: 'events',
    loadChildren: () =>
      import('./features/events/events.module').then((m) => m.EventsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
