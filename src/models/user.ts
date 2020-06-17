import { observable, action } from 'mobx';

export interface User {
  name: string;
}

export class UserImpl implements User {
  @observable private _name: string = '';

  public constructor(props: User) {
    this._name = props.name;
  }

  @action
  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}
