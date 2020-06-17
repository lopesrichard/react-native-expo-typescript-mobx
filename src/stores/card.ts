import { observable, action, computed } from 'mobx';
import { Card } from '~/models/card';
import { cardStorage } from '~/storage';

class CardStore {
  @observable private _cards: Card[] = [];

  @action
  public set(cards: Card[]): void {
    this._cards = cards;
  }

  public get(index: number): Card {
    return this._cards[index];
  }

  public all(): Card[] {
    return this._cards;
  }

  @action
  public add(card: Card): void {
    this._cards.push(card);
  }

  @action
  public remove(card: Card): void {
    const index = this.findIndex(c => c.number === card.number);
    this._cards.splice(index, 1);
  }

  public find(callback: (card: Card) => boolean): Card {
    return this._cards.find(callback);
  }

  public findIndex(callback: (card: Card) => boolean): number {
    return this._cards.findIndex(callback);
  }

  @action
  public async load(): Promise<void> {
    this._cards = await cardStorage.read();
  }
}

export const cardStore = new CardStore();
