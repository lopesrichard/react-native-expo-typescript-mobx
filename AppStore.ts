import { observable, action } from 'mobx';
import { LoaderStore } from '~/stores/loader';

class AppStore {
  @observable public loader: LoaderStore;

  public constructor() {
    this.loader = new LoaderStore();
  }
}

export const store = new AppStore();
