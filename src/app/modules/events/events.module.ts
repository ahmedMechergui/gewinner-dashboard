import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventsRoutingModule} from './events-routing.module';
import {ComingEventsComponent} from '../../coming-events/coming-events.component';
import {ArticlesComponent} from '../../articles/articles.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDropzoneModule} from 'ngx-dropzone';


@NgModule({
  declarations: [
    ComingEventsComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule
  ]
})
export class EventsModule {
}
