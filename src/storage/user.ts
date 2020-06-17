import { Storage } from '~/storage';
import { User } from '~/models';

export const userStorage = new Storage<User>('about');
