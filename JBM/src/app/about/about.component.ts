import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../_services/git-hub.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public age:any;
  public gitData:any;

  constructor(
    private gitHubService: GitHubService
  ) { }

  ngOnInit(): void {
    this.CalcAge()
    this.getUser()
  }

  CalcAge()
  {
    var birthdate = new Date("March 18, 1996");
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

  getUser() {
    this.gitHubService
    .getUserInfo()
    .subscribe(data => {this.gitData = data;
    });
  }

}
