import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `<p>second component works!</p>`,
})
export class SecondComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
