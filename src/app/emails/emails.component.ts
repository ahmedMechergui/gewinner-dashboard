import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css'],
  // encapsulation: ViewEncapsulation.None
})

// '../../assets/css/pages/app-email.css',
//   '../../assets/vendors/css/vendors.min.css',
//   '../../assets/vendors/css/editors/quill/katex.min.css',
//   '../../assets/vendors/css/editors/quill/monokai-sublime.min.css',
//   '../../assets/vendors/css/editors/quill/quill.snow.css'

export class EmailsComponent implements OnInit {

  constructor(private scriptsLoaderService: ScriptsLoaderService, private renderer2: Renderer2) {
    this.loadStylesheets();
  }

  ngOnInit(): void {
    this.loadScripts();
  }


  loadScripts() {
    this.scriptsLoaderService.addScripts(this.renderer2,
      '/assets/vendors/js/editors/quill/katex.min.js',
      '/assets/vendors/js/editors/quill/highlight.min.js',
      '/assets/vendors/js/editors/quill/quill.min.js',
      '/assets/js/scripts/pages/app-email.js'
    );
  }

  loadStylesheets() {
    this.scriptsLoaderService.addStylesheets(
      '/assets/css/pages/app-email.css',
      '/assets/vendors/css/editors/quill/katex.min.css',
      '/assets/vendors/css/editors/quill/monokai-sublime.min.css',
      '/assets/vendors/css/editors/quill/quill.snow.css'
    );
  }

}
