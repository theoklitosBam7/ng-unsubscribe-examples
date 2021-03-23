import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DestroyService } from '../destroy.service';

@Component({
  selector: 'app-first',
  template: `<p>first component works!</p>`,
  providers: [DestroyService],
})
export class FirstComponent implements OnInit {
  private timer1$ = timer(0, 1000);
  private timer2$ = timer(0, 2500);

  constructor(
    private messageService: MessageService,
    private readonly destroy$: DestroyService
  ) {}

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
}
