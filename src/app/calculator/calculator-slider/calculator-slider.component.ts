import { Component, EventEmitter, Input, Output } from '@angular/core';

interface SliderOptions {
  min: number;
  max: number;
  step: number;
  value: number;
}

@Component({
  selector: 'app-calculator-slider',
  templateUrl: './calculator-slider.component.html',
  styleUrls: ['./calculator-slider.component.scss'],
})
export class CalculatorSliderComponent {
  @Input() sliderOptions: SliderOptions = {} as SliderOptions;
  @Input() label = { left: '', right: '' };
  @Output() getValue = new EventEmitter<number>();

  onValueChanged(calculatorValue: number | null): void {
    if (calculatorValue) {
      this.getValue.emit(calculatorValue);
    }
  }

  onPlus(calculatorValue: number): void {
    calculatorValue = calculatorValue + this.sliderOptions.step;
    this.onValueChanged(calculatorValue);
  }

  onMinus(calculatorValue: number): void {
    calculatorValue = calculatorValue - this.sliderOptions.step;
    this.onValueChanged(calculatorValue);
  }
}
