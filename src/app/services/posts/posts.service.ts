import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Photo } from '../../interfaces/photo';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";
  private photosUrl = "https://jsonplaceholder.typicode.com/photos";
  private postUrl = "https://jsonplaceholder.typicode.com/posts/"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl);
  }

  getPost(id: string): Observable<Post> {
    const url: string = this.postUrl + id
    return this.http.get<Post>(url);
  }
}
