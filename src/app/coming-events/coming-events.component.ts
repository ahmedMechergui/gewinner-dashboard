import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-coming-events',
  templateUrl: './coming-events.component.html',
  styleUrls: ['./coming-events.component.css']
})
export class ComingEventsComponent implements OnInit {

  constructor(private scriptsLoaderService: ScriptsLoaderService, private renderer2: Renderer2) {
  }


  ngOnInit(): void {
    this.loadStylesheets();
    this.loadScripts();
  }

  loadScripts() {
    this.scriptsLoaderService.addScripts(this.renderer2,
      '/assets/vendors/js/extensions/moment.min.js',
      '/assets/vendors/js/calendar/extensions/daygrid.min.js',
      '/assets/vendors/js/calendar/extensions/timegrid.min.js',
      '/assets/vendors/js/calendar/extensions/interactions.min.js',
      '/assets/vendors/js/pickers/pickadate/picker.js',
      '/assets/vendors/js/pickers/pickadate/picker.date.js',
      '/assets/js/scripts/extensions/fullcalendar.js',
      '/assets/vendors/js/calendar/fullcalendar.min.js'
    );
  }

  //    /assets/vendors/css/calendars/fullcalendar.min.css
//    /assets/vendors/css/calendars/extensions/daygrid.min.css


//    /assets/css/core/menu/menu-types/vertical-menu.css
//    /assets/css/core/colors/palette-gradient.css

  loadStylesheets() {
    this.scriptsLoaderService.addStylesheets(
      '/assets/vendors/css/calendars/fullcalendar.min.css',
      '/assets/vendors/css/calendars/extensions/daygrid.min.css',
      '/assets/vendors/css/calendars/extensions/timegrid.min.css',
      '/assets/vendors/css/pickers/pickadate/pickadate.css',
      '/assets/css/plugins/calendars/fullcalendar.css',
    );
  }
}
