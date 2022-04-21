import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Post[] = [];
  public filteredPosts: Post[] = [];
  public currentPosts: Post[] = [];
  public isLoading: boolean = false;
  private startCurrentPosts: number = 0;
  public endCurrentPosts: number = 25;
  private stepCurrentPosts: number = 25;
  public morePostsDisabled: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.getPosts().subscribe((postsData: Post[]) => {
      this.postsService.getPhotos().subscribe((photosData: Photo[]) => {
        if (postsData || photosData) {
          this.isLoading = true;
        }
        this.posts = this.insertCover(postsData, photosData);
        this.currentPosts = this.posts.slice(this.startCurrentPosts, this.endCurrentPosts);
        this.filteredPosts = this.insertCover(postsData, photosData);
        this.isLoading = false;
      });
    })
  }

  insertCover(posts: Post[], photos: Photo[]): Post[] {
    posts.map((values) => {
      var rand = Math.floor(Math.random() * photos.length);
      values.thumbnail = photos[rand].url;
    })
    return posts;
  }

  filterPosts(search: string): void {
    if (!search) {
      this.filteredPosts = this.posts;
    }
    this.filteredPosts = this.posts.filter(p => p.title.indexOf(search) > -1)
  }

  morePosts(): void {
    this.endCurrentPosts = this.endCurrentPosts + this.stepCurrentPosts;
    this.currentPosts = this.posts.slice(0, this.endCurrentPosts);
  }
}
