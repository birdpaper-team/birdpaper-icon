import type { App } from 'vue';
import _IconLayoutGridFill from './icon-layout-grid-fill.vue';

const IconLayoutGridFill = Object.assign(_IconLayoutGridFill, {
  install: (app: App) => {
    app.component(_IconLayoutGridFill.name, _IconLayoutGridFill);
  }
});

export default IconLayoutGridFill;