import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingEventsComponent} from '../../coming-events/coming-events.component';


const routes: Routes = [
  {path: '', component: ComingEventsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
