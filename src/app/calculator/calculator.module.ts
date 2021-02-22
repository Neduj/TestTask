import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CalculatorActionsComponent } from './calculator-actions/calculator-actions.component';
import { CalculatorAsideComponent } from './calculator-aside/calculator-aside.component';
import { CalculatorContentComponent } from './calculator-content/calculator-content.component';
import { CalculatorDetailsComponent } from './calculator-details/calculator-details.component';
import { CalculatorHeaderComponent } from './calculator-header/calculator-header.component';
import { CalculatorMainComponent } from './calculator-main/calculator-main.component';
import { CalculatorSliderComponent } from './calculator-slider/calculator-slider.component';
import { CalculatorTitleComponent } from './calculator-title/calculator-title.component';
import { CalculatorComponent } from './calculator/calculator.component';

const CALCULATOR_COMPONENTS = [
  CalculatorComponent,
  CalculatorHeaderComponent,
  CalculatorTitleComponent,
  CalculatorMainComponent,
  CalculatorSliderComponent,
  CalculatorContentComponent,
  CalculatorAsideComponent,
  CalculatorDetailsComponent,
  CalculatorActionsComponent,
];

@NgModule({
  declarations: [CALCULATOR_COMPONENTS],
  exports: [CALCULATOR_COMPONENTS, MaterialModule],
  imports: [MaterialModule],
})
export class CalculatorModule {}
