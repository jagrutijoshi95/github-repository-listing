import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/data/model/reository.model';
import { UserService } from 'src/app/data/service/user.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  @Input() userName!: string; 
  @Input() totalRepositories!: number; //total count of repositories

  rowsPerPage: number = 10;
  $repositoryList!: Observable<Repository[]>;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getRepositoryList();
  }

  /**
   * gets the list of repositories as per the username and page data passed
   * @param rowsPerPage: reflects total count of repositories showin on one page
   * @param pageNumber: current page number
   */
  getRepositoryList(rowsPerPage: number = 10, pageNumber: number = 1) {
    this.$repositoryList = this.userService.getUserRepositoryList(this.userName, rowsPerPage, pageNumber);
  }

}
