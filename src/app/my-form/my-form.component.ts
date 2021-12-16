import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})

export class MyFormComponent implements OnInit {

  model: Order = new Order();

  onSubmit() {
    console.log(this.model);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
