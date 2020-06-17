import { Storage } from '~/storage';
import { Card } from '~/models';

export const cardStorage = new Storage<Card[]>('cards');
