import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';

import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {EmailsModule} from './modules/emails/emails.module';
import {EventsModule} from './modules/events/events.module';
import {AnalyticsModule} from './modules/analytics/analytics.module';
import {AccessoriesModule} from './modules/accessories/accessories.module';
import {MoovobrainModule} from './modules/moovobrain/moovobrain.module';
import {JobInternshipModule} from './modules/job-internship/job-internship.module';
import {ClientsModule} from './modules/clients/clients.module';
import {TeamMembersModule} from './modules/team-members/team-members.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // AnalyticsComponent,
    HeaderComponent,
    FooterComponent,
    // TeamMembersComponent,
    // ClientsComponent,
    // ClientsListComponent,
    // ClientsRequestsComponent,
    // JobInternshipRequestComponent
    // MoovobrainComponent,
    // MoovobrainOrdersComponent,
    // MoovobrainTestsComponent,
    // AccessoriesOrdersComponent,
    // AccessoriesProductsComponent,
    // AccessoriesComponent
    // EmailsComponent,
    // ComingEventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AnalyticsModule,
    EmailsModule,
    EventsModule,
    AccessoriesModule,
    MoovobrainModule,
    JobInternshipModule,
    ClientsModule,
    TeamMembersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
