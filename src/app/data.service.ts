import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
 })
export class DataService {

  constructor(private http: HttpClient) { }
    
  getUsers() {
    return this.http.get
      // jsonplaceholder.typicode.com can be very useful
      ('https://jsonplaceholder.typicode.com/users')
  }
  // userid is a passed parameter
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
