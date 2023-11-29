import type { App } from 'vue';
import _IconHold from './icon-hold.vue';

const IconHold = Object.assign(_IconHold, {
  install: (app: App) => {
    app.component(_IconHold.name, _IconHold);
  }
});

export default IconHold;