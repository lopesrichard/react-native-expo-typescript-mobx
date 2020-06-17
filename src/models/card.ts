import { observable, action } from 'mobx';

export interface Card {
  number: string;
}

export class CardImpl implements Card {
  @observable private _number: string = '';

  @action
  public set number(number: string) {
    this._number = number;
  }

  public get number(): string {
    return this._number;
  }
}
