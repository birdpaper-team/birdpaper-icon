import type { App } from 'vue';
import _IconSwing from './icon-swing.vue';

const IconSwing = Object.assign(_IconSwing, {
  install: (app: App) => {
    app.component(_IconSwing.name, _IconSwing);
  }
});

export default IconSwing;