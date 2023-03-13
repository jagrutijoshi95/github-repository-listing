import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/data/model/user.model';
import { UserService } from 'src/app/data/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userDetails!:User;

  constructor(private router: Router,private userService:UserService){
    /**
     * data contain the user-details fetched from the Router state
     */
    let data = this.router.getCurrentNavigation();
    if(data?.extras?.state?.['userDetails']){
        this.userDetails = data.extras.state['userDetails'];
    }
  }

  ngOnInit(): void {

  }
}
