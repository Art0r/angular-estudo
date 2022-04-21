import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl: string = "https://jsonplaceholder.typicode.com/users/"

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<User> {
    const url: string = this.userUrl + id;
    return this.http.get<User>(url);
  }
}
