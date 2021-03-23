import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-first',
  template: `
    <p>first component works!</p>
    <p>{{ timer3$ | async }}</p>
  `,
})
export class FirstComponent implements OnInit, OnDestroy {
  private timer1$ = timer(0, 1000);
  private timer2$ = timer(0, 2500);

  timer3$ = timer(0, 1000);

  private subscription = new Subscription();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.timer1$.subscribe((val) =>
        this.messageService.add(`FirstComponent timer1$: ${val}`)
      )
    );

    this.subscription.add(
      this.timer2$.subscribe((val) =>
        this.messageService.add(`FirstComponent timer2$: ${val}`)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
