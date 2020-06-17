import { AsyncStorage } from 'react-native';

export class Storage<T> {
  private _identifier: string;

  public constructor(identifier: string) {
    this._identifier = identifier;
  }

  public async read(): Promise<T> {
    const data = await AsyncStorage.getItem(this._identifier);
    return data ? JSON.parse(data) : null;
  }

  public async store(data: T): Promise<void> {
    await AsyncStorage.setItem(this._identifier, JSON.stringify(data));
  }

  public async clear(): Promise<void> {
    await AsyncStorage.removeItem(this._identifier);
  }
}
