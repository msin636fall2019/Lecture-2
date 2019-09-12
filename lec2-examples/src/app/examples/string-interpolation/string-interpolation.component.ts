//app/examples/string-interpolation.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {


  title: string;
  developerName: string;
  constructor() {
    this.title = 'String Interpolation Example';
    this.developerName = 'Alfred';
    this.changeDisplay('New Title', 5);
  }

  ngOnInit() {
  }


  changeDisplay(title: string, time: number) {
    setTimeout(() => {
      this.title = title;
    }, time * 1000);
  }

}
