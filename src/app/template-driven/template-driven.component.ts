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
    name: 'Perro',
    type: 'Dog'
  };

  withoutNgModel = 'Sin Ng Model';
  withNgModel = 'Con Ng Model';

  types = [
    'Mamíferos',
    'Peces',
    'Aves',
    'Reptiles',
    'Anfibios'
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(this.animal);
    console.log(form);
  }

}
