import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let httpController: HttpTestingController;

  afterEach(() => {
    httpController.verify();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(PostsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should return Observable<Post>', () => {
    const mockPost: Post = {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    service.getPost("1").subscribe((res) => {
      expect(res).toEqual(mockPost);
    });

    const url: string = "https://jsonplaceholder.typicode.com/posts/1";
    const req = httpController.expectOne({
      method: "GET",
      url: url
    })
    expect(req.request.method).toBe("GET");
    req.flush(mockPost);
  })

});
