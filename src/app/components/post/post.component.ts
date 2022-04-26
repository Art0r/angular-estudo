import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { PostsService } from 'src/app/services/posts/posts.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  public post: Post = { userId: 0, id: 0, body: "", title: "" };
  public user: User = { name: "", username: "", email: "" }
  public isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private usersService: UsersService) { }

  getUser(id: number | null): void {
    this.isLoading = true;
    if (id) {
      this.usersService.getUser(id.toString()).subscribe((user) => {
        this.user.name = user.name,
          this.user.username = user.username,
          this.user.email = user.email
      });
      this.isLoading = false;
    }
  }

  getPost(id: string | null): void {
    this.isLoading = true;
    if (id) {
      this.postsService.getPost(id).subscribe((post) => {
        console.log(post);
        this.post.userId = post.userId,
          this.post.id = post.id,
          this.post.title = post.title,
          this.post.body = post.body,
          this.getUser(post.userId);
      });
      this.isLoading = false;
    }

  }

  ngOnInit(): void {
    const postId: string | null = this.route.snapshot.paramMap.get('id');
    this.getPost(postId);
  }

}
