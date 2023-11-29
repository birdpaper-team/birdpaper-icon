import type { App } from 'vue';
import _IconConnectAddressTwo from './icon-connect-address-two.vue';

const IconConnectAddressTwo = Object.assign(_IconConnectAddressTwo, {
  install: (app: App) => {
    app.component(_IconConnectAddressTwo.name, _IconConnectAddressTwo);
  }
});

export default IconConnectAddressTwo;