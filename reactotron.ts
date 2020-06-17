import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

const tron = Reactotron.configure({ host: '192.168.0.20' })
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .connect();

tron.clear();

(console as any).tron = tron;
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default tron;
