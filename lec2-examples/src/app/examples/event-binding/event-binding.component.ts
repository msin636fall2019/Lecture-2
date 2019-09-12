//app/examples/event-binding.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


  title: string = 'Event Binding Example';
  inputValue: string;

  constructor() { }

  ngOnInit() {
  }


  showClickEvent(event: Event) {
    console.log(event);
  }


  changeTitle() {
    if (this.title == "Event Binding Example") {
      this.title = 'New Title';
    }
    else {
      this.title = "Event Binding Example"
    }
  }

  getInput(event) {
    this.inputValue = event.target.value;
    console.log(this.inputValue)

  }



}
