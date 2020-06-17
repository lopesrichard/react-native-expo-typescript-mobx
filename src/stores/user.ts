import { observable, action, computed } from 'mobx';
import { User } from '~/models/user';

import { userStorage } from '~/storage';

class UserStore {
  @observable private _user: User;

  public initialized(): boolean {
    return this._user !== null;
  }

  public get(): User {
    return this._user;
  }

  @action
  public set(user: User): void {
    this._user = user;
  }

  @action
  public clear(): void {
    this._user = null;
  }

  @action
  public async load(): Promise<void> {
    this._user = await userStorage.read();
  }
}

export const userStore = new UserStore();
