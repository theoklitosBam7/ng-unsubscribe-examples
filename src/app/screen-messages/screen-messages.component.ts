import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-screen-messages',
  templateUrl: './screen-messages.component.html',
  styleUrls: ['./screen-messages.component.scss'],
})
export class ScreenMessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
