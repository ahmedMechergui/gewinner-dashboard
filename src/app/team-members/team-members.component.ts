import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ListViewLoaderService} from '../list-view-loader.service';
import {OrdersListManagementService} from '../orders-list-management.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  form: FormGroup;
  files: File[] = [];
  selectedElementIndex: number;
  membersArray = [
    {
      image: '/assets/images/team/team-1.jpg',
      name: 'John Doe',
      post: 'Chief executive officer',
    },
    {
      image: '/assets/images/team/team-6.jpg',
      name: 'Fieby Doe',
      post: 'Manger',
    },
    {
      image: '/assets/images/team/team-3.jpg',
      name: 'Mark Doe',
      post: 'Senior electrical engineer',
    },
    {
      image: '/assets/images/team/team-1.jpg',
      name: 'John Doe',
      post: 'Chief executive officer',
    },
    {
      image: '/assets/images/team/team-6.jpg',
      name: 'Fieby Doe',
      post: 'Manger',
    },
    {
      image: '/assets/images/team/team-3.jpg',
      name: 'Mark Doe',
      post: 'Senior electrical engineer',
    },
    {
      image: '/assets/images/team/team-1.jpg',
      name: 'John Doe',
      post: 'Chief executive officer',
    },
    {
      image: '/assets/images/team/team-6.jpg',
      name: 'Fieby Doe',
      post: 'Manger',
    },
    {
      image: '/assets/images/team/team-3.jpg',
      name: 'Mark Doe',
      post: 'Senior electrical engineer',
    },
    {
      image: '/assets/images/team/team-1.jpg',
      name: 'John Doe',
      post: 'Chief executive officer',
    },
    {
      image: '/assets/images/team/team-6.jpg',
      name: 'Fieby Doe',
      post: 'Manger',
    },
    {
      image: '/assets/images/team/team-3.jpg',
      name: 'Mark Doe',
      post: 'Senior electrical engineer',
    },
    {
      image: '/assets/images/team/team-1.jpg',
      name: 'John Doe',
      post: 'Chief executive officer',
    },
    {
      image: '/assets/images/team/team-6.jpg',
      name: 'Fieby Doe',
      post: 'Manger',
    },
    {
      image: '/assets/images/team/team-3.jpg',
      name: 'Mark Doe',
      post: 'Senior electrical engineer',
    },
    {
      image: '/assets/images/team/team-1.jpg',
      name: 'John Doe',
      post: 'Chief executive officer',
    },
    {
      image: '/assets/images/team/team-6.jpg',
      name: 'Fieby Doe',
      post: 'Manger',
    },
    {
      image: '/assets/images/team/team-3.jpg',
      name: 'Mark Doe',
      post: 'Senior electrical engineer',
    }
  ];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    public ordersListManagementService: OrdersListManagementService) {
  }

  ngOnInit(): void {
    this.listViewLoaderService.loadStylesheets();
    this.listViewLoaderService.loadDataListViewScript().then();
    this.membersArray.reverse();
    this.ordersListManagementService.setOrdersArray(this.membersArray);
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      memberName: new FormControl(null),
      memberPost: new FormControl(null),
    });
  }

  setFormValues(): void {
    this.form.patchValue({
      memberName: this.membersArray[this.selectedElementIndex].name,
      memberPost: this.membersArray[this.selectedElementIndex].post
    });
  }

  clearFormValues(): void {
    this.form.reset();
  }

  onSubmit(): void {
    const values = this.form.value;
    this.membersArray.push({
      name: values.memberName,
      image: '/assets/images/elements/no-image.jpg',
      post: values.memberPost
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
