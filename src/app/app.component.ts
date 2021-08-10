import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { PageResponse } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api-angular-assesment';
  array = [1, 2]
  users: PageResponse = new PageResponse();
  noDatatoShow: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchUsers(1)
  }

  fetchUsers(pageNumber: number | string) {
    this.apiService.getUsers(pageNumber)
      .subscribe((result: PageResponse) => {
        this.users = result;
      },
        err => {
          if (err.error.message) {
            console.log(err.error.message);
          }
        })
  }


  handleFetch(pageNumber: string | number) {
    this.users = new PageResponse();
    this.fetchUsers(pageNumber)
  }
}
