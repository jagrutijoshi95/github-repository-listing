import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../model/user.model';
import { Repository } from '../model/reository.model';
import { userMock } from 'src/assets/mocks/user.mock';
import { repositoryMock } from 'src/assets/mocks/repository.mock';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserDetails', () => {
    it('should return an Observable<User>', () => {
      const userName = 'testUser';
      const dummyUser: User = userMock;

      service.getUserDetails(userName).subscribe((user) => {
        expect(user).toEqual(dummyUser);
      });

      const req = httpMock.expectOne(`${service.apiUrl}${userName}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);
    });
  });

  describe('getUserRepositoryList', () => {
    it('should return an Observable<Array<Repository>>', () => {
      const userName = 'jagrutijoshi95';
      const perPage = 10;
      const page = 1;
      const dummyRepositories: Repository[] = repositoryMock;
      
      service.getUserRepositoryList(userName, perPage, page).subscribe((repositories) => {
        expect(repositories.length).toBe(2);
        expect(repositories).toEqual(dummyRepositories);
      });

      const req = httpMock.expectOne(`${service.apiUrl}${userName}/repos?per_page=${perPage}&page=${page}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyRepositories);
    });
  });
});

