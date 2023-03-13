import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../data/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userName!: string;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {  }

  /**
   * this will get the user details with repository list of passed username
   */
  getUserDetails() {
    this.userService.getUserDetails(this.userName).subscribe(res => {
      this.router.navigate(['details'], { state: { userDetails: res }, relativeTo: this.route });
    });
  }
}
