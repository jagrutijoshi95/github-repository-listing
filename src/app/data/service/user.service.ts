import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { User } from '../model/user.model';
import { Repository } from '../model/reository.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  /**
   * get details of user
   * @param userName 
   * @returns Observable of User type 
   */

  getUserDetails(userName:string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${userName}`);
  }

  /**
   * get repositories for passed username
   * @param userName 
   * @param perPage - how many data to be shown on one page
   * @param page - current page
   * @returns Observable of Repository Array
   */

  getUserRepositoryList(userName:string,perPage:number,page:number):Observable<Array<Repository>>{
    return this.http.get<Repository[]>(`${this.apiUrl}${userName}/repos?per_page=${perPage}&page=${page}`);
  }
}
