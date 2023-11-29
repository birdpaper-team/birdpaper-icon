import type { App } from 'vue';
import _IconLayoutRowFill from './icon-layout-row-fill.vue';

const IconLayoutRowFill = Object.assign(_IconLayoutRowFill, {
  install: (app: App) => {
    app.component(_IconLayoutRowFill.name, _IconLayoutRowFill);
  }
});

export default IconLayoutRowFill;