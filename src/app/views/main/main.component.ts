import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from "rxjs";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})

export class MainComponent implements OnInit, OnDestroy {
  private observable: Observable<string>
  loading: boolean = false;
  private subscription: Subscription | null = null;
  showNavigationArrows = true;

  constructor() {
    this.observable = new Observable((observer: Subscriber<string>) => {
      const timeout = setTimeout(() => {
        observer.next('true');
      }, 10000);
      return {
        unsubscribe() {
          clearInterval(timeout);
        }
      }
    })
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('param')) {
      this.loading = false
    } else {
      this.subscription = this.observable.subscribe((param: string) => {
        sessionStorage.setItem('param', param)
        this.loading = true
      })
    }

  }

  closePopup(): void {
    this.loading = false
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  items = [
    {
      question: 'Собираете ли вы подарочные боксы?',
      answer: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      question: 'Сколько у вас разновидностей чая?',
      answer: 'У нас более двадцати разновидностей чая. И ассортимент постоянно обновляется. Поэтому, выбирая нас, вы можете наслаждаться новыми впечатлениями постоянно!'
    },
    {
      question: 'В какой срок осуществляется доставка?',
      answer: 'Доставка осуществляется в течение суток с момента заказа в пределах МКАД.'
    },
    {
      question: 'У вас обновляется ассортимент?',
      answer: 'Обновление нашего ассортимента происходит сезонно. Так вначале каждого сезона добавляются 3 новых вида чая.'
    },
    {
      question: 'Какого объема у вас пачки чая?',
      answer: 'Мы предлагаем вам пакетики по 50 и 100 грамм нашего ароматнейшего чая'
    }
  ];


}
