import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(PostsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const url: string = "https://jsonplaceholder.typicode.com/posts/1";
    const req = httpController.expectOne({
      method: "GET",
      url: url
    })
    const mockPost: Post = {
      id: 1,
      userId: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    req.flush(mockPost)
    service.getPost("1").subscribe((res) => {
      expect(res).toEqual({
        id: 1,
        userId: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      });
    });
  });

});
