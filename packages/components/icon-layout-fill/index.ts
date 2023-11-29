import type { App } from 'vue';
import _IconLayoutFill from './icon-layout-fill.vue';

const IconLayoutFill = Object.assign(_IconLayoutFill, {
  install: (app: App) => {
    app.component(_IconLayoutFill.name, _IconLayoutFill);
  }
});

export default IconLayoutFill;