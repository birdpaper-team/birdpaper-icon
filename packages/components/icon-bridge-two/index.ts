import type { App } from 'vue';
import _IconBridgeTwo from './icon-bridge-two.vue';

const IconBridgeTwo = Object.assign(_IconBridgeTwo, {
  install: (app: App) => {
    app.component(_IconBridgeTwo.name, _IconBridgeTwo);
  }
});

export default IconBridgeTwo;