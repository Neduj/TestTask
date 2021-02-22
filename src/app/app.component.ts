import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import { ICredit } from './models/credit.interface';
import { IData } from './models/data-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  calculator: IData = {} as IData;

  credit: ICredit = {
    amount: 0,
    term: 0,
    loading: false,
    multiplier: 0,
  };

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getSliderValue(value?: number): void {
    const subscription$ = this.backendService
      .calculate(this.credit)
      .subscribe((details) => {
        if (details && details.data && details.data.multiplier) {
          this.credit.percent =
            this.calculator.data.amount.value * details.data.multiplier;
        }

        if (value) {
          this.calculator.data.amount.value = this.credit.amount;
          this.calculator.data.term.value = this.credit.term;
          this.setDate();
        }

        this.credit.loading = details.loading;

        if (!details.loading) {
          subscription$.unsubscribe();
        }
      });
  }

  private getDetails(): void {
    const subscription$ = this.backendService
      .getDetails()
      .subscribe((details) => {
        if (details.data) {
          this.calculator.data = details.data;
          this.credit.amount = details.data.amount.value;
          this.credit.term = details.data.term.value;
          this.setDate();
          this.getSliderValue();

          if (!details.loading) {
            subscription$.unsubscribe();
          }
        }
      });
  }

  private setDate(): void {
    const date = new Date();
    date.setDate(date.getDate() + this.calculator.data.term.value);
    this.credit.date = date.toLocaleString('ru', {
      month: 'numeric',
      year: 'numeric',
      day: 'numeric',
    });
  }
}
