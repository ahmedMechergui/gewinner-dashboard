import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor(private scriptsLoaderService: ScriptsLoaderService, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.loadStylesheets();
    this.loadScripts();
  }

  loadScripts() {
    this.scriptsLoaderService.addScripts(this.renderer2,
      '/assets/vendors/js/extensions/dropzone.min.js',
      '/assets/vendors/js/tables/datatable/datatables.min.js',
      '/assets/vendors/js/tables/datatable/datatables.buttons.min.js',
      '/assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js',
      '/assets/vendors/js/tables/datatable/buttons.bootstrap.min.js',
      '/assets/vendors/js/tables/datatable/dataTables.select.min.js',
      '/assets/vendors/js/tables/datatable/datatables.checkboxes.min.js',
      '/assets/js/scripts/ui/data-list-view.js'
    );
  }


  loadStylesheets() {
    this.scriptsLoaderService.addStylesheets(
       '/assets/css/plugins/file-uploaders/dropzone.css',
      '/assets/css/pages/data-list-view.css',
      '/assets/vendors/css/vendors.min.css',
      '/assets/vendors/css/tables/datatable/datatables.min.css',
      // '/assets/vendors/css/file-uploaders/dropzone.min.css',
      '/assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css',
      '/assets/css/colors.css'
    );
  }

}
