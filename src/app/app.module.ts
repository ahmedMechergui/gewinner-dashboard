import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
// import {AnalyticsComponent} from './analytics/analytics.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
// import { EmailsComponent } from './emails/emails.component';
// import { ComingEventsComponent } from './coming-events/coming-events.component';
import {EmailsModule} from './modules/emails/emails.module';
import {EventsModule} from './modules/events/events.module';
import {AnalyticsModule} from './modules/analytics/analytics.module';
import {AccessoriesModule} from './modules/accessories/accessories.module';

// import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // AnalyticsComponent,
    HeaderComponent,
    FooterComponent,
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
    AccessoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
