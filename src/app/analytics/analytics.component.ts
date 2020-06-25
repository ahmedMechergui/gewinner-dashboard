import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private scriptsLoaderService: ScriptsLoaderService, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.loadStylesheets();
    this.loadScripts();
  }


  loadScripts() {
    this.scriptsLoaderService.addScripts(this.renderer2,
      '/assets/vendors/js/charts/apexcharts.min.js',
      '/assets/vendors/js/extensions/tether.min.js',
      '/assets/vendors/js/extensions/shepherd.min.js',
      '/assets/js/scripts/pages/dashboard-analytics.js'
    );
  }


  loadStylesheets() {
    this.scriptsLoaderService.addStylesheets(
      '/assets/css/pages/dashboard-analytics.css',
      '/assets/css/pages/card-analytics.css'
    );
  }

}
