import type { App } from 'vue';
import _IconXtzFill from './icon-xtz-fill.vue';

const IconXtzFill = Object.assign(_IconXtzFill, {
  install: (app: App) => {
    app.component(_IconXtzFill.name, _IconXtzFill);
  }
});

export default IconXtzFill;