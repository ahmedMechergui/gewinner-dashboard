import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ListViewLoaderService} from '../list-view-loader.service';
import {OrdersListManagementService} from '../orders-list-management.service';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, AfterViewInit {


  form: FormGroup;
  files: File[] = [];
  selectedElementIndex: number;
  articlesArray = [
    {
      image: '/assets/images/articles/article-1.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Ben Ahmed',
      date: new Date('2020-07-21'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-2.jpg',
      title: 'We are the future',
      author: 'John Doe',
      date: new Date('2020-07-18'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-3.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Doe',
      date: new Date('2020-07-06'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-1.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Ben Ahmed',
      date: new Date('2020-07-21'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-2.jpg',
      title: 'We are the future',
      author: 'John Doe',
      date: new Date('2020-07-18'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-3.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Doe',
      date: new Date('2020-07-06'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-1.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Ben Ahmed',
      date: new Date('2020-07-21'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-2.jpg',
      title: 'We are the future',
      author: 'John Doe',
      date: new Date('2020-07-18'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-3.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Doe',
      date: new Date('2020-07-06'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-1.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Ben Ahmed',
      date: new Date('2020-07-21'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-2.jpg',
      title: 'We are the future',
      author: 'John Doe',
      date: new Date('2020-07-18'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    },
    {
      image: '/assets/images/articles/article-3.jpg',
      title: 'Tunisia e-health valley',
      author: 'Khawla Ben Ahmed',
      date: new Date('2020-07-06'),
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    }
  ];

  constructor(
    private scriptsLoaderService: ScriptsLoaderService,
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.articlesArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.articlesArray);
    this.initForm();
  }

  ngAfterViewInit() {
    this.loadQuillStylesheets();
    this.loadQuillScripts();
  }

  loadQuillScripts(): void {
    this.scriptsLoaderService.addManyScriptsAsync(
      '/assets/vendors/js/editors/quill/katex.min.js',
      '/assets/vendors/js/editors/quill/highlight.min.js',
      '/assets/vendors/js/editors/quill/quill.min.js',
      // Quill is initialized in this js file below
      '/assets/js/scripts/pages/app-email.js'
    ).then();
  }

  loadQuillStylesheets(): void {
    this.scriptsLoaderService.addStylesheets(
      '/assets/vendors/css/editors/quill/katex.min.css',
      '/assets/vendors/css/editors/quill/monokai-sublime.min.css',
      '/assets/vendors/css/editors/quill/quill.snow.css'
    );
  }


  initForm(): void {
    this.form = new FormGroup({
      title: new FormControl(null),
      author: new FormControl(null),
      introduction: new FormControl(null),
      text: new FormControl(null),
    });
  }

  setFormValues(): void {
    this.form.patchValue({
      // memberName: this.membersArray[this.selectedElementIndex].name,
      // memberPost: this.membersArray[this.selectedElementIndex].post
    });
  }

  clearFormValues(): void {
    this.form.reset();
  }

  onSubmit(): void {
    const values = this.form.value;
    this.articlesArray.push({
      title: values.title,
      author: values.author,
      date: new Date(),
      image: '/assets/images/elements/no-image.jpg',
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquam, cupiditate, deleniti dignissimos eius excepturi hic id iusto magni possimus, quibusdam quis ratione saepe sunt temporibus vitae voluptatem!'
    });
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


}
