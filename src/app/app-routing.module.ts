import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/analytics/analytics.module#AnalyticsModule', pathMatch: 'full'},
  {path: 'emails', loadChildren: './modules/emails/emails.module#EmailsModule'},
  {path: 'events', loadChildren: './modules/events/events.module#EventsModule'},
  {path: 'accessories', loadChildren: './modules/accessories/accessories.module#AccessoriesModule'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' , preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
