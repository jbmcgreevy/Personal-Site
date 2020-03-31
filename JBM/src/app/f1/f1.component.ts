import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formula1Service } from '../formula-1.service';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component implements OnInit {
  f1Data: any;


  constructor(
    private f1Service: Formula1Service
  ) { }

  ngOnInit(): void {
    this.getRace()
  }

  getRace() {
    this.f1Service
    .getNextRace()
    .subscribe(data => {this.f1Data = data;
    console.log(this.f1Data);
    });
  }

}
