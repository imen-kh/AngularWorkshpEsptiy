import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';


const routes: Routes = [
  // children nestaamlou wa9tli n7ebou na3mlou navigation dakhel component mo3ayan
  // route listevent ki naayet l path events yaffichi listevent dakhel eventscomponent
  { path: '', 
    component: EventsComponent , 
    children:[
  { path: '', component: ListEventComponent },
  {path:'detail/:id', component:DetailEventComponent}
  ]},
  { path: 'tests', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
