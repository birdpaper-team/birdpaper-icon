import type { App } from 'vue';
import _IconBridgeOne from './icon-bridge-one.vue';

const IconBridgeOne = Object.assign(_IconBridgeOne, {
  install: (app: App) => {
    app.component(_IconBridgeOne.name, _IconBridgeOne);
  }
});

export default IconBridgeOne;