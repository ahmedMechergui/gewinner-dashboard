import {Injectable, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from './scripts-loader.service';

@Injectable({
  providedIn: 'root'
})

/* =====================
    # Same scripts and stylesheets are imported in multiple components to use list view so
    # this service was created to avoid duplicated code and facilitate maintenance
   ===================== */

export class ListViewLoaderService {
  renderer2: Renderer2;

  constructor(private scriptsLoaderService: ScriptsLoaderService) {
  }


  loadScripts(renderer2: Renderer2): void {
    this.scriptsLoaderService.addScripts(renderer2,
      // '/assets/vendors/js/extensions/dropzone.min.js',
      // '/assets/vendors/js/tables/datatable/datatables.min.js',
      // '/assets/vendors/js/tables/datatable/datatables.buttons.min.js',
      // '/assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js',
      // '/assets/vendors/js/tables/datatable/buttons.bootstrap.min.js',
      // '/assets/vendors/js/tables/datatable/dataTables.select.min.js',
      // '/assets/vendors/js/tables/datatable/datatables.checkboxes.min.js'
      // '/assets/js/scripts/ui/data-list-view.js'
    );
  }

  loadDataListViewScript = async (): Promise<void> => {
    this.scriptsLoaderService.addManyScriptsAsync(
      '/assets/vendors/js/extensions/dropzone.min.js',
      '/assets/vendors/js/tables/datatable/datatables.min.js',
      '/assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js',
      '/assets/vendors/js/tables/datatable/dataTables.select.min.js',
      '/assets/vendors/js/tables/datatable/datatables.buttons.min.js',
      '/assets/vendors/js/tables/datatable/buttons.bootstrap.min.js',
      '/assets/vendors/js/tables/datatable/datatables.checkboxes.min.js',
      '/assets/js/scripts/ui/data-list-view.js'
    ).then(() => {
        const event = document.createEvent('Event');
        event.initEvent('list-script-loaded', true, true);
        console.log('event fired');
        document.dispatchEvent(event);
      }
    );
  };
  // loadDataListViewScript(): void {
  //
  //   this.scriptsLoaderService.addOneScriptAsync('/assets/js/scripts/ui/data-list-view.js').then(
  //     () => {
  //       const event = document.createEvent('Event');
  //       event.initEvent('list-script-loaded', true, true);
  //       console.log('event fired');
  //       document.dispatchEvent(event);
  //     }
  //   );
  // }


  loadStylesheets(): void {
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
