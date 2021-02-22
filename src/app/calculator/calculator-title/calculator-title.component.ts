import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-title',
  templateUrl: './calculator-title.component.html',
  styleUrls: ['./calculator-title.component.scss'],
})
export class CalculatorTitleComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
