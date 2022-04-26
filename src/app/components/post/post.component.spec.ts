import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { PostsService } from '../../services/posts/posts.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let service: PostsService
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    })
      .compileComponents();
    service = TestBed.inject(PostsService)
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
