import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostsService } from 'src/app/services/posts/posts.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let service: PostsService;
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService, PostsComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PostsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
  /*
    it('should load posts after filter input', async () => {
  
      const element = fixture.nativeElement;
      const input: HTMLInputElement = element.querySelector("#filter-posts");
  
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        input.value = "sunt";
        input.dispatchEvent(new Event('input'));
        console.log(component.filteredPosts.length);
        expect(component.filteredPosts.length).toBe(7);
      });
    });*/
});