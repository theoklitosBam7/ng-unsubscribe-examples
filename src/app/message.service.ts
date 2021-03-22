import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    this.messages = [...this.messages, message];
  }

  clear(): void {
    this.messages.length = 0;
  }
}
