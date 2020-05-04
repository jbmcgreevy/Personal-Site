import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CatFactsService } from '../_services/cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css'],
  template: `<img [defaultImage]="defaultImage" [lazyLoad]="image">`
})
export class CatFactsComponent implements OnInit {
  public catData: any;
  public int:any;
  defaultImage = '../assets/cat-min.jpg';
  image = 'https://thiscatdoesnotexist.com/';

  constructor(
    private formBuilder: FormBuilder,
    private catFactsService: CatFactsService
  ) { }

  ngOnInit(): void {
    this.getFacts();
    this.int = this.getRandomInt();

  }

  getFacts() {
    this.catFactsService
    .getFacts()
    .subscribe(data => {this.catData = data;
    console.log(this.catData);
    });
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(187));
  }

  onClickMe() {
    window.location.reload();
  }

}
