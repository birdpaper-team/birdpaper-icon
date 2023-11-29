import type { App } from 'vue';
import _IconHoldInterface from './icon-hold-interface.vue';

const IconHoldInterface = Object.assign(_IconHoldInterface, {
  install: (app: App) => {
    app.component(_IconHoldInterface.name, _IconHoldInterface);
  }
});

export default IconHoldInterface;