import type { App } from 'vue';
import _IconTireSwing from './icon-tire-swing.vue';

const IconTireSwing = Object.assign(_IconTireSwing, {
  install: (app: App) => {
    app.component(_IconTireSwing.name, _IconTireSwing);
  }
});

export default IconTireSwing;