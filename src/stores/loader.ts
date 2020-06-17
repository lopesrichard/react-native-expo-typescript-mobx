import { observable, action } from 'mobx';

export class LoaderStore {
  @observable private _loading: boolean;

  public loading(): boolean {
    return this._loading;
  }

  @action
  public start(): void {
    this._loading = true;
  }

  @action
  public stop(): void {
    this._loading = false;
  }
}
