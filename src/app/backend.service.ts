// noinspection JSUnusedGlobalSymbols

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Обёртка для данных с сервера.
 */
export interface FetchResult<DataT> {
  /**
   * Возвращает true, пока данные загружаются (в это время data равен null).
   */
  loading: boolean;
  /**
   * Сами данные; равны null пока происходит загрузка.
   */
  data: DataT | null;
}

/**
 * Модель для слайдера в калькуляторе.
 */
export interface CalculatorControl {
  /**
   * Минимальное значение, которое может принимать слайдер.
   */
  min: number;
  /**
   * Максимальное значение, которое может принимать слайдер.
   */
  max: number;
  /**
   * Шаг изменения, например при шаге 50 каждое последующее значение будет больше на 50 (0, 50, 100, 150...).
   */
  step: number;
  /**
   * Начальное значение, которое принимает сам ползунок.
   */
  value: number;
}

/**
 * Модель настроек калькулятора
 */
export interface CalculatorDetails {
  /**
   * Заголовок калькулятора, который содержит html.
   */
  title: string;
  /**
   * Контрол для суммы кредита (@see CalculatorControl)
   */
  amount: CalculatorControl;
  /**
   * Контрол для термина кредита (@see CalculatorControl)
   */
  term: CalculatorControl;
}

/**
 * Переменные, которые передаются в метод BackendService#calculate.
 */
export interface CalculationVariables {
  /**
   * Желаемая сумма кредита
   */
  amount: number;
  /**
   * Желаемый термин кредита
   */
  term: number;
}

/**
 * Результат на запрос calculate
 */
export interface Calculation {
  /**
   * Желаемая сумма кредита (та, что передавалась)
   */
  amount: number;
  /**
   * Желаемый термин кредита (тот, что передавался)
   */
  term: number;
  /**
   * Множитель на проценты (@see README.md).
   */
  multiplier: number;
}

const calculateAmountMultiplier = (amount: number): number => {
  if (amount > 5000) {
    return 0.5;
  } else if (amount > 2500) {
    return 0.1;
  } else if (amount > 1000) {
    return 0.05;
  } else {
    return 0.01;
  }
};

const calculateTermMultiplier = (term: number): number => {
  if (term > 25) {
    return 0.5;
  } else if (term > 15) {
    return 0.25;
  } else {
    return 0.1;
  }
};

const calculateMultiplier = (amount: number, term: number): number | never => {
  return calculateAmountMultiplier(amount) + calculateTermMultiplier(term);
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  getDetails(): Observable<FetchResult<CalculatorDetails>> {
    console.log('getDetails call');
    return new Observable((subscriber) => {
      subscriber.next({
        loading: true,
        data: null,
      });
      setTimeout(() => {
        subscriber.next({
          loading: false,
          data: {
            title: 'Акция к празднику <strong style="color: red">8 марта</strong>!<br><a href="#">ознакомиться</a>',
            amount: {
              min: 50,
              max: 15000,
              step: 50,
              value: 15000 / 2
            },
            term: {
              min: 1,
              max: 30,
              step: 1,
              value: 30 / 2
            }
          }
        });
        subscriber.complete();
      }, 1e3);
    });
  }

  calculate({amount, term}: CalculationVariables): Observable<FetchResult<Calculation>> {
    console.log(`calculate call: {amount: ${amount}, term: ${term}}`);
    return new Observable((subscriber) => {
      subscriber.next({
        loading: true,
        data: null
      });
      setTimeout(() => {
        subscriber.next({
          loading: false,
          data: {
            amount,
            term,
            multiplier: calculateMultiplier(amount, term)
          }
        });
        subscriber.complete();
      }, 1e3);
    });
  }

}
