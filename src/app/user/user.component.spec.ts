// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserComponent } from './user.component';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UserComponent ]
//     })
//     .compileComponents();
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { of } from 'rxjs';
import { userMock } from 'src/assets/mocks/user.mock';
import { UserService } from '../data/service/user.service';
import { LayoutModule } from '../layout/layout.module';
import { UserComponent } from './user.component';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  const routerSpy = {
    navigate: jasmine.createSpy('navigate')
  }


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: ActivatedRoute, useValue: ActivatedRoute },
        UserService,
        { provide: Router, useValue: routerSpy },
      ],
      imports: [
        HttpClientModule,
        HttpClientModule,
        PaginatorModule,
        AvatarModule,
        InputTextModule,
        LayoutModule,
        CardModule,
        ButtonModule,
        TableModule,
        ChipModule,
        CommonModule],
    })
      .compileComponents();

  });
  beforeEach(() => {
    // component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user details and navigate to details page', fakeAsync(() => {
    const userDetails = userMock;
    const getUserDetailsSpy = spyOn(userService, 'getUserDetails').and.returnValue(of(userDetails));
    component.userName = 'jagrutijoshi95';
    component.getUserDetails();
    tick();
    expect(getUserDetailsSpy).toHaveBeenCalledWith('jagrutijoshi95');

    expect (routerSpy.navigate).toHaveBeenCalledWith (['details'],{ state: { userDetails: userDetails }, relativeTo: ActivatedRoute });


  }));

  afterEach(() => {
    fixture.destroy();
  });
});

