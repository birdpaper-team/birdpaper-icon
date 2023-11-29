import type { App } from 'vue';
import _IconReservedFill from './icon-reserved-fill.vue';

const IconReservedFill = Object.assign(_IconReservedFill, {
  install: (app: App) => {
    app.component(_IconReservedFill.name, _IconReservedFill);
  }
});

export default IconReservedFill;