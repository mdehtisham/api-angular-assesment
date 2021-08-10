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
  user = {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
  }
  users: PageResponse = new PageResponse();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchUsers(1)
  }

  fetchUsers(pageNumber: number | string) {
    this.apiService.getUsers(pageNumber)
      .subscribe((result: PageResponse) => {
        this.users = result;
        console.log(this.users)
      },
        err => {
          if (err.error.message) {
            console.log(err.error.message);
          }
        })
  }
}
