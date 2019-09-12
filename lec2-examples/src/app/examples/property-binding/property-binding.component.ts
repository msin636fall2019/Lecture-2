//app/examples/property-binding.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  btnDisabled: boolean;
  inputValue: string;

  constructor() {
    this.btnDisabled = false;
    this.inputValue = "Enter Text";
    this.toggoleBtn(5);
  }

  ngOnInit() {
  }


  toggoleBtn(time:number){
   setInterval(()=>{
     this.btnDisabled =!this.btnDisabled;
   },time*1000);
  }
}
