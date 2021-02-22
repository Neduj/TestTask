import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
const MATERIAL_COMPONENTS = [
  MatCardModule,
  MatDividerModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatButtonModule,
];

@NgModule({
  exports: [MATERIAL_COMPONENTS],
  imports: [MATERIAL_COMPONENTS],
})
export class MaterialModule {}
