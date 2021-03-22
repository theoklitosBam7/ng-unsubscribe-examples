import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<p>first component works!</p>`,
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
