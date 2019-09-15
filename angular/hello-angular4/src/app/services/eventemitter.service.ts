import { Injectable,EventEmitter,Output, Input } from '@angular/core';

@Injectable()

export class EventemitterService {
  @Output() dataStr = new EventEmitter();
  constructor() { }
  sendMessage(data: string) {
    this.dataStr.emit(data);
  }
}
