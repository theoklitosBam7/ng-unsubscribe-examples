import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-first',
  template: `<p>first component works!</p>`,
})
export class FirstComponent implements OnInit, OnDestroy {
  private timer1$ = timer(0, 1000);
  private timer2$ = timer(0, 2500);

  private destroy$ = new Subject<void>();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.timer1$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (val) => this.messageService.add(`FirstComponent timer1$: ${val}`),
        (err) => console.error(err),
        () => this.messageService.add(`>>> FirstComponent timer1$ completed`)
      );

    this.timer2$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (val) => this.messageService.add(`FirstComponent timer2$: ${val}`),
        (err) => console.error(err),
        () => this.messageService.add(`>>> FirstComponent timer2$ completed`)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
