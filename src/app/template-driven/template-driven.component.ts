import { Component, OnInit } from '@angular/core';

interface Animal {
  name: string;
  type: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  animal: Animal = {
    name: '',
    type: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.animal);
  }

}
