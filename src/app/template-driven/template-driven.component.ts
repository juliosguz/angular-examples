import { Component, OnInit } from '@angular/core';

interface Animal {
  name: string;
  type?: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  animal: Animal = {
    name: 'Perro',
    type: 'mamiferos'
  };

  withoutNgModel = 'Sin Ng Model';
  withNgModel = 'Con Ng Model';
  withNgModelB = 'Con Ng ModelB';

  types = [
    'mamiferos',
    'peces',
    'aves',
    'reptiles',
    'anfibios'
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(form) {
    console.log(this.animal);
    console.log(form);
  }

  verify(form) {
    console.log('form', form);
    console.log('form.value', form.value);
  }

}
