import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/analytics/analytics.module#AnalyticsModule', pathMatch: 'full'},
  {path: 'emails', loadChildren: './modules/emails/emails.module#EmailsModule'},
  {path: 'events', loadChildren: './modules/events/events.module#EventsModule'},
  {path: 'accessories', loadChildren: './modules/accessories/accessories.module#AccessoriesModule'},
  {path: 'moovobrain', loadChildren: './modules/moovobrain/moovobrain.module#MoovobrainModule'},
  {path: 'join-us', loadChildren: './modules/job-internship/job-internship.module#JobInternshipModule'},
  {path: 'clients', loadChildren: './modules/clients/clients.module#ClientsModule'},
  {path: 'team', loadChildren: './modules/team-members/team-members.module#TeamMembersModule'},
  {path : '**' , redirectTo : ''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
