import type { App } from 'vue';
import _IconConnectAddressOne from './icon-connect-address-one.vue';

const IconConnectAddressOne = Object.assign(_IconConnectAddressOne, {
  install: (app: App) => {
    app.component(_IconConnectAddressOne.name, _IconConnectAddressOne);
  }
});

export default IconConnectAddressOne;