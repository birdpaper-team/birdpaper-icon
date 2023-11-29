import type { App } from 'vue';
import _IconFan from './icon-fan.vue';

const IconFan = Object.assign(_IconFan, {
  install: (app: App) => {
    app.component(_IconFan.name, _IconFan);
  }
});

export default IconFan;