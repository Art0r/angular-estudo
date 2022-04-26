import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should return Observable<User>', () => {
    const mockUser = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      }
    }

    service.getUser("1").subscribe((res) => {
      expect(res).toEqual(mockUser);
    });

    const url: string = "https://jsonplaceholder.typicode.com/users/1";
    const req = httpController.expectOne({
      method: "GET",
      url: url
    })
    expect(req.request.method).toBe("GET");
    req.flush(mockUser);
  });
});
