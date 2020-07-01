import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import {ClientsComponent} from '../../clients/clients.component';
import {ClientsListComponent} from '../../clients/clients-list/clients-list.component';
import {ClientsRequestsComponent} from '../../clients/clients-requests/clients-requests.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsListComponent,
    ClientsRequestsComponent,
  ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        ReactiveFormsModule
    ]
})
export class ClientsModule { }
