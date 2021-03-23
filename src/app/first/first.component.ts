import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-first',
  template: `<p>first component works!</p>`,
})
export class FirstComponent implements OnInit {
  timer1$ = timer(0, 1000);

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.timer1$.subscribe((val) =>
      this.messageService.add(`FirstComponent timer1$: ${val}`)
    );
  }
}
